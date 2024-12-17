'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'

interface ScrollIndicatorProps {
  text?: string
  className?: string
}

const ScrollIndicator = ({ 
  text = "Scroll to Explore",
  className = ""
}: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToContent}
      className={`flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group ${className}`}
    >
      <span className="text-sm font-light tracking-wider">
        {text}
      </span>
      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
        <BsChevronDown className="w-4 h-4" />
      </div>
    </motion.button>
  )
}

export default ScrollIndicator 
