'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Tickets() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="relative min-h-screen">
      {/* Background with blur */}
      <div className="fixed inset-0">
        <Image
          src="/images/dinopedia/1.png"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          {/* Coming Soon Text */}
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-thin text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Coming Soon
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-gray-400 max-w-md mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're currently updating our ticketing system. 
            Redirecting you to homepage in a moment...
          </motion.p>

          {/* Loading Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-2 border-amber-500/20 rounded-full"
                animate={{
                  rotate: 360,
                  borderTopColor: "rgba(245, 158, 11, 0.8)" // amber-500 with opacity
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Countdown Text */}
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Redirecting in 5 seconds...
          </motion.p>
        </motion.div>
      </div>
    </main>
  )
} 
