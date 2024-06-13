import NextAuth, { User, type DefaultSession} from "next-auth";
import { JWT } from "next-auth/jwt";
import Github from "next-auth/providers/github";
import google from "next-auth/providers/google";


declare module "next-auth" {
    interface Session {
        user: {
            id: string
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id?: string
        } 
    }
}



export const config = {
    providers: [Github, google],
    callbacks: {
        jwt({ token, user }: {token: JWT, user?:User}) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        session({session, token}:{session: Session, token:JWT}) {
            /* session.user.id = token.id
            return session */
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }
        }
    }
    /* jwt is called whenever jwt is created or updated, and session is called when api/session is called usesession or getsession, exposes to client */
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)