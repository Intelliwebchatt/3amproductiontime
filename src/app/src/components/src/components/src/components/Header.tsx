```typescript
'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      <motion.nav 
        className="glass-card m-4 p-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <span className="font-pacifico text-2xl">YourBrand</span>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </motion.nav>
    </header>
  )
}
```
