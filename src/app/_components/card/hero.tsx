import { Roboto_Flex, Manrope } from "next/font/google"
import Image from "next/image"
import tutor from '../../../../public/tutor.webp'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { Button, Link } from "@nextui-org/react"
import memeface1 from '../../../../public/file.png'

const RobotoFlex = Roboto_Flex({
    subsets: ['latin']
})

const Mr = Manrope({
    subsets: ['latin']
})


export default function HomeHero () {

    return (
        <div className="flex wrapmw w-full">
            
            <div className="relative p-4 w-full flex">
            <Image src={tutor} alt="background image of tutor" placeholder="blur" sizes="(max-width:640px) 100vw, 50vw" fill className="hbg" style={{
                objectFit:'cover',
                zIndex: '0',
            }}></Image>
            {/* left */}
            <span className="relative z-10 flex flex-col justify-center">
                <div className="font-semibold flex flex-col justify-center gap-2">
                <h1 className={`font-bold ${Mr.className} text-4xl tshadow mb-2`}>Get REAL output practices in any language</h1>
                <div className="flex items-center gap-2 tshadow">
                    <HiOutlineChatBubbleLeftRight size={20}></HiOutlineChatBubbleLeftRight>
                    <span className="flex-1">
                    Take trusted 1 on 1 lessons with our trusted and qualified fluent tutors
                    </span>
                    
                </div>
                <div className="flex items-center gap-2 tshadow">
                    <HiOutlineChatBubbleLeftRight></HiOutlineChatBubbleLeftRight>
                    <span className="flex-1">
                    Get personally tailored lesson plans with set goals
                    </span>
                    
                </div>
                <div className="flex items-center gap-2 tshadow">
                    <HiOutlineChatBubbleLeftRight></HiOutlineChatBubbleLeftRight>
                    <span className="flex-1">
                    Connect with a growing community of fellow learners
                    </span>
                    
                </div>
                </div>
                <div className="mt-8">
                    <Link as={Button} href="/dashboard" aria-label="Start now button" size="lg" radius="full" color="primary" className="font-semibold bg-primary text-foreground">Start now</Link>
                </div>
                
            </span>
            {/* right */}
            <div className="p-4 flex-1 flex items-center">
            <span className="relative flex-1">
                <Image src={memeface1} alt="Students studying" sizes="(max-width:640px) 100vw, 50vw" style={{
                    objectFit:'cover'
                }}></Image>
                

            </span>
            </div>
            </div>
        </div>
    )
}