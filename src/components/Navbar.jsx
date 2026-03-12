'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass border-b border-blue-500/10"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <Image
              src="/logo_main.png"
              alt="AutomiK Logo"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
              priority
            />
            <span className="hidden xs:block text-white font-bold text-base sm:text-lg md:text-xl">AutomiK</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#3b82f6' }}
                className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-sm lg:text-base font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glow px-4 lg:px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all text-xs sm:text-sm lg:text-base whitespace-nowrap"
            >
              Book a Call
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-3 sm:pb-4 space-y-2 max-h-96 overflow-y-auto"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="w-full mt-3 px-3 sm:px-4 py-2 bg-blue-500 text-white text-xs sm:text-sm rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
