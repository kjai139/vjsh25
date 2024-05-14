'use client'

import { motion } from "framer-motion";

interface AnimatedCharactersProps {
    char: string,
    idx: number,
}

export default function AnimatedCharacters({char, idx}:AnimatedCharactersProps) {
    return (
    
        <motion.span 
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut", delay: 0.1 * idx}}
        >
            {char}
        </motion.span>
        
    )
}