
interface CurrencyCardProps {
    products: any[]
}

export default function CurrencyCard ({products}:CurrencyCardProps) {
    return (
        <div>
            <div>
            {products && products.data.map((item) => {
                console.log(item)
                return (
                    <div key={item.id}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.default_price.unit_amount / 100}{item.default_price.currency}
                        </span>
                    </div>
                )
            })}
            </div>

        </div>
    )
}