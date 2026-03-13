'use client'

import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Appointment Booking',
      category: 'WhatsApp + n8n',
      image: '/img_1.png',
      results: '30-40% ROI increase',
      description: 'Automated lead for Appointments for hospital resulting in 5-10 new clients/month',
    },
    {
      id: 2,
      title: 'Chat Bot',
      category: 'Rule Based ChatBot',
      image: '/img_2.png',
      results: '500+ Active Users',
      description: 'Next.js platform handling real-time lead management and scoring',
    },
    {
      id: 3,
      title: 'E-Commerce Platform ',
      category: 'Web Development',
      image: '/web2.png',
      results: '150+ Conversions Monthly',
      description: 'Scalable e-commerce platform built for growth',
    },
    {
      id: 4,
      title: 'WhatsApp Chatbot',
      category: 'Automation',
      image: '/img_4.png',
      results: '10,000+ Conversations/mo',
      description: 'Intelligent bot handling customer support and lead qualification',
    },
  ]

  const [hoveredId, setHoveredId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="portfolio" className="section-spacing px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Real Results</span> from Real Clients
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            See how we&apos;ve transformed businesses like yours.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer relative"
            >
              <div className="relative h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <Eye className="text-white" size={40} />
                </motion.div>

                {/* Glass Card - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 glass border border-blue-500/50 p-4 sm:p-6 md:p-8 flex flex-col justify-end"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-green-400 font-semibold mb-2 text-xs sm:text-sm">
                    {project.category}
                  </p>
                  <p className="text-gray-300 mb-3 line-clamp-2 text-xs sm:text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="text-blue-400 font-semibold text-xs sm:text-sm">
                    📊 {project.results}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Info - Static */}
              <div className="mt-3 sm:mt-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Your success story could be next. Let&apos;s talk.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all text-sm sm:text-base whitespace-nowrap"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
