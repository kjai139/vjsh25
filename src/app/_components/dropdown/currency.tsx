"use client"
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { RiCoinsLine } from "react-icons/ri";
import type { Session } from "next-auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


interface AvatarDropDownProps {
    session: Session | null
}

export default function CurrencyDropdown ({session}:AvatarDropDownProps) {

    const pathname = usePathname()

    const [currencyAmt, setCurrencyAmt] = useState(0)

    const getCurrency = async () => {
        try {
            const email = { email:session?.user?.email }
            const response = await fetch(`/api/user/getCurrency`, {
                method: 'POST',
                body: JSON.stringify(email)

            })

            if (response.ok) {
                const data = await response.json()
                console.log('DATA:', data)
                setCurrencyAmt(data.coins)
            } else {
                throw new Error('Something went wrong in getting a response')
            }

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (session) {
            getCurrency()
        } else {
            setCurrencyAmt(0)
        }
    }, [])



    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" color="primary" startContent={<RiCoinsLine size={20}></RiCoinsLine>}>$ {currencyAmt}</Button>

                    
                </DropdownTrigger>
                <DropdownMenu aria-label="User Currency Actions">
                    <DropdownItem textValue="Link to buy coins" aria-label="Link to Dashboard">
                        <Link color="foreground" href="/user/currency" isDisabled={pathname === '/user/currency'}>
                            Buy coins
                        </Link>

                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}