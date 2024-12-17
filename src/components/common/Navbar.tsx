'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { BsX, BsArrowRight } from 'react-icons/bs'

type HoveredItem = {
  type: 'nav' | 'social'
  name: string
} | null

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<HoveredItem>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'HOME', href: '/', description: 'Return to the main page' },
    { name: 'ADVENTURE', href: '/adventure', description: 'Explore exciting dinosaur adventures' },
    { name: 'DINOPEDIA', href: '/dinopedia', description: 'Learn about prehistoric creatures' },
    { name: 'TICKETS', href: '/tickets', description: 'Book your visit today' },
    { name: 'ABOUT', href: '/about', description: 'Discover our story' },
    { name: 'CONTACT', href: '/contact', description: 'Get in touch with us' }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/dinoencounter/', name: 'Facebook' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@dinosaur.encounter?lang=en', name: 'TikTok' },
    { icon: FaInstagram, href: 'https://www.instagram.com/dinosaur_encounter/?hl=en', name: 'Instagram' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'h-20' : 'h-24'
      }`}
    >
      <div className={`w-full h-full transition-all duration-500 ${
        scrolled 
          ? 'bg-black/30 backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1800px] mx-auto px-4 md:px-16 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`transition-transform duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <Link href="/">
                <Image
                  src="/logos/logo-colored.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="opacity-90 hover:opacity-100 transition-all"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {/* Main Nav */}
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem({ type: 'nav', name: item.name })}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative py-2 group"
                  >
                    <span className={`text-sm tracking-[0.2em] font-light transition-all duration-300
                      ${pathname === item.href 
                        ? 'text-white' 
                        : hoveredItem?.type === 'nav'
                          ? hoveredItem.name === item.name
                            ? 'text-white'
                            : 'text-gray-500'
                          : 'text-gray-400'
                      }
                    `}>
                      {item.name}
                    </span>

                    {/* Animated Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/50 via-amber-500/30 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ 
                        scaleX: pathname === item.href || hoveredItem?.name === item.name ? 1 : 0,
                        opacity: pathname === item.href || hoveredItem?.name === item.name ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-white/70" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group shrink-0"
            >
              <span className="w-6 h-0.5 bg-white/70 group-hover:bg-white transition-colors" />
              <span className="w-6 h-0.5 bg-white/70 group-hover:bg-white transition-colors" />
              <span className="w-6 h-0.5 bg-white/70 group-hover:bg-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg z-50 md:hidden"
          >
            <motion.div 
              className="relative h-full w-full flex flex-col px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="h-20 w-full flex items-center justify-between">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/logos/logo-colored.png"
                    alt="Logo"
                    width={100}
                    height={35}
                    className="opacity-90"
                  />
                </Link>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <BsX className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8">
                <motion.div 
                  className="grid gap-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setSelectedItem(item.name)}
                      onHoverEnd={() => setSelectedItem(null)}
                    >
                      <Link
                        href={item.href}
                        className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xl font-light ${
                            pathname === item.href 
                              ? 'text-white' 
                              : 'text-white/70'
                          }`}>
                            {item.name}
                          </span>
                          <motion.div
                            animate={{ x: selectedItem === item.name ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <BsArrowRight className="w-5 h-5 text-white/50" />
                          </motion.div>
                        </div>
                        <motion.p 
                          className="text-sm text-white/40 mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: selectedItem === item.name ? 1 : 0,
                            height: selectedItem === item.name ? 'auto' : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.description}
                        </motion.p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="h-20 w-full flex items-center justify-center gap-4 border-t border-white/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-white/70" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
