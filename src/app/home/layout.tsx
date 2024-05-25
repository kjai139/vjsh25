import Header from "../_components/ui/header"
import TopNav from "../_components/ui/topNav"


export default function HomeLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header></Header>
            {children}
        </section>
    )
}