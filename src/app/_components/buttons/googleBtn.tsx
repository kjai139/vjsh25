import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export function GoogleBtn () {
    return (
        <Button endContent={<FcGoogle></FcGoogle>} onPress={() => signIn('google')}>Sign in with Google</Button>
    )
}