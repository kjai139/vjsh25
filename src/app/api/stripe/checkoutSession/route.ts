import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = require('stripe')(process.env.STRIPE_SECRET)


export async function POST (request:NextRequest) {
    try {
        const req = await request.json()
        console.log(req)
        const priceId = req.priceId
        const headersList = headers()
        const referer = headersList.get('referer')
        console.log('***referer', referer)
       

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `${referer}/?success=true?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url:`${referer}/?cancelled=true?session_id={CHECKOUT_SESSION_ID}`
        })

        console.log('stripe session created', session.url)

        return NextResponse.json({
            sessionUrl: session.url
        })

    } catch (err:any) {
        console.error('Error creating stripe session')
        return NextResponse.json({
            error:err?.message
        }, {
            status: 500
        })
    }
}