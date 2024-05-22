import { Button, Input } from "@nextui-org/react";
import { useLayoutEffect, useRef } from "react";
import { animate, motion } from "framer-motion";

interface SignInModalProps {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>

}

export default function SignInModal ({isModalOpen, setIsModalOpen}:SignInModalProps) {

   const dialog = useRef<HTMLDialogElement>(null)

   const variants = {
        hidden: { opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1}
   }

  

   const animateProps = isModalOpen ? { variants, initial: 'hidden', animate: 'visible'} : {}

   useLayoutEffect(() => {
    if (dialog.current && isModalOpen) {
        dialog.current.showModal()
    } else if (dialog.current && !isModalOpen) {
        dialog.current.close()
    }
    
   }, [isModalOpen])

    


    return (
          
        <motion.dialog {...animateProps} className="flex flex-col backdrop:bg-inherit p-4" ref={dialog}>
            <div className="bg-overlay p-4 flex flex-col gap-4">
            <div className="flex justify-end">
            <Button size="sm" aria-label="close sign in modal" isIconOnly radius="full" onPress={() => setIsModalOpen(false)} className="text-default-500">X</Button>
            </div>
            <h1 className="sm:text-lg">Log in</h1>
            
            
            <form method="dialog" className="flex flex-col gap-4">
                <Input radius="none" label='Username' type="text"></Input>
                <Input radius="none" label='Password' type="password"></Input>


            </form>
            </div>
            
            
        </motion.dialog>
       
    )
}