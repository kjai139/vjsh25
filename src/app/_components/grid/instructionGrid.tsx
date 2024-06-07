
import { PiCoins } from "react-icons/pi"
import { FaPeoplePulling } from "react-icons/fa6"
import { GiPodiumWinner } from "react-icons/gi"
import { Link } from "@nextui-org/react"




export default function InstructionGrid() {
    const iconSize = 40
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full wrapmw mt-10">
            
            <Link href="/user/currency" isBlock color="foreground" className="flex flex-col items-center justify-center igrid text-2xl">
                <PiCoins className="flex-1" size={iconSize}></PiCoins>
                <span className="flex-1">
                    1. Acquire some coins
                </span>
            </Link>
        
            <div className="igrid flex flex-col items-center justify-center text-2xl">
                
                <FaPeoplePulling className="flex-1" size={iconSize}></FaPeoplePulling>
                
                <span className="flex-1">
                2. Use the coins to get help
                </span>
            </div>
            <div className="igrid flex flex-col items-center justify-center text-2xl">
                
                <GiPodiumWinner className="flex-1" size={iconSize}></GiPodiumWinner>
                
                <span className="flex-1">
                3. Achieve fluency
                </span>
            </div>
        </div>
    )
}