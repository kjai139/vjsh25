import { ReactNode, createContext, useContext, useState } from "react";


interface CurrencyContextType {
    currency: number,
    setCurrency: React.Dispatch<React.SetStateAction<number>>
}

interface CurrencyProviderProps {
    children: ReactNode
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export const CurrencyProvider = ({children, ...props}:CurrencyProviderProps) => {

    const [currency, setCurrency] = useState<number>(0)
    return (
        <CurrencyContext.Provider value={{ currency, setCurrency}}{...props}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () =>  {
    const context = useContext(CurrencyContext)
    if (!context) {
        throw new Error('useCurrency must be used within a currencyProvider')
    }
    return context
}

