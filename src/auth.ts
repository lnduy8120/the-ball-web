
import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
import { JWT } from "next-auth/jwt"



async function refreshAccessToken(token: JWT): Promise<JWT> {
    try {
        if (!token.refreshToken) {
            // If we don't have a refresh token, we can't refresh.
            // Return the token with an error so the client can sign out.
            return {
                ...token,
                error: "RefreshAccessTokenError",
            }
        }

        const issuer = process.env.AUTH_KEYCLOAK_ISSUER;
        if (!issuer) throw new Error("Missing Keycloak Issuer");

        const response = await fetch(`${issuer}/protocol/openid-connect/token`, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                client_id: process.env.AUTH_KEYCLOAK_ID!,
                client_secret: process.env.AUTH_KEYCLOAK_SECRET!,
                grant_type: "refresh_token",
                refresh_token: token.refreshToken,
            }),
            method: "POST",
        })

        const tokens = await response.json()

        if (!response.ok) {
            throw tokens
        }

        return {
            ...token,
            accessToken: tokens.access_token,
            expiresAt: Math.floor(Date.now() / 1000) + tokens.expires_in,
            // Fall back to old refresh token if new one is not returned
            refreshToken: tokens.refresh_token ?? token.refreshToken,
        }

    } catch (error) {
        console.error("Error refreshing access token", error)
        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Keycloak,
    ],
    callbacks: {
        async jwt({ token, account, profile }): Promise<JWT | null> {
            // Initial sign in
            if (account && profile) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    expiresAt: account.expires_at, // Unix timestamp in seconds
                    refreshToken: account.refresh_token,
                    id: profile.sub ?? undefined
                }
            }

            // Return previous token if the access token has not expired yet
            // Add a buffer of 10 seconds to account for network latency
            if (token.expiresAt && Date.now() < (token.expiresAt * 1000 - 10000)) {
                return token
            }

            // Access token has expired, try to update it
            return refreshAccessToken(token)
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.error = token.error
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
    pages: {
        signIn: '/login',
    }
})
