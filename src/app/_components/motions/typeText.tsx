'use client'

import AnimatedCharacters from "./animateChar"
import { Link } from "@nextui-org/react"

interface TypeTextAnimationProps {
    txt:{
        msg:string,
        isLink?: boolean,
        href?: string,
    }[],
  
}

export default function TypeTextAnimation ({txt}:TypeTextAnimationProps) {

    

   

    return (
        <div className="flex flex-col gap-1">
        {
            txt.map((line, lineIndex) => {
                const lineArr = line.msg.replace(' ', `\u00A0`).split('')
                return (
                    
                    line.isLink && line.href ? 

                    <Link href={line.href} key={lineIndex}>
                    <div className="flex gap-1">
                    {
                        lineArr.map((char, idx) => {
                           
                            return (
                                <AnimatedCharacters key={idx} char={char} idx={idx} len={lineArr.length * lineIndex}></AnimatedCharacters>
                            )
                        })
                    }
                    </div>
                    </Link>
                     :

                     <div className="flex gap-1" key={lineIndex}>
                    {
                        lineArr.map((char, idx) => {
                           
                            return (
                                <AnimatedCharacters key={idx} char={char} idx={idx} len={lineArr.length * lineIndex}></AnimatedCharacters>
                            )
                        })
                    }
                    </div>

                )
            })
           
        }
        </div>
    )
}