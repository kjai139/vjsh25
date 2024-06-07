import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";

import SignInBtn from "../buttons/signInBtn";
import { useEffect } from "react";
import AvatarDropdown from "../dropdown/avatar";
import type { Session } from "next-auth";
import CurrencyDropdown from "../dropdown/currency";

interface MenuItemsTypes {
  name:string,
}

export default function TopNav ({session}: {session: Session | null}) {

    console.log('session:', session)

    const menuItems:MenuItemsTypes[] = [
        {
            name: 'Item 1 💩'
        },
        {
            name: 'Item 2 🪨'
        }
    ]

   


    return (
        <Navbar
        maxWidth="full"
        >
            <NavbarContent>
                <NavbarMenuToggle className="sm:hidden">

                </NavbarMenuToggle>
            <NavbarBrand>
                ACME
            </NavbarBrand>
            </NavbarContent>
            <NavbarContent>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    { session?.user ?
                    <CurrencyDropdown session={session}></CurrencyDropdown>
                    :
                    null
                    }
                </NavbarItem>
                <NavbarItem>
                    {
                        session?.user ?
                        <AvatarDropdown session={session}></AvatarDropdown> : 
                        <SignInBtn></SignInBtn>
                    }
                
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, idx) => {
                    return (
                        <NavbarMenuItem key={`tnav-${idx}`}>
                            <span>
                                {item.name}
                            </span>
                        </NavbarMenuItem>
                    )
                })}
            </NavbarMenu>
        </Navbar>
    )
}