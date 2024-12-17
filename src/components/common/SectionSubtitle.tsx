'use client'

import { motion } from 'framer-motion'

interface SectionSubtitleProps {
  text: string
  className?: string
  animate?: boolean
  delay?: number
  variant?: 'default' | 'amber'
  showPulse?: boolean
}

const SectionSubtitle = ({ 
  text, 
  className = '',
  animate = true,
  delay = 0.5,
  variant = 'default',
  showPulse = false
}: SectionSubtitleProps) => {
  const content = (
    <div className={`inline-flex items-center gap-2 ${
      variant === 'amber' 
        ? 'bg-amber-500/10 border border-amber-500/20' 
        : 'bg-white/5'
    } px-4 py-2 rounded-full ${className}`}>
      {showPulse && (
        <span className="w-2 h-2 rounded-full bg-amber-500/50 animate-pulse" />
      )}
      <span className={`text-xs font-light tracking-[0.2em] uppercase ${
        variant === 'amber' ? 'text-amber-500/90' : 'text-gray-400'
      }`}>
        {text}
      </span>
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export default SectionSubtitle 
