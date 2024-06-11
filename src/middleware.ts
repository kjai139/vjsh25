import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";


export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)'
    ]
}



export async function middleware(request:NextRequest) {
    const session = await auth()
    if (!session?.user) {
        console.log('*** Middleware *** :User is not logged in')
        if (request.nextUrl.pathname.startsWith('/api/stripe/checkoutSession')) {
            return NextResponse.json({
                message: 'User is not logged in'
            }, {
                status:401
            })
        }
        
    } else {
        console.log(' *** Middleware:session *** :', session)

    }
    console.log('Req for:', request.nextUrl.pathname)

    return NextResponse.next()
}