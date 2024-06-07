import Header from "@/app/_components/ui/header"
import SideNav from "../_components/ui/sideNav"

export default function CurrencyLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header></Header>
            <div className="flex">
            <SideNav></SideNav>
            {children}
            </div>
        </section>
    )
}