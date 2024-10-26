
```typescript
export default function Footer() {
  return (
    <footer className="glass-card m-4 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </footer>
  )
}
```

Now update `src/app/page.tsx` to include all components:

```typescript
'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
```
