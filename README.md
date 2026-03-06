# Builder Boilerplate

Next.js 15 + Payload CMS 3.x website builder boilerplate with premium, Awwwards-quality components.

## Tech Stack

- **Next.js 15** — App Router, React 19, TypeScript
- **Payload CMS 3.x** — Headless CMS embedded in Next.js
- **PostgreSQL** — Via Neon (serverless Postgres)
- **Tailwind CSS** — Utility-first styling with custom design system
- **Framer Motion** — Scroll-triggered animations & micro-interactions
- **Lucide React** — Icon library

## Features

### 13 Premium Section Components
All sections are Payload CMS Blocks with editable fields:

| Component | Description |
|-----------|-------------|
| **Hero** | Full-width, animated gradient bg, text-reveal, parallax |
| **Features** | Grid/bento glassmorphism cards with glow effects |
| **About** | Split layout with floating image animation |
| **Services** | Gradient border cards with hover-lift |
| **Testimonials** | Auto-carousel with smooth transitions |
| **CTA** | Animated gradient bg, pulsing button |
| **Contact** | Modern form with focus animations |
| **FAQ** | Smooth accordion with animated open/close |
| **Stats** | Animated count-up numbers on scroll |
| **Gallery** | Grid with hover-zoom & lightbox |
| **Team** | Grid with hover-reveal info |
| **Logo Cloud** | Infinite scrolling marquee |
| **Pricing** | Monthly/yearly toggle, popular highlight |

### Design System
- Custom color tokens (primary, secondary, accent, neutral)
- Premium typography scale with display fonts
- Glassmorphism, gradient, and glow utilities
- Animation utilities (fade-in, slide-up, stagger)

### CMS Collections
- **Pages** — Dynamic pages with block-based sections
- **Media** — Auto-optimized images
- **Navigation** — Header menu with CTA button
- **Site Settings** (global) — Logo, colors, company info, tracking scripts
- **Footer** (global) — Multi-column links, copyright

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and secrets

# Run development server
npm run dev

# Seed example data
npm run seed
```

Visit:
- **Frontend:** http://localhost:3000
- **Admin:** http://localhost:3000/admin

### Default Admin
- Email: `admin@builder.dev`
- Password: `builder2026`

## Environment Variables

```
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── (frontend)/      # Public-facing pages
│   │   ├── [[...slug]]/ # Dynamic page routing
│   │   └── globals.css   # Design system CSS
│   └── (payload)/       # Payload CMS admin
├── blocks/              # Payload block definitions
├── collections/         # Payload collections
├── components/
│   ├── blocks/          # React section components
│   ├── layout/          # Header & Footer
│   └── motion/          # Animation utilities
├── globals/             # Payload globals
└── seed/                # Seed data script
```

## Deployment

Deploy to Vercel:

```bash
npx vercel --yes
npx vercel env add DATABASE_URI production
npx vercel env add PAYLOAD_SECRET production
```

## License

MIT
