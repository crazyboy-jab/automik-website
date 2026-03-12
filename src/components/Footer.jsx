'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <footer className="border-t border-gray-700/50 py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">A</span>
              </div>
              <span className="text-white font-bold text-base sm:text-lg">AutomiK</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
              Tech Automation Agency specializing in WhatsApp automation, n8n workflows, and custom SaaS solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              Available for new projects
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  WhatsApp Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Custom SaaS
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">
                  Process Automation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-blue-400 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Get In Touch</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
              <li className="flex items-center gap-2 sm:gap-3">
                <MessageCircle size={14} className="text-green-500 flex-shrink-0 sm:w-4 sm:h-4" />
                <a
                  href="https://wa.me/7025773731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={14} className="text-blue-500 flex-shrink-0 sm:w-4 sm:h-4" />
                <a
                  href="mailto:support@automik.online"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@automik.online
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={14} className="text-red-500 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4 sm:mt-1" />
                <span>Available Worldwide</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4 sm:gap-0"
        >
          <p>&copy; 2024 AutomiK. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 text-center sm:text-right">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
