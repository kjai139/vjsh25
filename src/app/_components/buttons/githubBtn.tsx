
import { signIn } from "next-auth/react"
import { Button } from "@nextui-org/react";
import { ImGithub } from "react-icons/im";


export function GithubSignIn() {
    return (
       
        <Button endContent={<ImGithub></ImGithub>} onPress={() => signIn()}>Signin with Github</Button>

        
    )
}