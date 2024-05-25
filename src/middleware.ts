import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";



export async function middleware(request:NextRequest) {
    const session = await auth()
    if (!session?.user) {
        console.log('*** Middleware *** :User is not logged in')
    } else {
        console.log(' *** Middleware:session *** :', session)
    }
    console.log('Req for:', request.nextUrl.pathname)

    return NextResponse.next()
}