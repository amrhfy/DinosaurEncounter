'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, PanInfo } from 'framer-motion'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface CarouselProps {
  items: React.ReactNode[]
  itemWidth?: number
  gap?: number
  showArrows?: boolean
}

const Carousel = ({ 
  items, 
  itemWidth = 400, 
  gap = 32,
  showArrows = true 
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [constraintLeft, setConstraintLeft] = useState(0)
  const [constraintRight, setConstraintRight] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth
      const totalWidth = items.length * (itemWidth + gap) - gap
      setConstraintRight(Math.min(0, containerWidth - totalWidth))
      setConstraintLeft(0)
    }
  }, [items.length, itemWidth, gap])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    if (Math.abs(velocity) > 500) {
      if (velocity > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    } else if (Math.abs(offset) > 50) {
      if (offset > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{
          left: constraintRight,
          right: constraintLeft
        }}
        onDragEnd={handleDragEnd}
        style={{
          gap: `${gap}px`
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            style={{ width: itemWidth }}
            animate={{
              scale: currentIndex === index ? 1 : 0.95,
              opacity: currentIndex === index ? 1 : 0.7
            }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center transition-all ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
            }`}
            disabled={currentIndex === 0}
          >
            <BsChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center transition-all ${
              currentIndex === items.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
            }`}
            disabled={currentIndex === items.length - 1}
          >
            <BsChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  )
}

export default Carousel 
