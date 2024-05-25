"use client"
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "next-auth/react";



export default function AvatarDropdown ({session}) {

    const handleFunction = (key:any) => {
        switch (key) {
            case 'signout':
                signOut()
        }
    }


    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Avatar as="button" src={session.user.image} isBordered>

                    </Avatar>
                </DropdownTrigger>
                <DropdownMenu onAction={handleFunction} aria-label="User Profile Actions">
                    <DropdownItem key="signout" textValue="Sign out button" aria-label="Sign out button">
                        Sign Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}