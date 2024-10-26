'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (data.success) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.')
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center p-4">
      <motion.div 
        className="glass-card p-8 max-w-xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-space mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 bg-white/5 rounded border border-white/10"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 bg-white/5 rounded border border-white/10"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-2 bg-white/5 rounded border border-white/10 h-32"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </motion.div>
    </section>
  )
}
