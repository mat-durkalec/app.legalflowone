import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      // nextUrl.pathname has basePath (/app) stripped by Next.js: /login, /dashboard, /
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnLogin = nextUrl.pathname.startsWith('/login')

      if (isOnDashboard && !isLoggedIn) {
        // Redirect to login — must include /app prefix since that's the full path
        return Response.redirect(new URL('/app/login', nextUrl.origin))
      }
      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/app/dashboard', nextUrl.origin))
      }
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
