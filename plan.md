# DevDocs AI Marketing Website - Implementation Plan

## Project Overview

A modern marketing website for DevDocs AI with authentication, pricing, and user dashboard built with Next.js 14, Clerk, and Prisma.

**Tech Stack:**
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Auth**: Clerk (email, Google, GitHub)
- **Database**: Prisma + PostgreSQL
- **Deployment**: Vercel (frontend) + Railway/Supabase (database)

**Design System:**
- **Primary Color**: Indigo/Purple (#6366F1)
- **Accent**: Violet (#8B5CF6)
- **Background**: White/Gray gradients
- **Style**: Modern, clean, AI-inspired (inspired by Vercel, Linear, Stripe)

---

## Phase 1: Foundation & Setup ✅

### 1.1 Project Initialization
- [x] Create Next.js 14 project with TypeScript
- [x] Install core dependencies
- [x] Create folder structure

### 1.2 Environment Configuration
- [ ] Set up `.env.local` with placeholders
- [ ] Configure Clerk authentication
- [ ] Set up Prisma with PostgreSQL
- [ ] Create database schema

### 1.3 Design System
- [ ] Configure Tailwind with custom colors
- [ ] Create UI components library
- [ ] Set up typography system
- [ ] Create layout components

**Deliverables:**
- Working Next.js app with proper structure
- Environment variables configured
- Database connected
- Basic UI components ready

---

## Phase 2: Authentication & User Management

### 2.1 Clerk Integration
- [ ] Install and configure Clerk
- [ ] Set up middleware for route protection
- [ ] Create sign-in page (`/sign-in`)
- [ ] Create sign-up page (`/sign-up`)
- [ ] Configure OAuth providers (Google, GitHub)

### 2.2 Database Schema
```prisma
model User {
  id            String    @id @default(cuid())
  clerkId       String    @unique
  email         String    @unique
  firstName     String?
  lastName      String?
  imageUrl      String?
  plan          Plan      @default(FREE)
  customerId    String?   @unique // Stripe customer ID
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  usage         Usage[]
  subscription  Subscription?
}

model Usage {
  id                    String   @id @default(cuid())
  userId                String
  user                  User     @relation(fields: [userId], references: [id])
  month                 String   // "2025-01"
  documentationQueries  Int      @default(0)
  codeGenerations       Int      @default(0)
  createdAt             DateTime @default(now())

  @@unique([userId, month])
}

model Subscription {
  id                String   @id @default(cuid())
  userId            String   @unique
  user              User     @relation(fields: [userId], references: [id])
  stripeSubscriptionId String @unique
  plan              Plan
  status            String   // active, canceled, past_due
  currentPeriodEnd  DateTime
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}
```

### 2.3 Clerk Webhooks
- [ ] Create webhook endpoint (`/api/webhooks/clerk`)
- [ ] Handle `user.created` event
- [ ] Handle `user.updated` event
- [ ] Handle `user.deleted` event
- [ ] Sync Clerk users to database

**Deliverables:**
- Working authentication flow
- Database with user data
- Webhook sync working
- Protected routes

---

## Phase 3: Marketing Pages

### 3.1 Home Page (`/`)
**Sections:**
1. **Hero Section**
   - Headline: "Your AI-Powered Documentation Assistant"
   - Subheadline: "Get instant answers from official docs. Generate production-ready code. All in one place."
   - CTA: "Start Free" + "View Demo"
   - Animated gradient background
   - Screenshot/demo video

2. **Features Grid**
   - Documentation Q&A with citations
   - Code Generation with Claude
   - 7 Framework Support
   - Source Attribution
   - Each with icon, title, description

3. **How It Works**
   - Step 1: Select frameworks
   - Step 2: Ask or generate
   - Step 3: Get results with sources
   - Animated flow diagram

4. **Framework Showcase**
   - Logos of 7 supported frameworks
   - Animated on scroll
   - "More coming soon" badge

5. **Testimonials** (placeholder for later)
   - 3 testimonial cards
   - User avatar, quote, name, role

6. **CTA Section**
   - "Ready to speed up your development?"
   - Sign up form or button
   - "No credit card required"

**Components to create:**
- `components/marketing/hero.tsx`
- `components/marketing/features-grid.tsx`
- `components/marketing/how-it-works.tsx`
- `components/marketing/framework-showcase.tsx`
- `components/marketing/cta-section.tsx`

### 3.2 Pricing Page (`/pricing`)
**Plans:**

**FREE**
- 50 documentation questions/month
- 10 code generations/month
- All 7 frameworks
- Community support
- Browser session history
- **$0/month**

**PRO** (Most Popular)
- Unlimited documentation questions
- Unlimited code generation
- All frameworks
- Saved conversation history
- Priority support
- API access (beta)
- Usage analytics
- **$19/month**

**ENTERPRISE**
- Everything in Pro
- Custom usage volumes
- Private deployment
- Dedicated support with SLA
- Team workspaces
- Custom integrations
- Admin dashboard
- **Contact Sales**

**Components:**
- `components/marketing/pricing-card.tsx`
- `components/marketing/pricing-comparison.tsx`
- `components/marketing/faq-accordion.tsx`

### 3.3 FAQ Page (`/faq`)
- Use content from `MARKETING_FAQ.md`
- Searchable FAQ
- Categorized sections
- Accordion UI

### 3.4 About Page (`/about`)
- Project story
- Mission & vision
- Team (your info)
- Technology stack
- Open source section

### 3.5 Documentation Page (`/docs`)
- Getting started guide
- Quick start
- API reference (link to chatbot docs)
- Examples
- Best practices

**Deliverables:**
- Complete marketing pages
- Responsive design
- Smooth animations
- SEO optimized

---

## Phase 4: Dashboard & User Features

### 4.1 Dashboard Layout
- [ ] Create dashboard layout (`app/(dashboard)/layout.tsx`)
- [ ] Sidebar navigation
- [ ] User profile dropdown
- [ ] Mobile responsive nav

### 4.2 Dashboard Home (`/dashboard`)
**Sections:**
- Welcome message with user name
- Current plan badge
- Usage stats (this month)
  - Documentation queries: X / 50 (or Unlimited)
  - Code generations: X / 10 (or Unlimited)
  - Progress bars
- Quick actions
  - "Go to Chatbot" button
  - "Upgrade to Pro" (if free)
  - "View conversation history" (if pro)
- Recent activity (placeholder)

### 4.3 Usage Page (`/dashboard/usage`)
- Monthly usage chart (last 6 months)
- Breakdown by type (docs vs code)
- Export data button (CSV)
- Usage tips

### 4.4 Settings Page (`/dashboard/settings`)
**Tabs:**
1. **Profile**
   - Edit name, email (via Clerk)
   - Profile picture
   - Connected accounts (Google, GitHub)

2. **Subscription**
   - Current plan
   - Billing cycle
   - Next billing date
   - Payment method
   - Upgrade/downgrade buttons
   - Cancel subscription

3. **API Keys** (Pro only)
   - Generate API key
   - View/revoke keys
   - API documentation link

4. **Preferences**
   - Default frameworks
   - Email notifications
   - Theme (light/dark)

### 4.5 API Integration
- [ ] Create usage tracking endpoints
- [ ] GET `/api/usage` - get user usage
- [ ] POST `/api/usage/track` - track new query
- [ ] GET `/api/subscription` - get subscription info

**Deliverables:**
- Fully functional dashboard
- Usage tracking system
- Settings management
- API ready for chatbot integration

---

## Phase 5: Payment Integration (Stripe)

### 5.1 Stripe Setup
- [ ] Create Stripe account
- [ ] Install `stripe` npm package
- [ ] Configure Stripe products (Free, Pro, Enterprise)
- [ ] Set up webhook endpoint

### 5.2 Checkout Flow
- [ ] Create checkout page (`/checkout`)
- [ ] Stripe Checkout integration
- [ ] Success page (`/checkout/success`)
- [ ] Cancel page (`/checkout/cancel`)

### 5.3 Subscription Management
- [ ] Create customer portal link
- [ ] Handle subscription upgrades
- [ ] Handle subscription downgrades
- [ ] Handle subscription cancellation
- [ ] Handle payment failures

### 5.4 Stripe Webhooks
- [ ] `checkout.session.completed`
- [ ] `customer.subscription.created`
- [ ] `customer.subscription.updated`
- [ ] `customer.subscription.deleted`
- [ ] `invoice.payment_failed`

**Deliverables:**
- Working payment flow
- Subscription management
- Automatic plan updates
- Payment failure handling

---

## Phase 6: Chatbot Integration

### 6.1 Authentication Bridge
- [ ] Share Clerk session with chatbot
- [ ] Create API endpoint to verify user
- [ ] Pass user ID to chatbot backend

### 6.2 Usage Tracking
- [ ] Track documentation queries from chatbot
- [ ] Track code generations from chatbot
- [ ] Update database in real-time
- [ ] Enforce usage limits for free users

### 6.3 Chatbot Updates
- [ ] Add "Sign in" button to chatbot
- [ ] Show usage stats in chatbot sidebar
- [ ] Redirect to upgrade page when limit reached
- [ ] Save conversations for Pro users

**Integration Flow:**
```
1. User signs in on marketing site (Clerk)
2. User clicks "Go to Chatbot"
3. Chatbot receives JWT token from Clerk
4. Chatbot verifies token with marketing backend
5. Chatbot tracks usage via API
6. Marketing dashboard shows real-time usage
```

**Deliverables:**
- Seamless auth between sites
- Real-time usage tracking
- Enforced limits
- Saved conversations

---

## Phase 7: Polish & Launch

### 7.1 SEO Optimization
- [ ] Add metadata to all pages
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Add Open Graph images
- [ ] Add Twitter Card metadata
- [ ] Schema.org structured data

### 7.2 Performance
- [ ] Optimize images (Next.js Image)
- [ ] Code splitting
- [ ] Lazy load components
- [ ] Add loading states
- [ ] Minimize bundle size

### 7.3 Analytics
- [ ] Add Google Analytics 4
- [ ] Add Vercel Analytics
- [ ] Track conversion events
- [ ] Track signup flow

### 7.4 Testing
- [ ] Test all auth flows
- [ ] Test payment flows
- [ ] Test usage tracking
- [ ] Mobile responsiveness
- [ ] Cross-browser testing
- [ ] Accessibility (WCAG AA)

### 7.5 Documentation
- [ ] Update README
- [ ] Add deployment guide
- [ ] Add environment variables guide
- [ ] Add API documentation

### 7.6 Deployment
- [ ] Deploy database to Railway/Supabase
- [ ] Deploy Next.js to Vercel
- [ ] Configure custom domain
- [ ] Set up SSL
- [ ] Configure environment variables
- [ ] Test production build

**Deliverables:**
- Production-ready website
- Optimized performance
- Analytics tracking
- Complete documentation

---

## File Structure

```
devdocs-marketing/
├── app/
│   ├── (marketing)/          # Public marketing pages
│   │   ├── layout.tsx         # Marketing layout (header, footer)
│   │   ├── page.tsx           # Home page
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── docs/
│   │       └── page.tsx
│   ├── (auth)/                # Auth pages
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.tsx
│   ├── (dashboard)/           # Protected dashboard
│   │   ├── layout.tsx         # Dashboard layout (sidebar)
│   │   ├── dashboard/
│   │   │   └── page.tsx       # Dashboard home
│   │   ├── usage/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   ├── webhooks/
│   │   │   ├── clerk/
│   │   │   │   └── route.ts
│   │   │   └── stripe/
│   │   │       └── route.ts
│   │   ├── usage/
│   │   │   └── route.ts
│   │   └── subscription/
│   │       └── route.ts
│   ├── layout.tsx             # Root layout
│   └── globals.css
├── components/
│   ├── marketing/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── features-grid.tsx
│   │   ├── how-it-works.tsx
│   │   ├── framework-showcase.tsx
│   │   ├── cta-section.tsx
│   │   ├── pricing-card.tsx
│   │   └── faq-accordion.tsx
│   ├── dashboard/
│   │   ├── sidebar.tsx
│   │   ├── usage-stats.tsx
│   │   ├── usage-chart.tsx
│   │   └── subscription-card.tsx
│   └── ui/                    # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       └── tabs.tsx
├── lib/
│   ├── db.ts                  # Prisma client
│   ├── clerk.ts               # Clerk utilities
│   ├── stripe.ts              # Stripe client
│   └── utils.ts               # Helper functions
├── prisma/
│   └── schema.prisma
├── public/
│   ├── screenshots/
│   └── og-image.png
├── .env.local
├── .env.example
├── middleware.ts              # Clerk middleware
├── tailwind.config.ts
├── plan.md                    # This file
└── README.md
```

---

## Environment Variables

```bash
# .env.local

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/devdocs

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRO_PRICE_ID=price_...

# Chatbot Integration
NEXT_PUBLIC_CHATBOT_URL=http://localhost:3000
CHATBOT_API_URL=http://localhost:8000

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-...
```

---

## Design Specifications

### Colors
```js
// tailwind.config.ts
colors: {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    500: '#6366F1',  // Main brand color
    600: '#4F46E5',
    700: '#4338CA',
  },
  accent: {
    500: '#8B5CF6',
    600: '#7C3AED',
  }
}
```

### Typography
- **Headings**: Font family: Inter (or similar), weights: 600-800
- **Body**: Font family: Inter, weight: 400
- **Code**: Font family: JetBrains Mono

### Spacing
- Sections: 80-120px vertical padding
- Components: 40-60px vertical spacing
- Elements: 16-24px internal spacing

### Animations
- Framer Motion for page transitions
- Smooth scroll behavior
- Hover states on cards/buttons
- Loading skeletons

---

## Timeline Estimate

- **Phase 1**: 0.5 day - Foundation ✅
- **Phase 2**: 1 day - Authentication
- **Phase 3**: 2 days - Marketing pages
- **Phase 4**: 1.5 days - Dashboard
- **Phase 5**: 1 day - Payments
- **Phase 6**: 1 day - Chatbot integration
- **Phase 7**: 1 day - Polish & deploy

**Total: ~8 days**

---

## Success Metrics

**Launch Goals:**
- ✅ All marketing pages responsive
- ✅ Authentication working (3 providers)
- ✅ Payment flow tested
- ✅ Usage tracking accurate
- ✅ Chatbot integration seamless
- ✅ Page load <2 seconds
- ✅ Lighthouse score >90

**Post-Launch:**
- 100 signups in first month
- 10% conversion to Pro
- <1% payment failures
- 95%+ uptime

---

## Next Steps

1. ✅ Initialize project and install dependencies
2. ✅ Create folder structure
3. **Next**: Set up environment variables
4. **Next**: Configure Clerk authentication
5. **Next**: Set up Prisma and database schema
6. **Next**: Create basic UI components
7. **Next**: Build home page hero section

---

## Notes

- Keep design minimal and clean
- Focus on performance (Next.js optimizations)
- Mobile-first approach
- Accessibility is priority
- SEO optimized from day 1
- Use TypeScript strictly
- Follow Next.js 14 best practices
- Component-driven architecture
- Reusable UI components library
