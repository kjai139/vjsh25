"use client"

import { Button } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function CheckoutResult () {
    const searchParams = useSearchParams()
    
    const session_id = searchParams.get('session_id')
    const success = searchParams.get('success')
    const cancelled = searchParams.get('cancelled')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (success) {
            setMessage('Payment Successful')
            console.log('Payment Success')
        } else if (cancelled) {
            setMessage('Payment Cancelled')
            console.log('Payment Cancelled')
        }
    }, [success, cancelled, session_id])

    return (
        <>
        {message ?
        <div className="absolute flex top-0 left-0 items-center justify-center overlay w-full h-screen">
            <div className="relative">
                <h1>{message}</h1>
                <Button onPress={() => setMessage('')}>Close</Button>
            </div>
        </div>
        : null
        }
        
        </>
    )
    

}