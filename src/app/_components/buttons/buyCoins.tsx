"use client"

import { Button } from "@nextui-org/react"
import getStripe from "@/lib/stripe"
import { useState } from "react"


interface BuyCoinsBtnProps {
    priceId: string,
    prodId: string,
    name: string,
}




export default function BuyCoinsBtn ({priceId, prodId, name}:BuyCoinsBtnProps) {
    const [errorMsg, setErrorMsg] = useState('')
    const handleBuy = async (priceId:string) => {
        const data = {
            priceId: priceId,
            prodId: prodId,
            prodName: name
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
            } else {
                const data = await response.json()
                setErrorMsg(data.message)

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
            {   errorMsg ? 
                <div className="toverlay absolute top-0 left-0 w-full h-screen flex justify-center items-center">
                    <div className="flex flex-col bg-default p-4 rounded">
                        <span className="mb-4">
                            {errorMsg}
                        </span>
                        <Button onPress={() => setErrorMsg('')} color="primary" fullWidth radius="none">Close</Button>
                    </div>
                </div>: null 
            }
        <Button className="font-semibold" color="primary" radius="sm" fullWidth onPress={() => handleBuy(priceId)}>Buy</Button>
        </div>
    )
}