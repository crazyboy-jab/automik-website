'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Decorative elements - hidden on small screens */}
      <motion.div
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-20 -right-20 md:right-0 lg:right-10 w-40 sm:w-52 md:w-72 h-40 sm:h-52 md:h-72 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute bottom-20 -left-20 md:left-0 lg:left-10 w-40 sm:w-52 md:w-72 h-40 sm:h-52 md:h-72 bg-green-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="px-3 sm:px-4 py-2 rounded-full glass border border-blue-500/20 flex items-center gap-2 w-fit mx-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-300">Limited Spots • Response: 2 mins</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Stop Losing Leads.{' '}
            <span className="gradient-text">Automate Your Growth</span> with
            WhatsApp & SaaS.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
          >
            We build 24/7 digital employees for your business. From lead capture to CRM syncing,
            we use n8n to connect your entire operation to WhatsApp. Scale without the overhead.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glow px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 flex items-center justify-center gap-2 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Get Free Audit <ArrowRight size={18} className="hidden sm:block" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/7025773731"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
            >
              <MessageCircle size={18} /> <span className="hidden xs:inline">WhatsApp</span><span className="xs:hidden">Chat</span>
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-950"
                  />
                ))}
              </div>
              <span className="whitespace-nowrap">50+ Clients</span>
            </div>
            <div className="hidden xs:block">⭐ 4.9/5</div>
          </motion.div>
        </motion.div>

        {/* Floating WhatsApp CTA - Bottom Right - Responsive */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/7025773731"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-brand-whatsapp rounded-full shadow-2xl hover:shadow-3xl transition-all text-sm sm:text-base"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6 text-white" />
            <span className="text-white font-semibold hidden sm:inline">Chat Now</span>
          </motion.a>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-brand-whatsapp rounded-full -z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}
