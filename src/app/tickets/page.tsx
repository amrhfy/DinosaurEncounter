'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { BsCheck2, BsClock } from 'react-icons/bs'
import CTASection from '@/components/common/CTASection'
import SectionSubtitle from '@/components/common/SectionSubtitle'

interface ParkLocation {
  id: string
  name: string
  state: string
  image: string
  description: string
  operatingHours: {
    weekdays: string
    weekends: string
  }
}

interface TicketType {
  id: string
  name: string
  description: string
  prices: {
    mykad: number
    foreign: number
  }
  features: string[]
}

const parkLocations: ParkLocation[] = [
  {
    id: 'kuantan',
    name: 'Zoo Teruntum',
    state: 'Pahang',
    image: '/images/locations/kuantan.png',
    description: 'Experience prehistoric wonders in the heart of Pahang',
    operatingHours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: '9:00 AM - 7:00 PM'
    }
  },
  {
    id: 'terengganu',
    name: 'Chendering Park',
    state: 'Terengganu',
    image: '/images/locations/terengganu.jpg',
    description: 'Coastal dinosaur adventure with stunning ocean views',
    operatingHours: {
      weekdays: '10:00 AM - 7:00 PM',
      weekends: '9:00 AM - 8:00 PM'
    }
  },
  {
    id: 'perak',
    name: 'Silverlakes',
    state: 'Perak',
    image: '/images/locations/perak.jpg',
    description: 'Discover dinosaurs in a scenic lakeside setting',
    operatingHours: {
      weekdays: '10:00 AM - 6:00 PM',
      weekends: '9:00 AM - 7:00 PM'
    }
  }
]

const ticketTypes: TicketType[] = [
  {
    id: 'basic',
    name: 'Explorer Pass',
    description: 'Essential park experience',
    prices: {
      mykad: 49,
      foreign: 79
    },
    features: [
      'Full park access',
      'Dino Show admission',
      'Interactive exhibits',
      'Photo opportunities',
      'Mobile app guide'
    ]
  },
  {
    id: 'premium',
    name: 'Discovery Pass',
    description: 'Enhanced adventure package',
    prices: {
      mykad: 89,
      foreign: 149
    },
    features: [
      'All Explorer Pass features',
      'Priority queue access',
      'VR Experience (1 session)',
      'Guided tour',
      'Souvenir pack',
      'Dining discount 10%'
    ]
  }
]

export default function Tickets() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [isMyKad, setIsMyKad] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/dinopedia/1.png"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-soft-light" />
        
        {/* Decorative Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] sm:min-h-[50vh] flex items-center py-20 sm:py-24">
          <div className="w-full">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <SectionSubtitle 
                  text="Special MyKad Rates Available" 
                  className="mb-4 sm:mb-6 md:mb-8"
                  animate={false}
                  variant="amber"
                  showPulse
                />

                {/* Title */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <h1 className="space-y-2 md:space-y-4">
                    <motion.span 
                      className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Choose Your
                    </motion.span>
                    <motion.span 
                      className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Location
                    </motion.span>
                  </h1>

                  {/* Description */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <motion.p 
                      className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Experience the wonders of prehistory at any of our world-class facilities across Malaysia. 
                      Each location offers unique attractions and experiences, with special rates for MyKad holders.
                    </motion.p>

                    <motion.div 
                      className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2">
                        <BsCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/70" />
                        <span>Multiple locations nationwide</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/70" />
                        <span>Special MyKad pricing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/70" />
                        <span>Unique experiences at each park</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="pb-8 sm:pb-32">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16">
            {/* Location Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {parkLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className={`group relative rounded-xl sm:rounded-2xl border backdrop-blur-sm
                    ${selectedLocation === location.id 
                      ? 'border-amber-500/20 bg-white/10' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    } transition-colors duration-300`}
                >
                  {/* Location Content */}
                  <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-white mb-1">
                        {location.name}
                      </h3>
                      <p className="text-amber-500/90 text-xs sm:text-sm">
                        {location.state}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {location.description}
                    </p>

                    {/* Operating Hours */}
                    <div className="space-y-2 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <BsClock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                        <span>Weekdays: {location.operatingHours.weekdays}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <BsClock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                        <span>Weekends: {location.operatingHours.weekends}</span>
                      </div>
                    </div>

                    {/* Price Info */}
                    <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-400">MyKad Holder</span>
                          <span className="text-white font-light">From RM{ticketTypes[0].prices.mykad}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-400">Non-Malaysian</span>
                          <span className="text-white font-light">From RM{ticketTypes[0].prices.foreign}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 sm:space-y-3">
                      <Button 
                        onClick={() => setSelectedLocation(location.id)}
                        className="w-full justify-center bg-amber-500/20 hover:text-white hover:bg-amber-500/30 text-sm sm:text-base py-2 sm:py-2.5"
                      >
                        View Tickets
                      </Button>
                      <button
                        onClick={() => setSelectedLocation(location.id)}
                        className="w-full px-4 py-2 sm:py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-xs sm:text-sm transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ticket Types */}
            <AnimatePresence mode="wait">
              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="py-16 sm:py-32 border-t border-white/5"
                >
                  {/* Citizenship Toggle */}
                  <div className="flex justify-center mb-8 sm:mb-16">
                    <div className="inline-flex rounded-lg border border-white/10 p-1">
                      <button
                        onClick={() => setIsMyKad(true)}
                        className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-colors ${
                          isMyKad 
                            ? 'bg-amber-500/20 text-white' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        MyKad Holder
                      </button>
                      <button
                        onClick={() => setIsMyKad(false)}
                        className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-colors ${
                          !isMyKad 
                            ? 'bg-amber-500/20 text-white' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Non-Malaysian
                      </button>
                    </div>
                  </div>

                  {/* Ticket Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                    {ticketTypes.map((ticket, index) => (
                      <motion.div
                        key={ticket.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
                      >
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-light text-white mb-1 sm:mb-2">
                              {ticket.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {ticket.description}
                            </p>
                          </div>

                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-light text-white">
                              RM{isMyKad ? ticket.prices.mykad : ticket.prices.foreign}
                            </span>
                            <span className="text-sm text-gray-400">
                              / person
                            </span>
                          </div>

                          <div className="space-y-2 sm:space-y-3">
                            {ticket.features.map((feature, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300"
                              >
                                <BsCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/70" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button 
                            href={`/tickets/book/${selectedLocation}/${ticket.id}?citizenship=${isMyKad ? 'mykad' : 'foreign'}`}
                            className="w-full justify-center text-sm sm:text-base py-2 sm:py-2.5"
                          >
                            Book Now
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section - Optional */}
        {!selectedLocation && (
          <CTASection
            subtitle="Ready to Book?"
            title="Choose Your Location"
            description="Select a location to view available tickets and start your prehistoric adventure."
            primaryButtonText="Contact Us"
            primaryButtonHref="/contact"
            showArrow={false}
          />
        )}
      </div>
    </main>
  )
} 
