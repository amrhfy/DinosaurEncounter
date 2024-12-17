'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/common/Button'
  import CTASection from '@/components/common/CTASection'
import ScrollIndicator from '@/components/common/ScrollIndicator'
import SectionSubtitle from '@/components/common/SectionSubtitle'

interface Attraction {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  features: string[]
  details?: {
    duration: string
    location: string
    capacity: string
    ageRestriction: string
  }
  schedule?: {
    weekdays: string
    weekends: string
    holidays: string
  }
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Dino Show",
    description: "Experience our breathtaking live shows featuring life-sized dinosaurs in action.",
    longDescription: "Immerse yourself in our spectacular live performances where prehistoric giants come to life through masterful puppetry and cutting-edge animatronics. Our skilled performers and state-of-the-art effects create an unforgettable experience that brings the Mesozoic era right before your eyes.",
    image: "/images/attractions/show.png",
    features: ["Live Performances", "Special Effects", "Interactive Elements", "Professional Performers", "Educational Commentary", "Photo Opportunities"],
    details: {
      duration: "45 minutes",
      location: "Prehistoric Amphitheater",
      capacity: "300 people",
      ageRestriction: "Suitable for all ages"
    },
    schedule: {
      weekdays: "11:00 AM, 2:00 PM, 4:00 PM",
      weekends: "10:00 AM, 12:00 PM, 2:00 PM, 4:00 PM, 6:00 PM",
      holidays: "Every 2 hours from 10:00 AM to 6:00 PM"
    }
  },
  {
    id: 2,
    title: "Virtual Reality",
    description: "Step into the Jurassic world with our cutting-edge VR experiences.",
    longDescription: "Transport yourself millions of years back in time with our state-of-the-art virtual reality experience. Interact with dinosaurs in their natural habitat, witness prehistoric landscapes, and participate in thrilling scenarios that blend education with entertainment.",
    image: "/images/attractions/vr.png",
    features: ["Immersive 3D World", "Interactive Gameplay", "Multiple Scenarios", "Latest VR Technology", "Guided Experience", "Educational Content"],
    details: {
      duration: "30 minutes",
      location: "Innovation Center",
      capacity: "20 people per session",
      ageRestriction: "8 years and above"
    },
    schedule: {
      weekdays: "10:00 AM - 5:00 PM (Sessions every 30 minutes)",
      weekends: "9:00 AM - 6:00 PM (Sessions every 30 minutes)",
      holidays: "9:00 AM - 7:00 PM (Sessions every 30 minutes)"
    }
  },
  {
    id: 3,
    title: "Souvenir Shop",
    description: "Take home a piece of prehistory from our extensive collection.",
    longDescription: "Browse through our carefully curated collection of dinosaur merchandise, from authentic fossil replicas to educational toys and exclusive branded items. Our shop offers something special for every dinosaur enthusiast, making your visit memorable long after you leave.",
    image: "/images/attractions/shop.png",
    features: ["Exclusive Merchandise", "Fossil Replicas", "Custom Gifts", "Educational Books", "Limited Editions", "Personalized Items"],
    details: {
      duration: "Open Access",
      location: "Main Plaza",
      capacity: "Unlimited",
      ageRestriction: "All ages welcome"
    },
    schedule: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "9:00 AM - 7:00 PM",
      holidays: "9:00 AM - 8:00 PM"
    }
  }
]

export default function Adventure() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.png"
            alt="Adventure Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:container sm:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl space-y-6 sm:space-y-8"
          >
            <SectionSubtitle text="Begin Your Journey" className="mb-4 sm:mb-6" />
            <h1 className="space-y-2 sm:space-y-4">
              <motion.span 
                className="block text-4xl sm:text-7xl md:text-8xl font-extralight text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Begin Your
              </motion.span>
              <motion.span 
                className="block text-4xl sm:text-6xl md:text-[7rem] font-thin text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-500/50 to-amber-500/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Journey
              </motion.span>
            </h1>
            <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
              Step into a world where prehistoric wonders come alive. Experience thrilling shows, 
              immersive exhibits, and unforgettable encounters with the giants of the past.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="w-full sm:w-auto">Start Your Journey</Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <ScrollIndicator text="Scroll to Explore" />
        </div>
      </section>

      {/* Attractions Section */}
      <section className="relative py-16 md:py-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Attractions Grid */}
          <div className="space-y-16 md:space-y-24">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                  <div className="absolute inset-0 rounded-xl overflow-hidden group">
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
                    {attraction.title}
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    {attraction.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {attraction.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:border-amber-500/20 transition-colors"
                      >
                        <span className="text-white/70 text-xs block mb-1">Feature</span>
                        <span className="text-white text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Details Section */}
                  {attraction.details && (
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-white/50 block mb-1">Duration</span>
                          <span className="text-white">{attraction.details.duration}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block mb-1">Location</span>
                          <span className="text-white">{attraction.details.location}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block mb-1">Capacity</span>
                          <span className="text-white">{attraction.details.capacity}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block mb-1">Age</span>
                          <span className="text-white">{attraction.details.ageRestriction}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Schedule Section */}
                  {attraction.schedule && (
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h3 className="text-white text-sm font-medium">Show Times</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="text-white/50 block mb-1">Weekdays</span>
                          <span className="text-white">{attraction.schedule.weekdays}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block mb-1">Weekends</span>
                          <span className="text-white">{attraction.schedule.weekends}</span>
                        </div>
                        <div>
                          <span className="text-white/50 block mb-1">Holidays</span>
                          <span className="text-white">{attraction.schedule.holidays}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready for Adventure?"
        subtitle="Book Your Visit"
        description="Secure your tickets now and embark on an unforgettable prehistoric journey."
        primaryButtonText="Book Now"
        primaryButtonHref="/tickets"
        image="/images/dinopedia/2.png"
        showArrow={true}
      />
    </main>
  )
} 
