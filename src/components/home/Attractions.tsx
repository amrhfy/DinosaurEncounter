'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface Attraction {
  id: number
  title: string
  description: string
  image: string
  features?: string[]
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Dino Show",
    description: "Experience our breathtaking live shows featuring life-sized dinosaurs in action. Watch as these prehistoric creatures come to life through stunning puppetry and state-of-the-art animatronics.",
    image: "/images/attractions/show.png",
    features: ["Live Performances", "Special Effects", "Interactive Elements"]
  },
  {
    id: 2,
    title: "Virtual Reality",
    description: "Step into the Jurassic world with our cutting-edge VR experiences. Interact with dinosaurs in their natural habitat.",
    image: "/images/attractions/vr.png",
    features: ["Immersive 3D World", "Interactive Gameplay", "Multiple Scenarios"]
  },
  {
    id: 3,
    title: "Souvenir Shop",
    description: "Take home a piece of prehistory from our extensive collection of dinosaur merchandise and fossils.",
    image: "/images/attractions/shop.png",
    features: ["Exclusive Merchandise", "Fossil Replicas", "Custom Gifts"]
  },
  {
    id: 4,
    title: "Animatronics",
    description: "Marvel at our collection of ultra-realistic animatronic dinosaurs, featuring precise movements based on paleontological research.",
    image: "/images/attractions/animatronics.png",
    features: ["Realistic Movements", "Scientific Accuracy", "Photo Ops"]
  },
  {
    id: 5,
    title: "Discovery Zone",
    description: "Engage in hands-on activities including fossil digs, educational workshops, and interactive exhibits perfect for all ages.",
    image: "/images/attractions/discovery.png",
    features: ["Fossil Dig Pits", "Science Labs", "Interactive Exhibits"]
  }
]

const Attractions = (): JSX.Element => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleHover = (id: number | null) => {
    if (!isMobile) {
      setHoveredId(id)
    }
  }

  const displayedAttractions = isMobile ? attractions.slice(0, 3) : attractions

  return (
    <section className="relative py-16 md:py-32">
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Improved mobile spacing */}
        <motion.div
          className="space-y-6 mb-12 md:mb-24"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase">
            Park Features
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white">
            Attractions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
            Immerse yourself in a world of wonder with our diverse range of 
            attractions designed to educate, entertain, and amaze visitors of all ages.
          </p>
        </motion.div>

        {/* Attractions Grid - Show only 3 items on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {displayedAttractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="group relative aspect-[16/12] sm:aspect-[4/5] bg-gray-900/30 rounded-lg overflow-hidden"
                onHoverStart={() => handleHover(attraction.id)}
                onHoverEnd={() => handleHover(null)}
                whileHover={!isMobile ? { y: -10 } : {}}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === attraction.id ? 1.1 : 1,
                    filter: isMobile ? 'none' : hoveredId === attraction.id ? 'blur(0px)' : 'blur(1px)'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                    animate={{
                      opacity: isMobile || hoveredId === attraction.id ? 0.7 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content container with backdrop blur */}
                <div className="relative h-full p-4 flex flex-col justify-end">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]"
                    animate={{
                      opacity: hoveredId === attraction.id ? 0 : 1,
                      backdropFilter: hoveredId === attraction.id ? 'blur(0px)' : 'blur(2px)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Index Number */}
                  <motion.span 
                    className="relative z-10 absolute top-2 right-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-white/10"
                    animate={{
                      opacity: hoveredId === attraction.id ? 0.2 : 0.1
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  {/* Main Content */}
                  <div className="relative z-10 space-y-2.5">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white">
                      {attraction.title}
                    </h3>

                    <div className="space-y-2.5">
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                        {attraction.description}
                      </p>

                      {/* Features Tags */}
                      <motion.div 
                        className="flex flex-wrap gap-1.5"
                        animate={{
                          opacity: hoveredId === attraction.id ? 1 : 0.8
                        }}
                      >
                        {attraction.features?.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="
                              text-[10px] sm:text-xs 
                              px-2.5 py-1 
                              rounded-full 
                              bg-white/5 backdrop-blur-sm 
                              border border-white/10 
                              text-white/90
                              hover:bg-white/10 hover:border-amber-500/20 
                              transition-colors
                            "
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View More" Button */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button 
              href="/attractions"
              className="w-full sm:w-auto justify-center"
            >
              View All Attractions
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Attractions
