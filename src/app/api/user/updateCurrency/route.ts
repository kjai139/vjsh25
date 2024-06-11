
import { NextRequest, NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET)


export async function POST (request:NextRequest) {
    try {
        
        const body = await request.json()
        const session = await stripe.checkout.sessions.retrieve(body.sessionId)
        console.log('session from updateCurrency', session)
        return NextResponse.json({
            session:session
        })

    } catch (err:any) {
        console.error(err)
        return NextResponse.json({
            message: `Error in updateCurrency: ${err?.message}`
        }, {
            status: 500
        })
    }
}