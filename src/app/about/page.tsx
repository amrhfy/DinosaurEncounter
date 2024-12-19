'use client'

import { motion } from 'framer-motion'
import { BsClock } from 'react-icons/bs'
import { GiDinosaurRex, GiVirtualMarker, GiTeacher, GiJungle } from 'react-icons/gi'
import Image from 'next/image'
import Button from '@/components/common/Button'
import CTASection from '@/components/common/CTASection'
import ScrollIndicator from '@/components/common/ScrollIndicator'
import SectionSubtitle from '@/components/common/SectionSubtitle'

interface Location {
  id: number
  city: string
  address: string
  phone: string
  email: string
  image: string
  operatingHours: {
    weekdays: string
    weekends: string
    holidays: string
  }
}

const locations: Location[] = [
  {
    id: 1,
    city: "Kuantan, Pahang",
    address: "Zoo Teruntum, Jalan Padang Golf, 25050 Kuantan, Pahang",
    phone: "+60 9-560 1112",
    email: "sales@zooteruntum.my",
    image: "/images/locations/kuantan.png",
    operatingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "9:00 AM - 7:00 PM",
      holidays: "8:00 AM - 8:00 PM"
    }
  },
  {
    id: 2,
    city: "Kuala Terengganu, Terengganu",
    address: "Kampung Laut Chendering, 21080 Kuala Terengganu, Terengganu",
    phone: "+60 96174004",
    email: "sales@dinosaurencounter.com.my",
    image: "/images/locations/terengganu.jpg",
    operatingHours: {
      weekdays: "10:00 AM - 7:00 PM",
      weekends: "9:00 AM - 8:00 PM",
      holidays: "9:00 AM - 9:00 PM"
    }
  },
  {
    id: 3,
    city: "Batu Gajah, Perak",
    address: "Persiaran Silverlakes, Kampung Belangkor, 31000 Batu Gajah, Perak",
    phone: "-",
    email: "sales@dinosaurencounterworld.com",
    image: "/images/locations/perak.jpg",
    operatingHours: {
      weekdays: "10:00 AM - 6:00 PM",
      weekends: "9:00 AM - 7:00 PM",
      holidays: "9:00 AM - 8:00 PM"
    }
  }
]

const features = [
  { 
    title: "Life-Size Dinosaurs",
    description: "Stand face-to-face with incredibly detailed, animatronic dinosaurs that bring the era to life.",
    icon: GiDinosaurRex,
    gradient: "from-amber-500/20 to-amber-500/5"
  },
  { 
    title: "Interactive Exhibits",
    description: "Immerse yourself in prehistoric worlds through cutting-edge VR experiences.",
    icon: GiVirtualMarker,
    gradient: "from-amber-500/15 to-amber-500/5"
  },
  { 
    title: "Educational Programs",
    description: "Join our expert paleontologists for fascinating workshops and educational sessions.",
    icon: GiTeacher,
    gradient: "from-amber-500/20 to-amber-500/5"
  },
  { 
    title: "Themed Attractions",
    description: "Journey through meticulously crafted prehistoric environments.",
    icon: GiJungle,
    gradient: "from-amber-500/15 to-amber-500/5"
  }
]

export default function About() {
  return (
    <main className="relative">
      {/* Hero Section - Simplified */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dinopedia/1.png"
            alt="Dinosaur"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:container sm:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl space-y-6 sm:space-y-8"
          >
            <SectionSubtitle text="Welcome to the Past" className="mb-4 sm:mb-6" />
            <h1 className="space-y-2 sm:space-y-4">
              <motion.span 
                className="block text-4xl sm:text-7xl md:text-8xl font-extralight text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Discover Our
              </motion.span>
              <motion.span 
                className="block text-4xl sm:text-6xl md:text-[7rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Story
              </motion.span>
            </h1>
            <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
              Step into a world where prehistoric giants roam and ancient mysteries unfold.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="w-full sm:w-auto"
                onClick={() => {
                  const nextSection = document.querySelector('#features')
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Start Your Journey
              </Button>
              <Button 
                className="w-full sm:w-auto bg-transparent border border-white/20 opacity-50 pointer-events-none"
                onClick={() => {}}
              >
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <ScrollIndicator text="Scroll to Explore" />
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section id="features" className="py-16 sm:py-32 relative">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6">Experience the Wonder</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl">
              Immerse yourself in a meticulously crafted prehistoric world where education meets entertainment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section - Simple Redesign */}
      <section className="py-16 sm:py-32 relative">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <SectionSubtitle text="Locations" className="mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6">Our Parks</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl">
              Visit us at any of our three signature locations across Malaysia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Location Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white">{location.city}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Address */}
                  <p className="text-xs sm:text-sm text-gray-400">{location.address}</p>

                  {/* Operating Hours */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-400">
                      <BsClock className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Opening Hours</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div>
                        <p className="text-gray-400">Weekdays</p>
                        <p className="text-white">{location.operatingHours.weekdays}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Weekends</p>
                        <p className="text-white">{location.operatingHours.weekends}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 sm:pt-4">
                    <Button 
                      href="/tickets"
                      className="w-full justify-center text-sm sm:text-base"
                    >
                      Plan Your Visit
                    </Button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-amber-500/90 text-black text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  Now Open
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready for an Adventure?"
        subtitle="Limited Time Offer"
        description="Book now and get 20% off on all premium experiences!"
        primaryButtonText="Book Now"
        primaryButtonHref="/tickets"
        image="/images/dinopedia/2.png"
        showArrow={true}
      />
    </main>
  )
}
