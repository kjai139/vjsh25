import TopNav from "../_components/ui/topNav"


export default function HomeLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <TopNav></TopNav>
            {children}
        </section>
    )
}