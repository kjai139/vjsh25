import { Button, Image } from "@nextui-org/react"
import BuyCoinsBtn from "../buttons/buyCoins"
import CheckoutResult from "../modals/checkoutResult"

interface CurrencyCardProps {
    products: any
}

export default function CurrencyCard ({products}:CurrencyCardProps) {

    
    return (
        <div className="w-full p-8 flex flex-col">
            <span className="text-2xl mb-4">
                <h1>Purchase Coins</h1>
            </span>
            <div className="c-grid gap-4">
            {products && products.data.map((item:any) => {
                console.log(item)

                const price = (item.default_price.unit_amount / 100).toFixed(2)
                return (
                    <div key={item.id} className="c-grid-card gap-2">
                        <Image src={item.images[0]} height={120} width={120}></Image>
                        <div className="flex flex-col">
                            <span className="font-semibold">
                                {item.name}
                            </span>    
                        </div>
                        <span className="flex gap-1">
                            <span className="text-xs">
                                $
                            </span>
                            <span className="font-semibold">
                            {price} {/* {item.default_price.currency.toUpperCase()} */}
                            </span>
                        </span>
                        <BuyCoinsBtn priceId={item.default_price.id}></BuyCoinsBtn>
                    </div>
                )
            })}
            </div>
            <CheckoutResult></CheckoutResult>

        </div>
    )
}