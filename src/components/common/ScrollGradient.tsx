'use client'

import { useEffect, useState } from 'react'

const ScrollGradient = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      
      // Opacity transition
      const opacityProgress = Math.min(scrolled / 400, 1)
      const opacityEased = 1 - Math.cos((opacityProgress * Math.PI) / 2)
      const newOpacity = Math.min(Math.max(opacityEased, 0), 1)
      
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Gradient */}
      <div 
        data-scroll-gradient
        className="fixed inset-x-0 top-0 h-[25vh] pointer-events-none z-40 transition-opacity duration-500 ease-out"
        style={{ opacity: opacity * 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-15 mix-blend-soft-light" />
      </div>

      {/* Bottom Gradient */}
      <div 
        data-scroll-gradient
        className="fixed inset-x-0 bottom-0 h-[25vh] pointer-events-none z-40 transition-opacity duration-500 ease-out"
        style={{ opacity: opacity * 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-15 mix-blend-soft-light" />
      </div>
    </>
  )
}

export default ScrollGradient 
