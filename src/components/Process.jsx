'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Audit',
      subtitle: 'Map Every Bottleneck',
      description:
        'We dig deep into your sales funnel, identifying every manual task killing your efficiency. From lead capture to closing, we find where your margins are leaking.',
      details: [
        'Sales funnel analysis',
        'Process mapping',
        'Cost analysis',
        'Growth opportunity identification',
      ],
    },
    {
      number: '02',
      title: 'Implement',
      subtitle: 'Deploy Automation',
      description:
        'We build n8n workflows that handle 90% of repetitive tasks. WhatsApp API integration, CRM syncing, lead scoring—all automated. Your team focuses on human connection and closing.',
      details: [
        'n8n workflow setup',
        'WhatsApp API integration',
        'Custom automation',
        '24/7 monitoring',
      ],
    },
    {
      number: '03',
      title: 'Scale',
      subtitle: 'Focus on Closing',
      description:
        'You focus on high-value closing while our systems find the customers and nurture them. Predictable growth, lower workload, higher profit margins.',
      details: [
        'Performance optimization',
        'Team training',
        'Continuous improvement',
        'Strategic scaling',
      ],
    },
  ]

  return (
    <section id="process" className="section-spacing px-3 sm:px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            The <span className="gradient-text">3-Step Growth Engine</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Exactly how we acquire and retain customers for you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch ${
                index % 2 === 1 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Middle */}
              <div className="flex flex-col items-center sm:w-auto">
                <motion.div
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 relative z-10 flex-shrink-0"
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 100 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-1 bg-gradient-to-b from-blue-500 to-green-500"
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="glass border border-blue-500/20 rounded-xl p-6 sm:p-8 flex-1"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-brand-green font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {step.subtitle}
                </p>
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                  {step.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm"
                    >
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Ready to see how this works for your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all text-sm sm:text-base whitespace-nowrap"
          >
            Start Your Free Audit Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
