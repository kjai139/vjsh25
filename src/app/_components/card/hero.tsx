import { Roboto_Flex, Manrope } from "next/font/google"
import Image from "next/image"
import tutor from '../../../../public/tutor.webp'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { Button } from "@nextui-org/react"
import tutorRight from "../../../../public/Peer-tutoring.jpg"

const RobotoFlex = Roboto_Flex({
    subsets: ['latin']
})

const Mr = Manrope({
    subsets: ['latin']
})


export default function HomeHero () {

    return (
        <div className="flex wrapmw w-full">
            
            <div className="relative p-4 min-h-[350px] w-full">
            <Image src={tutor} alt="background image of tutor" placeholder="blur" sizes="(max-width:640px) 100vw, 50vw" fill className="hbg" style={{
                objectFit:'cover',
                zIndex: '0',
            }}></Image>
            {/* left */}
            <span className="relative z-10 flex flex-col justify-around">
                <div className="font-semibold flex flex-col justify-center gap-2">
                <h1 className={`font-bold ${Mr.className} text-2xl tshadow`}>Get REAL output practices in any language</h1>
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
                <div className="mt-4">
                    <Button radius="full" color="primary">Start now</Button>
                </div>
                
            </span>
            {/* right */}
            <div className="p-4 flex-1 flex">
            <span className="relative flex-1">
                <Image src={tutorRight} alt="Students studying" fill className="rounded shadow" sizes="(max-width:640px) 100vw, 50vw" style={{
                    objectFit:'cover'
                }}></Image>

            </span>
            </div>
            </div>
        </div>
    )
}