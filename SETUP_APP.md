# Legal Flow One — App Setup Guide

## ✅ What Was Built

You now have a fully functional separate app at **app.legalflowone.com** with:

1. **Working authentication** (Google OAuth + Email)
2. **Protected routes** (middleware redirects unauthenticated users)
3. **Clean login page** with email + password demo credentials
4. **Authenticated dashboard** with user info and placeholder module cards
5. **Logout functionality**
6. **Updated marketing site navigation** with "Open App" button

---

## 🚀 Local Testing

### 1. Marketing Site — Updated Navigation

Visit `http://localhost` in your browser.

You'll see the updated navigation with:
- **"Open App"** button (primary, top-right) → links to `https://app.legalflowone.com`
- **"Book a demo"** button (secondary, demoted to outline)
- **"Talk to us"** link (tertiary)

### 2. App Login Page

Visit `http://localhost:3001/login` in your browser.

You'll see a premium login page with:
- **Email input**
- **Password input**
- **Demo credentials:** any email + password `demo`
- **Google OAuth button** (works once you configure credentials)
- Link back to marketing site

**Example login:**
```
Email: test@example.com
Password: demo
```

Click "Sign in" → Redirects to `/dashboard`

### 3. Authenticated Dashboard

After login, you land on `/dashboard` showing:
- **User header** with email and avatar (initials fallback)
- **"Sign out" button**
- **Dashboard title** with welcome message
- **6 module cards:**
  - Company Profile
  - Documents
  - Obligations
  - Shareholders
  - Calendar
  - Notifications

All cards show "Coming soon" — they're placeholders for future modules.

### 4. Protected Routes

- Visiting `/dashboard` without a session → redirects to `/login`
- Visiting `/login` while logged in → redirects to `/dashboard`

---

## 🔐 Authentication Configuration

### Email + Password (Already Works)

The app comes with a demo Credentials provider:
- **Email:** any valid email (must include `@`)
- **Password:** `demo` (hardcoded for demo)

For production, replace the `authorize` function in `app/auth.ts` with real database validation using bcrypt:

```typescript
// Replace the Credentials provider in auth.ts
async authorize(credentials) {
  const user = await db.user.findUnique({
    where: { email: credentials.email as string }
  })
  
  const passwordValid = await bcrypt.compare(
    credentials.password as string,
    user.passwordHash
  )
  
  if (user && passwordValid) return user
  return null
}
```

### Google OAuth (Requires Setup)

To enable Google sign-in, configure Google Cloud credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create or select a project
3. Enable the **Google+ API**
4. Create OAuth 2.0 credentials (Web application)
5. Set **Authorized redirect URI:** `https://app.legalflowone.com/api/auth/callback/google`
6. Copy **Client ID** and **Client Secret**
7. Add to `.env`:
   ```
   AUTH_GOOGLE_ID=your_client_id
   AUTH_GOOGLE_SECRET=your_client_secret
   ```

### Auth.js Configuration

The app uses **Auth.js v5** with a split-config pattern for edge runtime compatibility.

**Key files:**
- `app/auth.config.ts` — Edge-safe config (no provider imports, used by middleware)
- `app/auth.ts` — Full config with providers (used by API routes & Server Components)
- `app/middleware.ts` — Protects `/dashboard` routes
- `app/src/app/api/auth/[...nextauth]/route.ts` — Auth.js API handler

---

## 🌍 Domain Routing

### Local Development

| URL | Service | Port |
|-----|---------|------|
| `http://localhost` | Marketing site (Next.js) | 80 (nginx → 3000) |
| `http://localhost:3001` | App (Next.js) | 3001 (direct) |
| `http://localhost/api/*` | Flask backend | 80 (nginx → 5000) |

*Note:* For local testing without domain names, visit `http://localhost:3001/login` directly for the app.

### Production (VPS)

**Setup:**
1. Add DNS A record: `app.legalflowone.com` → your VPS IP
2. The same nginx instance routes based on `server_name`:
   - `legalflowone.com` → frontend (3000)
   - `app.legalflowone.com` → app (3001)
3. Optionally add HTTPS with Let's Encrypt (update nginx with TLS blocks)

**Docker Compose:**
```bash
# On VPS
docker compose up --build -d
```

---

## 🔑 Environment Variables

Create a `.env` file at the project root with:

```bash
# ─── Database ───────────────────────────────────────────────────────
DB_NAME=legalflowone
DB_USER=legalflow
DB_PASSWORD=your_password
MYSQL_ROOT_PASSWORD=your_root_password

# ─── Auth ───────────────────────────────────────────────────────────
# Generate with: openssl rand -base64 32
AUTH_SECRET=your_generated_secret

# Google OAuth (optional)
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# Public URL of the app
NEXTAUTH_URL=https://app.legalflowone.com
```

---

## 📦 Docker Compose Services

The stack now includes **5 services**:

