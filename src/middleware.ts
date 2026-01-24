
import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isProtected = req.nextUrl.pathname.startsWith('/account-settings') || req.nextUrl.pathname.startsWith('/add-bet')

    if (isProtected && !isLoggedIn) {
        const newUrl = new URL("/login", req.nextUrl.origin)
        // Add return URL for redirect after login
        newUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
