/ src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="glass-card p-8 md:p-12 max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative w-48 h-48 mx-auto mb-6"
          variants={itemVariants}
        >
          <Image
            src="/heather-glenn.jpg"
            alt="Profile photo of Heather Glenn"
            fill
            className="rounded-full object-cover border-4 border-primary"
            priority
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-space font-bold mb-2"
          variants={itemVariants}
        >
          Heather Glenn
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-primary mb-2"
          variants={itemVariants}
        >
          National Account Executive
        </motion.h2>
        
        <motion.h2 
          className="text-3xl md:text-4xl text-primary mb-2"
          variants={itemVariants}
        >
          FM Payments
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl font-pacifico mb-6"
          variants={itemVariants}
        >
          Where we have fun saving you money
        </motion.p>
        
        <motion.a
          href="#contact"
          className="inline-block bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-full text-white text-lg hover:scale-105 transition-transform"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  )
}

// src/components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  { title: 'Payment Processing', icon: '💳' },
  { title: 'Merchant Services', icon: '🏪' },
  { title: 'Point of Sale Solutions', icon: '🖥️' },
  { title: 'E-commerce Solutions', icon: '🛒' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 px-4" ref={ref}>
      <motion.div
        className="glass-card max-w-4xl mx-auto p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-space text-center mb-12 text-primary">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 glass-card hover:border-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// src/components/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="glass-card max-w-2xl mx-auto p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-space text-center mb-8 text-primary">
          Contact Heather
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-black/50 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-black/50 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 bg-black/50 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent py-3 rounded-lg text-white font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          
          {status === 'error' && (
            <p className="text-red-400 text-center">Error sending message. Please try again.</p>
          )}
        </form>
      </motion.div>
    </section>
  )
}

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black/90 border-t-2 border-primary py-6 px-4">
      <div className="container mx-auto text-center">
        <nav>
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#about" className="text-primary hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-primary hover:text-accent transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:text-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} FM Payments. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7DCA45',
        accent: '#5ca632',
      },
      fontFamily: {
        space: ['var(--font-space)'],
        poppins: ['var(--font-poppins)'],
        pacifico: ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [],
}

// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Here you would typically integrate with your email service
    // For example, using SendGrid, Mailgun, etc.
    
    // For now, we'll just simulate a successful response
    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
