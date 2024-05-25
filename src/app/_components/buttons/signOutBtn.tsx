
import { signOut } from "next-auth/react"
import { Button } from "@nextui-org/react"
 
export function SignOut() {
  return (
    <Button aria-label="Sign out button" onPress={() => signOut}>Sign Out</Button>
  )
}