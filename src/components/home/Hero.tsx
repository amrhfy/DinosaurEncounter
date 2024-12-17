'use client'

import Button from '@/components/common/Button'
import { motion } from 'framer-motion'
import ScrollIndicator from '@/components/common/ScrollIndicator'
import SectionSubtitle from '@/components/common/SectionSubtitle'

const Hero = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/755 to-black/20" />
      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <motion.div 
          className="w-full md:w-auto space-y-6 md:space-y-10 z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionSubtitle 
            text="A New Era of Adventure"
            animate={false}
          />
          
          <h1 className="space-y-2 md:space-y-4">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-none">
              Welcome To
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20">
              Prehistory
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl font-light leading-relaxed">
            Experience an immersive encounter with Earth&apos;s most magnificent creatures. 
            Walk among giants in a meticulously crafted prehistoric world.
          </p>

          <Button className="w-full sm:w-auto justify-center">
            EXPLORE NOW
          </Button>
        </motion.div>
        
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>
    </div>
  )
}

export default Hero
