import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";

import SignInBtn from "../buttons/signInBtn";

interface MenuItemsTypes {
  name:string,
}

export default function TopNav () {

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
                <SignInBtn></SignInBtn>
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