'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { name: 'Adventure', href: '/adventure' },
    { name: 'Dinopedia', href: '/dinopedia' },
    { name: 'Tickets', href: '/tickets' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/dinoencounter/', name: 'Facebook' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@dinosaur.encounter?lang=en', name: 'TikTok' },
    { icon: FaInstagram, href: 'https://www.instagram.com/dinosaur_encounter/?hl=en', name: 'Instagram' }
  ]

  const locations = [
    {
      city: 'Kuantan',
      state: 'Pahang',
      address: 'Zoo Teruntum, Jalan Padang Golf',
      phone: '+60 9-560 1112',
      hours: '9:00 AM - 6:00 PM'
    },
    {
      city: 'Kuala Terengganu',
      state: 'Terengganu',
      address: 'Kampung Laut Chendering',
      phone: '+60 96174004',
      hours: '10:00 AM - 7:00 PM'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black to-black/90">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-soft-light" />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="relative">
        <div className="max-w-[1800px] mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12 lg:p-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Image
                  src="/logos/logo-colored.png"
                  alt="Dinosaur Encounter"
                  width={140}
                  height={48}
                  className="opacity-90"
                />
              </motion.div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Experience the wonders of prehistory at Malaysia&apos;s premier dinosaur theme park. 
                Join us for an unforgettable journey through time.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-amber-500/70 transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-white text-sm font-medium tracking-wider">QUICK LINKS</h3>
                <nav className="flex flex-col gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group w-fit"
                    >
                      <span>{link.name}</span>
                      <BsArrowUpRight className="w-3 h-3 text-amber-500/50 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                <h3 className="text-white text-sm font-medium tracking-wider">VISIT US</h3>
                <div className="space-y-6">
                  {locations.map((location) => (
                    <div key={location.city} className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-white text-sm">{location.city}</h4>
                        <span className="text-amber-500/70 text-xs">{location.state}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-400 text-xs">{location.address}</p>
                        <p className="text-gray-400 text-xs">{location.phone}</p>
                        <p className="text-gray-400 text-xs">{location.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5">
            <div className="px-6 md:px-12 lg:px-16 py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-gray-400 text-sm order-2 sm:order-1">
                  © 2024 Dinosaur Encounter. All rights reserved.
                </p>

                {/* Additional Links */}
                <div className="flex items-center gap-6 order-1 sm:order-2 text-xs">
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
