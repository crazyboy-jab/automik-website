'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const projectTypes = [
    'WhatsApp Automation',
    'Web Development',
    'Custom SaaS',
    'All Services',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const submitData = {
      access_key: '7d0e9bb9-633e-45a7-846d-76b3bc2dd100',   // ←←← replace this line
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      'project-type': formData.projectType,   // nicer label in email
      message: formData.message,
      subject: 'New Contact Form Submission - AutomiK Website',
      from_name: formData.name || 'Website Visitor',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submitData),
    });

    const json = await response.json();

    if (json.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
      });
      // Auto-hide success message after 6 seconds
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      alert('Something went wrong. Please try again or message us on WhatsApp.');
      console.error('Web3Forms error:', json);
    }
  } catch (err) {
    console.error('Submission error:', err);
    alert('Network error. Please check your connection and try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="section-spacing px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Let's Talk <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">
            Free 30-minute consultation. No obligation. You'll get actionable insights about your business.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass border border-blue-500/20 rounded-2xl p-6 sm:p-8 md:p-12"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 sm:py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                We've received your message. Expect a call within 2 minutes.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                In the meantime, you can reach us on WhatsApp for instant response.
              </p>
            </motion.div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="Acme Inc."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>
              </div>

              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your business, challenges, and goals..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full btn-glow py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Your Free Audit
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {/* Footer Note */}
              <p className="text-center text-xs sm:text-sm text-gray-500">
                We typically respond within 2 minutes. You can also WhatsApp us for instant assistance.
              </p>
            </form>
          )}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center"
        >
          <div className="glass border border-gray-700/50 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
          </div>
          <div className="glass border border-gray-700/50 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">340%+</div>
            <p className="text-gray-400 text-xs sm:text-sm">Avg. ROI Increase</p>
          </div>
          <div className="glass border border-gray-700/50 rounded-xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">2 min</div>
            <p className="text-gray-400 text-xs sm:text-sm">Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
