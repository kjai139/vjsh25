import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = require('stripe')(process.env.STRIPE_SECRET)

export async function POST (request:NextRequest) {
    const body = request.text()
    const sig = request.headers.get("stripe-signature")

    let event:Stripe.Event

    console.info('Stripe Processing webhook...')

    try {
        event = stripe.webhooks.constructEvent(body, sig as string, process.env.STRIPE_WEBHOOK_SECRET)

        console.info(`${event.type}, Stripe Listening to Webhook Event...`)
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            message: `Webhook Error: ${(err as Error).message}`
        }, {
            status: 400
        })
    }
    //Handle event
    try {
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object as Stripe.Checkout.Session

                console.info('Checkout successful for session - ', session.id)


                //add to db
                break
            case "checkout.session.async_payment_failed":
                const session2 = event.data.object as Stripe.Checkout.Session

                console.info('Checkout failed for session - ', session2.id)
                break
            default:
                //unexpected
                console.warn(event.type, 'Unhandled event')
                break
        }
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            message: 'Webhook handler failed. View logs'
        }, {
            status: 400
        })
    }

    console.info('Stripe Webhook ran successfully')
    return NextResponse.json({
        succeess:true
    })
}