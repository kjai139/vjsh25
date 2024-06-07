import CurrencyCard from "@/app/_components/card/currencyCard"
import SideNav from "@/app/_components/ui/sideNav"
const stripe = require('stripe')(process.env.STRIPE_SECRET)


async function getProducts () {
    try {
        const products = await stripe.products.list({
            expand: ['data.default_price']
        })

        return products

    } catch (err) {
        console.error('Error fetching products', err)
    }
}


export default async function CurrencyPage() {

    const products = await getProducts()
    console.log(products)

    return (
        <div className="flex w-full">
            <CurrencyCard products={products}></CurrencyCard>
            
        </div>
    )
}