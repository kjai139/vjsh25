import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";



export const config = {
    providers: [Github, google],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        session({session, token}) {
            session.user.id = token.id
            return session
        }
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)