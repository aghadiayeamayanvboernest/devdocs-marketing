# DevDocs AI Marketing Website

Modern marketing website for DevDocs AI with authentication, pricing, and user dashboard.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Auth**: Clerk (Google, GitHub, Email)
- **Database**: Prisma + PostgreSQL
- **Payments**: Stripe (Phase 5)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or hosted on Railway/Supabase)
- Clerk account (free tier works)
- Stripe account (for Phase 5)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the required environment variables:

#### Clerk (Required)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your API keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

#### Database (Required)

**Option A: Local PostgreSQL**
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/devdocs_marketing
```

**Option B: Railway (Recommended)**
1. Go to [Railway](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy connection string to `DATABASE_URL`

**Option C: Supabase**
1. Go to [Supabase](https://supabase.com)
2. Create new project → Database settings
3. Copy connection string (transaction pooler for Prisma)

### 3. Set Up Database

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### 4. Configure Clerk Webhooks

1. In Clerk Dashboard → Webhooks → Add Endpoint
2. URL: `https://your-domain.vercel.app/api/webhooks/clerk` (or use ngrok for local dev)
3. Subscribe to events:
   - `user.created`
   - `user.updated`
   - `user.deleted`
4. Copy signing secret to `CLERK_WEBHOOK_SECRET` in `.env.local`

**For local development with webhooks:**
```bash
# Install ngrok
npm install -g ngrok

# Start dev server
npm run dev

# In another terminal, expose to internet
ngrok http 3000

# Use the ngrok URL in Clerk webhook settings
# Example: https://abc123.ngrok.io/api/webhooks/clerk
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
devdocs-marketing/
├── app/
│   ├── (auth)/              # Auth pages (sign-in, sign-up)
│   ├── (marketing)/         # Public pages (home, pricing, etc.)
│   ├── (dashboard)/         # Protected dashboard pages
│   ├── api/                 # API routes
│   │   └── webhooks/
│   │       └── clerk/       # Clerk webhook handler
│   ├── layout.tsx           # Root layout with ClerkProvider
│   └── globals.css
├── components/
│   ├── marketing/           # Marketing page components
│   ├── dashboard/           # Dashboard components
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── db.ts                # Prisma client
│   ├── clerk.ts             # Clerk utilities
│   └── utils.ts
├── prisma/
│   └── schema.prisma        # Database schema
├── middleware.ts            # Clerk middleware for route protection
├── plan.md                  # Implementation plan
└── README.md
```

## Phase 2 Completion Checklist ✅

- [x] Environment variables configured
- [x] Prisma installed and initialized
- [x] Database schema created (User, Usage, Subscription)
- [x] Clerk authentication configured
- [x] Clerk middleware for protected routes
- [x] Sign-in and sign-up pages
- [x] Clerk webhook endpoint for user sync
- [x] Root layout with ClerkProvider

## Database Schema

### User
- `id` - Unique identifier
- `clerkId` - Clerk user ID (unique)
- `email` - User email (unique)
- `firstName`, `lastName` - User name
- `imageUrl` - Profile picture
- `plan` - FREE, PRO, or ENTERPRISE
- `customerId` - Stripe customer ID (for Phase 5)

### Usage
- Tracks monthly usage per user
- `documentationQueries` - Count of doc questions
- `codeGenerations` - Count of code generations
- `month` - Format: "2025-01"

### Subscription
- Tracks Pro/Enterprise subscriptions
- Links to Stripe subscription ID
- Includes status and billing period

## Next Steps (Phase 3)

1. Create marketing layout with header and footer
2. Build home page with hero section
3. Create pricing page
4. Add FAQ page
5. Build about and docs pages

See [plan.md](plan.md) for full implementation plan.

## Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm start            # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma studio    # Open database GUI
npx prisma migrate dev  # Create migration (production)

# Linting
npm run lint         # Run ESLint
```

## Environment Variables Reference

See [.env.example](.env.example) for all available environment variables.

**Required for Phase 2:**
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SECRET`
- `DATABASE_URL`

**Required for Phase 5 (Payments):**
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRO_PRICE_ID`

## Deployment

See [plan.md](plan.md) Phase 7 for deployment instructions.

**Quick deploy to Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

## Troubleshooting

### "Clerk keys not found"
- Ensure `.env.local` has `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- Restart dev server after adding env vars

### "Database connection failed"
- Check `DATABASE_URL` format: `postgresql://user:password@host:5432/database`
- Ensure PostgreSQL is running
- Test connection with `npx prisma db push`

### "Webhook verification failed"
- Check `CLERK_WEBHOOK_SECRET` matches Clerk dashboard
- Ensure webhook URL is correct and accessible
- For local dev, use ngrok to expose localhost

### Prisma errors
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Regenerate client
npx prisma generate
```

## License

MIT
