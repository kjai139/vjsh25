"use client"
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";


interface AvatarDropDownProps {
    session: Session
}

export default function AvatarDropdown ({session}:AvatarDropDownProps) {

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
                    <Avatar as="button" src={session.user && session.user.image!} isBordered>

                    </Avatar>
                </DropdownTrigger>
                <DropdownMenu onAction={handleFunction} aria-label="User Profile Actions">
                    <DropdownItem textValue="Link to Dashboard" aria-label="Link to Dashboard">
                        <Link href="/dashboard">
                            Dashboard
                        </Link>

                    </DropdownItem>
                    <DropdownItem key="signout" textValue="Sign out button" aria-label="Sign out button">
                        Sign Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}