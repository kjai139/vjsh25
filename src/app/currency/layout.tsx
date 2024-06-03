import Header from "../_components/ui/header"

export default function CurrencyLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header></Header>
            {children}
        </section>
    )
}