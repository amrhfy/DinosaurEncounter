'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { BsX, BsArrowUpRight, BsTicket, BsTicketPerforated, BsCalendar2Check } from 'react-icons/bs'
import { HiOutlineTicket } from 'react-icons/hi'
import { IoTicketOutline } from 'react-icons/io5'

interface NavItem {
  name: string
  href: string
  isNew?: boolean
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Adventure', href: '/adventure' },
    { name: 'Dinopedia', href: '/dinopedia', isNew: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Minimal Backdrop */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'bg-zinc-950/10 backdrop-blur-md' 
            : 'bg-zinc-950/10 backdrop-blur-sm'
        }`}
      />

      {/* Main Content - Matched with Hero container */}
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative shrink-0">
            <Image
              src="/logos/logo-colored.png"
              alt="Logo"
              width={110}
              height={36}
              className="relative"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-2"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {item.isNew && (
                    <span className="px-1.5 py-0.5 text-[10px] font-medium text-zinc-950 bg-amber-400 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                {/* Underline effect */}
                <span className={`absolute bottom-0 left-0 w-full h-px transform origin-left transition-transform duration-300 ${
                  pathname === item.href
                    ? 'bg-white scale-x-100'
                    : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/tickets"
              className="group relative inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white/10 hover:border-amber-500/20 transition-all duration-500"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <span className="text-sm font-light tracking-wider text-white/90 group-hover:text-white transition-colors duration-500">
                  Get Tickets
                </span>
                <BsArrowUpRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-px bg-white transition-transform origin-right" />
              <span className="block w-4 h-px bg-white ml-auto transition-transform origin-right" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 md:hidden"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="min-h-screen bg-zinc-950/95 backdrop-blur-xl"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header - Matched padding */}
                  <div className="flex items-center justify-between h-20 px-4 sm:px-6 md:px-8 lg:px-16 border-b border-white/10">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/logos/logo-colored.png"
                        alt="Logo"
                        width={100}
                        height={35}
                        className="opacity-90"
                      />
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <BsX className="w-6 h-6 text-white/70" />
                    </button>
                  </div>

                  {/* Mobile Navigation - Matched padding */}
                  <div className="flex-1 overflow-y-auto py-12 px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="space-y-8">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group flex items-center justify-between py-2"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`text-3xl font-light ${
                                pathname === item.href
                                  ? 'text-white'
                                  : 'text-zinc-400 group-hover:text-white transition-colors'
                              }`}>
                                {item.name}
                              </span>
                              {item.isNew && (
                                <span className="px-2 py-1 text-xs font-medium text-zinc-950 bg-amber-400 rounded-full">
                                  NEW
                                </span>
                              )}
                            </div>
                            <BsArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </Link>
                        </motion.div>
                      ))}

                      {/* Mobile CTA */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1 }}
                        className="pt-8"
                      >
                        <Link
                          href="/tickets"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block w-full py-4 text-center text-zinc-950 bg-amber-400 hover:bg-amber-500 rounded-lg font-medium transition-colors"
                        >
                          Get Tickets
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
