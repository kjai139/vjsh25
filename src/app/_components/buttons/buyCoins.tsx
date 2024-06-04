"use client"

import { Button } from "@nextui-org/react"
import getStripe from "@/lib/stripe"


interface BuyCoinsBtnProps {
    priceId: string
}




export default function BuyCoinsBtn ({priceId}:BuyCoinsBtnProps) {
    const handleBuy = async (priceId:string) => {
        const data = {
            priceId: priceId
        }
        /* const stripe = await getStripe() */

        try {
            const response = await fetch('/api/stripe/checkoutSession', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
    
            })

            if (response.ok) {
                const session = await response.json()
                console.log('STRIPE SESSION:', session)
                window.location.href = session.sessionUrl
            }
        } catch (err:any) {
            if (err.statusCode === 500) {
                console.error(err.message)
            }
        }
        


        

        //Redirect to checkout
        

    }
    return (
        <div>
        <Button className="font-semibold" variant="solid" radius="sm" fullWidth onPress={() => handleBuy(priceId)}>Buy</Button>
        </div>
    )
}