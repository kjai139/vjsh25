import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(`${process.env.NEXT_PUBIC_STRIPE}`)
    }
    return stripePromise
}

export default getStripe