| Service | Port | Image | Role |
|---------|------|-------|------|
| `nginx` | 80 | nginx:alpine | Reverse proxy |
| `frontend` | 3000 | node:20 | Marketing site |
| **`app`** | **3001** | **node:20** | **Auth app** |
| `backend` | 5000 | python:3.12 | Flask API |
| `db` | 3306 | mysql:8.0 | Database |

### To run locally:
```bash
docker compose up --build
```

### To rebuild just the app:
```bash
docker compose build app
docker compose up app
```

---

## 📁 App File Structure

```
app/
├── auth.ts                          # Auth.js full config (Node.js)
├── auth.config.ts                   # Auth.js edge config (middleware)
├── middleware.ts                     # Edge middleware (route protection)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (Inter font)
│   │   ├── globals.css              # Tailwind + base styles
│   │   ├── page.tsx                 # Redirect to /dashboard
│   │   ├── login/
│   │   │   └── page.tsx             # Login page
│   │   ├── dashboard/
│   │   │   └── page.tsx             # Authenticated dashboard
│   │   └── api/
│   │       └── auth/[...nextauth]/
│   │           └── route.ts         # Auth.js API handler
│   └── components/
│       ├── auth/
│       │   ├── LoginForm.tsx        # Email + password form
│       │   └── GoogleSignInButton.tsx # Google OAuth button
│       └── dashboard/
│           ├── Header.tsx           # User header + logout
│           └── ModuleCard.tsx       # Placeholder module cards
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── Dockerfile
└── .env.example
```

---

## 🧪 Testing the Full Flow

### 1. Test Demo Login
```
1. Visit http://localhost:3001/login
2. Email: your@email.com
3. Password: demo
4. Click "Sign in"
5. Should redirect to /dashboard
```

### 2. Test Protected Routes
```
1. Open incognito/private browser
2. Visit http://localhost:3001/dashboard
3. Should redirect to /login
4. Login again
```

### 3. Test Logout
```
1. On dashboard, click "Sign out" button
2. Should redirect to /login
```

### 4. Test Google OAuth (if configured)
```
1. Click "Continue with Google" on login page
2. Sign in with your Google account
3. Should redirect to /dashboard
```

---

## 🚢 Production Deployment

### Option 1: Two Separate Vercel Projects (Recommended)

**Project 1: Marketing Site**
```
Repository: your-repo/frontend (or entire monorepo)
Root directory: frontend/
Deploy to: legalflowone.com
```

**Project 2: App**
```
Repository: your-repo/app (or entire monorepo)
Root directory: app/
Deploy to: app.legalflowone.com
Environment variables: AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET
```

### Option 2: One Vercel Project + VPS Docker

Deploy both frontends to Vercel, keep backend + database on VPS:
- VPS runs Docker with nginx + Flask backend
- Vercel runs both Next.js apps pointing to backend API

---

## 🔗 Next Steps

### Immediate (For Demo)
1. Generate `AUTH_SECRET`: `openssl rand -base64 32`
2. Add to `.env` file
3. Test login: email + password `demo`

### For Google OAuth
1. Set up Google Cloud credentials
2. Add `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` to `.env`
3. Test "Continue with Google" button

### For Production Database
1. Replace Credentials provider with real DB (see "Email + Password" section)
2. Add database schema for users (email, passwordHash, etc.)
3. Use bcrypt for password hashing

### For Real Email Support
Replace Credentials with email magic links via **Resend** or **SendGrid**:
- Install: `npm install @auth/core/providers/resend`
- Configure in `auth.ts` with your email provider API key

---

## 🐛 Troubleshooting

### "AUTH_SECRET is not set" warning
→ Generate one: `openssl rand -base64 32` and add to `.env`

### App won't start
→ Check logs: `docker compose logs app`

### 503 Bad Gateway from nginx
→ Check app is running: `docker compose ps app`

### Google sign-in says "error"
→ Auth credentials not configured in `.env`, or callback URL mismatch

### Can't access app at app.legalflowone.com locally
→ Add to `/etc/hosts` (Mac/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows):
```
127.0.0.1 app.legalflowone.com
```

---

## 📖 Key Technologies

- **Next.js 15** — React framework with App Router
- **Auth.js v5** — Modern authentication (formerly NextAuth.js)
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **lucide-react** — Icons
- **Docker** — Containerization
- **nginx** — Reverse proxy
- **MySQL** — Database

---

## 📝 Notes

- The app uses JWT sessions by default (no database adapter needed yet)
- All UI is premium and minimal — no generic admin template feel
- Ready to add real modules: just expand the dashboard module cards
- Easy to swap email provider or add new OAuth providers
- Middleware protects all `/dashboard/*` routes automatically

---

## 💡 What's Ready for Future Development

- ✅ Authentication framework (swap providers as needed)
- ✅ Protected route structure
- ✅ User session management
- ✅ API integration point (already talks to Flask backend via `/api/*`)
- ✅ Responsive design (mobile-friendly)
- ✅ Premium component library (Header, ModuleCard, Button patterns)

Start building your modules! 🚀
