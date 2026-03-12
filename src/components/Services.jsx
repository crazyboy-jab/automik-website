'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Code, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      description:
        'We build 24/7 digital employees. From lead capture to CRM syncing, we use n8n to connect your entire business to WhatsApp. Handle 90% of repetitive tasks automatically.',
      features: ['n8n Workflows', 'Meta Official API', 'Lead Management', '24/7 Support'],
      color: 'from-emerald-500 to-green-500',
      accent: 'emerald',
    },
    {
      icon: Code,
      title: 'Web Development',
      description:
        'High-performance Next.js sites that convert. We build scalable, SEO-optimized platforms that turn visitors into customers. Speed, design, and conversion optimized.',
      features: ['Next.js Apps', 'Performance Focused', 'SEO Optimized', 'Mobile Ready'],
      color: 'from-blue-500 to-cyan-500',
      accent: 'blue',
    },
    {
      icon: Zap,
      title: 'Custom SaaS',
      description:
        'Scalable software solutions built for your unique business. From MVPs to enterprise platforms, we create tools that grow with you. Full-stack development.',
      features: ['MVP Development', 'Scalable Architecture', 'Real-time Features', 'Analytics Ready'],
      color: 'from-purple-500 to-pink-500',
      accent: 'purple',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="section-spacing px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
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
            Why Manual Work Is <span className="gradient-text">Killing Your Margins</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Your competitors are automating. Every manual task is lost revenue.
            We give you the unfair advantage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300`}
                />

                <div className="relative glass border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <Icon className="text-white" size={22} />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                        <div className={`w-2 h-2 rounded-full bg-${service.accent}-500 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/cta text-sm sm:text-base"
                  >
                    Learn More
                    <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
