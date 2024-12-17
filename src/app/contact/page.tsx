'use client'

import { motion } from 'framer-motion'
import { BsEnvelope, BsPhone, BsArrowRight, BsCopy, BsCheck } from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const contactInfo = [
    {
      icon: BsEnvelope,
      title: "Email",
      details: ["info@dinosaurencounter.my"],
      gradient: "from-amber-500/20 to-amber-500/5"
    },
    {
      icon: BsPhone,
      title: "Phone",
      details: ["+60 9-560 1112"],
      gradient: "from-amber-500/15 to-amber-500/5"
    }
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/dinopedia/1.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-soft-light" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:container sm:mx-auto min-h-screen flex items-center justify-between">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="w-full lg:flex-1 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                
                {/* Header */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  <motion.span 
                    className="inline-block text-xs sm:text-sm font-light tracking-[0.2em] text-gray-400 uppercase px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Get in Touch
                  </motion.span>
                  <h1 className="space-y-2 sm:space-y-4">
                    <motion.span 
                      className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Connect With
                    </motion.span>
                    <motion.span 
                      className="block text-3xl sm:text-4xl md:text-6xl lg:text-[7rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Adventure
                    </motion.span>
                  </h1>
                </div>

                {/* Contact Info Cards - Simplified Design */}
                <div className="flex flex-col gap-3 sm:gap-4 w-full sm:max-w-md">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="group relative"
                    >
                      <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-black/20 backdrop-blur-sm">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${info.gradient}`}>
                            <info.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-xs tracking-wider text-white/50 uppercase mb-0.5 sm:mb-1">
                              {info.title}
                            </span>
                            <p className="text-white/90 text-xs sm:text-sm font-light">
                              {info.details[0]}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleCopy(info.details[0], info.title)}
                          className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/copy"
                          aria-label={`Copy ${info.title}`}
                        >
                          {copiedField === info.title ? (
                            <BsCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                          ) : (
                            <BsCopy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50 group-hover/copy:text-white transition-colors" />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:flex-1 relative"
            >
              <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-bl-[100px] blur-2xl" />
                
                <form onSubmit={handleSubmit} className="relative space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-black/20 border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-black/20 border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="subject" className="block text-xs sm:text-sm text-gray-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-black/20 border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-black/20 border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button className="w-full justify-center bg-gradient-to-r from-amber-500/20 to-amber-500/5 hover:from-amber-500/30 hover:to-amber-500/10 text-sm">
                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
