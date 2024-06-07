import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from '../../../../lib/mongo'
import userModel from "@/app/_models/userModel";

export async function POST(request:NextRequest) {
    await dbConnect()
    const body = await request.json()

    if (!body.email) {
        return NextResponse.json({
            message: 'Error: email does not exist'
        }, {
            status: 400
        })
    }
    
    const theUser = await userModel.findOne({
        email: body.email
    })

    //create user in db if not exist

    if (!theUser) {
        console.log('No record of signed in user')
        const newUser = new userModel({
            email: body.email

        })

        await newUser.save()
        console.log(`New user created for ${body.email}`)
        return NextResponse.json({
            coins: newUser.coins
        })
        
    } 
    
    return NextResponse.json({
        coins: theUser.coins
    })

}