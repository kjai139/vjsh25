'use client'
import { Link } from "@nextui-org/react"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { GrCurrency } from "react-icons/gr"
import { usePathname } from "next/navigation"

export default function SideNav () {
    const pathname = usePathname()
    return (
        <ul className="p-4 border-r-2 border-default">
            <li>
                <Link isDisabled={pathname === '/dashboard'} color="foreground" isBlock href="/dashboard" className="flex gap-4 p-2">
                <MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>
                <span>
                    Dashboard
                </span>
                </Link>

                <Link isDisabled={pathname === '/currency'} color="foreground" isBlock href="/currency" className="flex gap-4 p-2">
                <GrCurrency></GrCurrency>
                <span>
                    Currency
                </span>
                </Link>
            </li>
        </ul>
    )
}