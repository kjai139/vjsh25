
import { auth } from "@/auth";
import TopNav from "./topNav";



export default async function Header() {

    const session = await auth()

    return (
        <>
        <TopNav session={session}></TopNav>
        
        </>
    )
}