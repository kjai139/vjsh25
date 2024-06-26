'use client'
import { Link } from "@nextui-org/react"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { GrCurrency } from "react-icons/gr"
import { usePathname } from "next/navigation"

export default function SideNav () {
    const pathname = usePathname()
    return (
        <ul className="p-6 border-r-2 border-default">
            <li className="flex flex-col gap-2 font-semibold">
                <Link isDisabled={pathname === '/user/dashboard'} color="foreground" isBlock href="/user/dashboard" className="flex gap-4 p-2">
                <MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>
                <span>
                    Dashboard
                </span>
                </Link>

                <Link isDisabled={pathname === '/user/currency'} color="foreground" isBlock href="/user/currency" className="flex gap-4 p-2">
                <GrCurrency></GrCurrency>
                <span>
                    Currency
                </span>
                </Link>
            </li>
        </ul>
    )
}