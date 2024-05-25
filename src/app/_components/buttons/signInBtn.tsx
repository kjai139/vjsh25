'use client'

import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import SignInModal from "../modals/signInModal"

export default function SignInBtn () {

    const [isModalOpen, setIsModalOpen] = useState(false)
    

    

    

    return (
        <>
        <Button radius="sm" color="primary" onPress={() => setIsModalOpen(prev => !prev) }>Sign In</Button>
        {isModalOpen &&
        <SignInModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></SignInModal>
        }
        </>
    )
}