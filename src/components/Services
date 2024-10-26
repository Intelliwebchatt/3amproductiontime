'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Modern and responsive websites' },
    { title: 'Design', description: 'Beautiful and intuitive interfaces' },
    { title: 'SEO', description: 'Optimize your online presence' }
  ]

  return (
    <section id="services" className="min-h-screen flex items-center p-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-space mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-poppins mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
