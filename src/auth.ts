
import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

declare module "next-auth" {
    interface Session {
        accessToken?: string
        user?: {
            id?: string
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Keycloak,
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
            }
            if (profile) {
                token.id = profile.sub
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
    pages: {
        signIn: '/login', // Optional: point to custom login page if exists, or remove to use default
    }
})
