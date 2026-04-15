import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnLogin = nextUrl.pathname.startsWith('/login')

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false  // Redirect to login (middleware handles via pages.signIn)
      }
      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
  },
  providers: [],  // Providers are added in auth.ts; this array must exist but stays empty
} satisfies NextAuthConfig
