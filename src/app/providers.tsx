'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { CurrencyProvider } from "./_context/currencyProvider"
import SessionWrapper from "./_context/sessionProvider"

export function Providers({children}:{children:React.ReactNode}) {
    return (
        <NextUIProvider>
            <SessionWrapper>
            <CurrencyProvider>
            <NextThemesProvider attribute="class" defaultTheme="red-dark" themes={['red-light', 'red-dark']}>
            {children}
            </NextThemesProvider>
            </CurrencyProvider>
            </SessionWrapper>
        </NextUIProvider>
    )
}