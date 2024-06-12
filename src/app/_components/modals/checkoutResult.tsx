"use client"

import { useCurrency } from "@/app/_context/currencyProvider"
import { updateCurrency } from "@/app/actions"
import { Button } from "@nextui-org/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function CheckoutResult () {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    
    const session_id = searchParams.get('session_id')
    const success = searchParams.get('success')
    const cancelled = searchParams.get('cancelled')
    const [message, setMessage] = useState('')
    const { currency, setCurrency} = useCurrency()

    


    

    useEffect(() => {
        if (session_id) {
            

            const updateCur = async () => {
                const result:any = await updateCurrency(session_id)
                console.log(result)
                if (result === typeof Number) {
                    setCurrency(result.coins)
                } else {
                    console.error(result)
                }
                

            }
            if (success) {
                setMessage('Payment Successful')
                console.log('Payment Success')
                
            }
            

        } else if (cancelled) {
            setMessage('Payment Cancelled')
            console.log('Payment Cancelled')
        }
    }, [session_id, cancelled])

    const closeModal = () => {
        setMessage('')
        router.replace(`${pathname}`)
    
    }

    return (
        <>
        {message ?
        <div className="absolute flex top-0 left-0 items-center justify-center overlay w-full h-screen">
            <div className="relative">
                <h1>{message}</h1>
                <Button onPress={() => closeModal()}>Close</Button>
            </div>
        </div>
        : null
        }
        
        </>
    )
    

}