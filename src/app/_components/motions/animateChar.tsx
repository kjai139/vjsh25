'use client'

import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";

interface AnimatedCharactersProps {
    char: string,
    idx: number,
    len: number,
   
}

export default function AnimatedCharacters({char, idx, len}:AnimatedCharactersProps) {
    return (
      
        <motion.span 
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, ease: "easeInOut", delay: 0.1 * (len + idx)}}
            >
                {char}
        </motion.span>
    
        
        
    )
}