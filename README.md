# ShoreStack

**Clean Design. Powerful Systems. One Partner.**

A modern, professional website built with Next.js, React, TypeScript, and TailwindCSS. ShoreStack showcases full stack engineering and design services with a focus on mobile-first responsive design, clean layouts, and premium user experience.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Database:** PostgreSQL (for future backend features)
- **Deployment:** Vercel

## Pages

- **Home** — Hero section, mobile-first messaging, services preview, portfolio preview, testimonials, and consultation CTA
- **Services** — Detailed descriptions of all 7 services with problems solved and benefits
- **Portfolio** — Grid layout with live project links and placeholder cards for upcoming work
- **About** — Background, philosophy, technology stack, and approach
- **Contact** — Contact form, email/phone info, free homepage preview offer, WhatsApp/SMS placeholders

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn
- PostgreSQL (optional, for future backend features)

### Installation

```bash
# Clone the repository
git clone https://github.com/kinzzz12345-cmyk/ShoreStack.git
cd ShoreStack

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/shorestack

# Contact form email recipient
CONTACT_EMAIL=k.patelsoftwaredeveloper@gmail.com

# Public site URL (used for SEO metadata)
NEXT_PUBLIC_SITE_URL=https://shorestack.com
```

### Running Locally

```bash
# Development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Deploying on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will automatically detect the Next.js framework
4. Add environment variables in the Vercel dashboard under **Settings > Environment Variables**
5. Deploy — Vercel handles the build and deployment automatically

### Custom Domain

After deploying, you can add a custom domain in the Vercel dashboard under **Settings > Domains**.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── globals.css             # Global styles and Tailwind theme
│   ├── layout.tsx              # Root layout with header/footer
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Home page
├── components/
│   ├── ContactForm.tsx         # Contact form with validation
│   ├── Footer.tsx              # Site footer
│   ├── Header.tsx              # Navigation header with mobile menu
│   ├── Icons.tsx               # SVG icon components
│   ├── PortfolioCard.tsx       # Portfolio grid card
│   ├── SectionHeading.tsx      # Reusable section header
│   ├── ServiceCard.tsx         # Service preview card
│   └── TestimonialCard.tsx     # Testimonial card
└── lib/
    └── data.ts                 # Site content, services, portfolio data
```

## Brand Colors

| Color       | Hex       | Usage                              |
|-------------|-----------|-------------------------------------|
| Dust Grey   | `#dcdcdd` | Backgrounds, borders                |
| Silver      | `#c5c3c6` | Subtle text, secondary elements     |
| Iron Grey   | `#46494c` | Primary text, headings              |
| Blue Slate  | `#4c5c68` | Secondary text, dark sections       |
| Bondi Blue  | `#1985a1` | Accent color, buttons, highlights   |

## License

MIT
