'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsArrowRight, BsX, BsGrid3X3, BsListUl } from 'react-icons/bs'
import CTASection from '@/components/common/CTASection'
import { dinosaurs, getCategories, type Dinosaur } from '@/lib/data/dinosaurs'
import { FaUtensils, FaRuler, FaWeight, FaTachometerAlt, FaSearch } from 'react-icons/fa'
import ScrollIndicator from '@/components/common/ScrollIndicator'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const categories = [
  { id: 'all', label: 'All Species' },
  ...getCategories().map(category => ({
    id: category.toLowerCase(),
    label: category
  }))
]

export default function Dinopedia() {
  const [isVisible, setIsVisible] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null)
  
  // Use the useMediaQuery hook to determine if it's a mobile device
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  // Set the default view mode based on the screen size
  const [isCompactView, setIsCompactView] = useState(false)

  useEffect(() => {
    // Enable list view mode by default on mobile devices
    if (isMobile) {
      setIsCompactView(true)
    }
  }, [isMobile])

  const filteredDinos = selectedCategory === 'all' 
    ? dinosaurs 
    : dinosaurs.filter(dino => dino.category.toLowerCase() === selectedCategory)

  useEffect(() => {
    if (selectedDino) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedDino])

  // Add effect to handle ScrollGradient visibility
  useEffect(() => {
    const scrollGradients = document.querySelectorAll('[data-scroll-gradient]')
    
    if (selectedDino) {
      scrollGradients.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '0'
          el.style.pointerEvents = 'none'
        }
      })
    } else {
      scrollGradients.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = ''
          el.style.pointerEvents = ''
        }
      })
    }
  }, [selectedDino])

  return (
    <div className="min-h-screen">
      {/* Content */}
      <div className="relative">
        {/* Hero Section - Reduced height */}
        <section className="min-h-[30vh] md:min-h-[40vh] flex items-start relative pt-32 pb-16 md:py-40">
          <div className="w-full">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <motion.span 
                  className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase block mb-4 md:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Discover Prehistoric Life
                </motion.span>
                <h1 className="space-y-2 md:space-y-4">
                  <motion.span 
                    className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Meet The
                  </motion.span>
                  <motion.span 
                    className="block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Giants
                  </motion.span>
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Full width */}
        <section className="bg-black/30 backdrop-blur-sm border-t border-white/5">
          <div className="py-12 md:py-24">
            {/* Header with Categories and View Toggle */}
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                {/* Section Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-light text-white">
                    Browse Species
                  </h2>
                  {/* View Toggle */}
                  <motion.div 
                    className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 self-start"
                    layout
                  >
                    <button
                      onClick={() => setIsCompactView(false)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition-all duration-300 flex items-center justify-center
                        ${!isCompactView 
                          ? 'bg-amber-500/20 text-white border border-amber-500/20' 
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <BsGrid3X3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setIsCompactView(true)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition-all duration-300 flex items-center justify-center
                        ${isCompactView 
                          ? 'bg-amber-500/20 text-white border border-amber-500/20' 
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <BsListUl className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </motion.div>
                </div>

                {/* Category Filters - Scrollable on mobile */}
                <div className="overflow-x-auto scrollbar-none -mx-4 sm:mx-0">
                  <div className="flex items-center gap-2 px-4 sm:px-0 min-w-max sm:flex-wrap">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`
                          px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 relative group whitespace-nowrap
                          ${category.id === selectedCategory 
                            ? 'bg-amber-500/20 text-white border border-amber-500/20' 
                            : 'bg-white/5 text-white/60 hover:bg-amber-500/10 hover:text-white border border-white/10 hover:border-amber-500/20'
                          }
                        `}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-white/50 text-xs sm:text-sm">
                  Showing {filteredDinos.length} {filteredDinos.length === 1 ? 'species' : 'species'}
                </div>
              </div>
            </div>

            {/* Grid Container - Full width */}
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <motion.div 
                className={`grid gap-4 sm:gap-6 ${
                  isCompactView 
                    ? 'grid-cols-1 sm:grid-cols-2' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
                layout="position"
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  {filteredDinos.length > 0 ? (
                    filteredDinos.map((dino) => (
                      <motion.div
                        key={dino.id}
                        layout="position"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.4 },
                          layout: { 
                            type: "spring",
                            bounce: 0.15,
                            duration: 0.6
                          }
                        }}
                        className={`
                          group relative bg-gradient-to-br from-white/10 to-white/5 
                          hover:from-amber-500/20 hover:to-amber-900/20 rounded-lg overflow-hidden 
                          cursor-pointer border border-white/10 hover:border-amber-500/20 
                          transition-colors duration-300
                          ${isCompactView ? 'h-24' : 'aspect-[4/5]'}
                        `}
                        onClick={() => setSelectedDino(dino)}
                      >
                        {isCompactView ? (
                          // Compact View Layout
                          <div className="h-full flex items-center gap-6 p-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={dino.image}
                                alt={dino.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-wider text-white/70 inline-block mb-2">
                                {dino.category}
                              </span>
                              <h3 className="text-white font-light truncate mb-1">
                                {dino.name}
                              </h3>
                              <p className="text-white/50 text-sm truncate">
                                {dino.stats.length} • {dino.stats.weight}
                              </p>
                            </div>
                            <BsArrowRight className="w-5 h-5 text-white/30 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                          </div>
                        ) : (
                          // Gallery View Layout
                          <div className="h-full p-4 flex flex-col">
                            {/* Image Container */}
                            <div className="relative flex-grow rounded-lg overflow-hidden bg-black/20">
                              <Image
                                src={dino.image}
                                alt={dino.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </div>

                            {/* Info Section */}
                            <div className="pt-4">
                              {/* Category Tag */}
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-wider text-white/70 transition-colors duration-200 group-hover:bg-amber-500/20">
                                  {dino.category}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="text-white font-light text-sm truncate group-hover:text-white/90">
                                {dino.name}
                              </h3>

                              {/* Quick Stats */}
                              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-white/50">
                                <div className="group-hover:text-white/70 transition-colors duration-200">
                                  Length: {dino.stats.length}
                                </div>
                                <div className="group-hover:text-white/70 transition-colors duration-200">
                                  Weight: {dino.stats.weight}
                                </div>
                              </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 p-4 bg-gradient-to-b from-black/90 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col backdrop-blur-sm">
                              <div className="flex-grow">
                                <span className="inline-block px-2 py-1 bg-amber-500/20 rounded-full text-[10px] uppercase tracking-wider text-white/70 mb-3">
                                  {dino.category}
                                </span>
                                <h3 className="text-white text-lg font-light mb-2">{dino.name}</h3>
                                <p className="text-gray-400 text-sm line-clamp-4">
                                  {dino.description}
                                </p>
                              </div>

                              {/* View Details Button */}
                              <div className="pt-4 mt-auto border-t border-white/10">
                                <div className="flex items-center justify-between text-white/70 group/btn">
                                  <span className="text-xs uppercase tracking-wider">View Details</span>
                                  <motion.div 
                                    className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center"
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245,158,11,0.3)" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <FaSearch className="w-8 h-8 text-white/20" />
                      </div>
                      <h3 className="text-2xl font-light text-white mb-2">
                        No Dinosaurs Found
                      </h3>
                      <p className="text-gray-400 max-w-md">
                        There are no dinosaurs in the {selectedCategory === 'all' ? 'selected' : selectedCategory} category. 
                        Try selecting a different category.
                      </p>
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="mt-8 px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/20 rounded-lg text-white/90 text-sm transition-all duration-300 flex items-center gap-2 group"
                      >
                        View All Species
                        <BsArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedDino && (
            <>
              {/* Backdrop with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999998] backdrop-blur-xl bg-black/80"
                onClick={() => setSelectedDino(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed inset-0 z-[999999] overflow-y-auto px-4 sm:px-6 md:px-8"
              >
                <div className="min-h-full flex items-center justify-center py-4 sm:py-6 md:py-12">
                  <motion.div className="relative w-full max-w-7xl mx-auto">
                    {/* Close Buttons - Mobile and Desktop */}
                    <div className="relative">
                      {/* Mobile Close Button - Fixed at bottom */}
                      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[1000001]">
                        <button
                          onClick={() => setSelectedDino(null)}
                          className="w-full py-4 px-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl text-white flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
                        >
                          <BsX className="w-5 h-5" />
                          <span className="text-sm">Close</span>
                        </button>
                      </div>

                      {/* Desktop Close Button */}
                      <motion.button
                        onClick={() => setSelectedDino(null)}
                        className="absolute -top-12 sm:-top-16 right-0 sm:right-4 group z-[1000000] hidden md:flex"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-2 text-white/70 hover:text-white">
                          <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                            Press ESC to close
                          </span>
                          <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                            <BsX className="w-6 h-6" />
                          </div>
                        </div>
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden relative z-[9999] shadow-2xl mb-16 md:mb-0">
                      {/* Split View Layout */}
                      <div className="grid md:grid-cols-[1fr,1.5fr]">
                        {/* Left Column - Image and Category */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-full md:min-h-[600px] bg-black">
                          <div className="absolute inset-0 group overflow-hidden">
                            <Image
                              src={selectedDino.image}
                              alt={selectedDino.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                            <motion.span
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider text-white/90 border border-white/10"
                            >
                              {selectedDino.category}
                            </motion.span>
                          </div>

                          {/* Quick Stats Overlay */}
                          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                              {Object.entries(selectedDino.stats).map(([key, value], index) => (
                                <motion.div
                                  key={key}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + index * 0.1 }}
                                  className="group"
                                >
                                  <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                      {key === 'diet' && <FaUtensils className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />}
                                      {key === 'length' && <FaRuler className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />}
                                      {key === 'weight' && <FaWeight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />}
                                      {key === 'speed' && <FaTachometerAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />}
                                    </div>
                                    <div>
                                      <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider block mb-0.5 sm:mb-1 group-hover:text-white/70 transition-colors">
                                        {key}
                                      </span>
                                      <span className="text-white text-xs sm:text-sm font-light block group-hover:text-amber-500 transition-colors">
                                        {value}
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
                          {/* Title */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-3 sm:space-y-4"
                          >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white">
                              {selectedDino.name}
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-amber-500/50 to-transparent rounded-full" />
                          </motion.div>

                          {/* Description */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 sm:space-y-6"
                          >
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                              {selectedDino.description}
                            </p>
                          </motion.div>

                          {/* Habitat & Behavior */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 pt-6 border-t border-white/10"
                          >
                            <h3 className="text-2xl font-light text-white">Habitat & Behavior</h3>
                            <p className="text-gray-400 leading-relaxed">
                              These magnificent creatures roamed the Earth during the late Cretaceous period, 
                              approximately 68 to 66 million years ago. They were highly adapted to their 
                              environment and displayed complex social behaviors.
                            </p>
                          </motion.div>

                          {/* Interactive Elements */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 pt-6 border-t border-white/10"
                          >
                            <button
                              disabled
                              className="px-6 py-3 bg-amber-500/10 rounded-lg text-white/40 text-sm cursor-not-allowed relative group"
                            >
                              View in AR
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 text-white/70 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Coming soon
                              </span>
                            </button>
                            <a
                              href={`https://en.wikipedia.org/wiki/${selectedDino.name.replace(' ', '_')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg text-white/90 text-sm transition-colors flex items-center gap-2 group"
                            >
                              Read on Wikipedia
                              <BsArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <CTASection />

      {/* Add scroll indicator if not present */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </div>
  )
}
