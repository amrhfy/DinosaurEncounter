'use client'

import { useState, useRef } from 'react'
import Button from '@/components/common/Button'
import { dinoCategories } from '@/lib/data/categories'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { BsPlus } from 'react-icons/bs'

const Dinopedia = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const translateX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -50])

  const displayedCategories = isMobile ? dinoCategories.slice(0, 3) : dinoCategories

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-48"
    >
      {/* Main Content */}
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="relative mb-12 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-[1200px]"
          >
            <span className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase mb-4 md:mb-6 block">
              Knowledge Base
            </span>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-none">
                Discover
                <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white/80 via-white/60 to-white/20 tracking-normal">
                  Prehistory
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl font-light leading-relaxed mt-4 md:mt-8">
                Embark on a journey through time. Explore our comprehensive database of 
                prehistoric creatures and ancient ecosystems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="relative space-y-4 sm:space-y-6 md:space-y-8">
          {displayedCategories.map((category, index) => (
            <motion.div
              key={category.id}
              style={{ x: translateX }}
              className="relative"
            >
              <div 
                className={`group relative transition-all duration-700 ease-out
                  ${expandedCategory === category.id 
                    ? 'h-[400px] sm:h-[500px] md:h-[600px]' 
                    : 'h-[120px] sm:h-[150px] md:h-[200px]'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 hover:border-amber-500/20 transition-all duration-300">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ 
                      scale: expandedCategory === category.id ? 1 : 1.2,
                      filter: expandedCategory === category.id ? 'brightness(1)' : 'brightness(0.9)'
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    expandedCategory === category.id
                      ? 'from-black/80 via-black/40 to-transparent'
                      : 'from-black/70 via-black/60 to-transparent'
                  }`} />
                </div>

                {/* Content */}
                <div className="relative h-full">
                  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-white/50 text-xs tracking-wider mb-1 block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                          {category.title}
                        </h3>
                      </motion.div>

                      <button
                        onClick={() => setExpandedCategory(
                          expandedCategory === category.id ? null : category.id
                        )}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-amber-500/20 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <BsPlus 
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-500 ${
                            expandedCategory === category.id ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: expandedCategory === category.id ? 1 : 0,
                        y: expandedCategory === category.id ? 0 : 20
                      }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <p className="text-sm sm:text-base text-gray-400 max-w-2xl font-light leading-relaxed">
                        {category.description}
                      </p>

                      {/* Species Grid */}
                      {category.subCategories && (
                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                          {category.subCategories[0].examples.slice(0, 4).map((species, idx) => (
                            <div 
                              key={idx}
                              className="bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 hover:border-amber-500/20 transition-all duration-300"
                            >
                              <span className="text-white/70 text-xs block mb-1">Species</span>
                              <span className="text-white text-sm font-light block">{species}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <Button 
                        href={`/dinopedia/`}
                        className="w-full sm:w-auto justify-center bg-white/5 hover:bg-white backdrop-blur-sm border border-white/10 hover:border-amber-500/20"
                      >
                        EXPLORE CATEGORY
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View More Button */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button 
              href="/dinopedia"
              className="w-full sm:w-auto justify-center"
            >
              View All Categories
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Dinopedia
