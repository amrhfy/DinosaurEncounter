'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/common/Button'
import SectionSubtitle from './SectionSubtitle'

interface CTASectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  image?: string
  theme?: 'light' | 'dark'
  showArrow?: boolean
}

const CTASection = ({
  title = "Start Your Adventure",
  subtitle = "Ready to Explore?",
  description = "Step into a world where prehistoric giants roam and ancient mysteries await. Book your tickets now and embark on an unforgettable journey through time.",
  primaryButtonText = "Book Tickets",
  primaryButtonHref = "/tickets",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/about",
  image = "/images/dinopedia/1.png",
}: CTASectionProps) => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          <SectionSubtitle text={subtitle} className="mb-4 md:mb-8" />

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 md:mb-12 max-w-xl"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              href={primaryButtonHref}
              className="w-full sm:w-auto justify-center bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm border border-amber-500/10 hover:text-white hover:border-amber-500/20 group"
            >
              {primaryButtonText}
            </Button>
            <Button 
              href={secondaryButtonHref}
              className="w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              {secondaryButtonText}
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-soft-light" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 mix-blend-soft-light" />
        </div>
      </div>
    </section>
  )
}
export default CTASection 

