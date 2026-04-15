import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email:    { label: 'Email',    type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // DEMO: Accept any valid email + password "demo"
        // For production: Replace with real database lookup
        // Example:
        //   const user = await db.user.findUnique({ where: { email: credentials.email } })
        //   const passwordValid = await bcrypt.compare(credentials.password, user.passwordHash)
        //   if (user && passwordValid) return user
        //   return null

        if (
          credentials?.password === 'demo' &&
          typeof credentials?.email === 'string' &&
          credentials.email.includes('@')
        ) {
          return {
            id: '1',
            email: credentials.email as string,
            name: (credentials.email as string).split('@')[0],
          }
        }
        return null
      },
    }),
  ],
})
