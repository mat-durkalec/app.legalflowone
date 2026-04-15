import { LoginForm } from '@/components/auth/LoginForm'
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <a
            href="https://legalflowone.com"
            className="inline-flex items-center gap-2 group hover:opacity-75 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              LF
            </div>
            <span className="font-semibold text-slate-900 text-lg">Legal Flow One</span>
          </a>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h1 className="text-xl font-semibold text-slate-900 mb-1">
            Sign in to Legal Flow One
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            Access your entity workspace and governance dashboard
          </p>

          {/* Form */}
          <LoginForm />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-slate-400">or continue with</span>
            </div>
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton />

          {/* Demo hint */}
          <p className="mt-5 text-xs text-center text-slate-400">
            Demo: Use any email and password <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-600">demo</code>
          </p>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-xs text-slate-500">
          <a
            href="https://legalflowone.com"
            className="text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            ← Back to Legal Flow One
          </a>
        </p>
      </div>
    </main>
  )
}
