'use client'

import AnimatedCharacters from "./animateChar"

interface TypeTextAnimationProps {
    txt:string,
}

export default function TypeTextAnimation ({txt}:TypeTextAnimationProps) {

    const txtArr = txt.replace(' ', `\u00A0`).split('')
    console.log(txtArr)

    return (
        <>
        {
            txtArr.map((char, idx) => {
                return (
                    <AnimatedCharacters key={idx} char={char} idx={idx}></AnimatedCharacters>
                )
            })
        }
        </>
    )
}