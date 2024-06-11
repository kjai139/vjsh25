'use server'

import { dbConnect } from "@/lib/mongo"
import transModel from "./_models/transModel"
import userModel from "./_models/userModel"
import { auth } from "@/auth"

const stripe = require('stripe')(process.env.STRIPE_SECRET)


export async function updateCurrency(sessionId:string) {
    /* console.log('sessionId from sA:', sessionId) */
    const session = await auth()
    try {
        await dbConnect()
        const stripeSession = await stripe.checkout.sessions.retrieve(sessionId)
        const user = await userModel.findOne({
            email: session?.user?.email
        })

        if (!user) {
            throw new Error('User email does not exist')
        }

        console.log('session from sA:', session)
        const transaction = new transModel({
            stripeSessionId: stripeSession.id,
            userRef: user._id,
            amount: stripeSession.amount_subtotal,
            coins: stripeSession.amount_subtotal
        })
        await transaction.save()
        console.log(`New transaction created for ${user._id}`)
        // add the coin calculation in user wip

    } catch (err) {
        console.error(err)
        return err
    }
}