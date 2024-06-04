import { Button, Image } from "@nextui-org/react"
import BuyCoinsBtn from "../buttons/buyCoins"
import CheckoutResult from "../modals/checkoutResult"

interface CurrencyCardProps {
    products: any
}

export default function CurrencyCard ({products}:CurrencyCardProps) {

    
    return (
        <div className="w-full">
            <div className="c-grid gap-4">
            {products && products.data.map((item:any) => {
                console.log(item)
                return (
                    <div key={item.id} className="grid gap-2">
                        <Image src={item.images[0]} width={120}></Image>
                        <div className="flex flex-col">
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.default_price.unit_amount / 100}{item.default_price.currency.toUpperCase()}
                        </span>
                        <BuyCoinsBtn priceId={item.default_price.id}></BuyCoinsBtn>
                        </div>
                    </div>
                )
            })}
            </div>
            <CheckoutResult></CheckoutResult>

        </div>
    )
}