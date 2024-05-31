import Header from "../_components/ui/header"

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header></Header>
            {children}
        </section>
    )
}