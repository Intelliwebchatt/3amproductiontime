Modern Next.js Website with Scroll Effects

A modern, responsive website built with Next.js, featuring smooth scroll animations, a glass-card design, and a contact form with SendGrid integration.

## Features

- ✨ Smooth scroll animations using Framer Motion
- 🎨 Modern glass-card design
- 📱 Fully responsive layout
- 📧 Contact form with SendGrid integration
- 🔒 Rate limiting for API routes
- 🎯 SEO optimized

## Tech Stack

- Next.js
- TypeScript
- Framer Motion
- SendGrid for email
- Tailwind CSS

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── GlassCard.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    ├── animations.ts
    ├── rate-limit.ts
    └── sendgrid.ts
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following variables:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=your_email_address
   SENDGRID_FROM_EMAIL=your_verified_sender_email
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

1. Push your code to GitHub
2. Set up a new project on Netlify
3. Connect to your GitHub repository
4. Add the environment variables in Netlify's dashboard
5. Deploy!

## Note
Make sure to keep your `.env.local` file private and never commit it to
