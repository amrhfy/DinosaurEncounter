import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import ScrollGradient from "@/components/common/ScrollGradient";
import { Poppins } from "next/font/google";
import Footer from "@/components/common/Footer"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'Dinosaur Encounter Park Malaysia | Virtual Reality Dinosaur Experience',
  description: 'Experience Malaysia\'s first Virtual Reality Dinosaur Park. Immerse yourself in prehistoric adventures with cutting-edge VR technology at Dinosaur Encounter Park Malaysia. Perfect for family outings and educational trips.',
  icons: {
    icon: '/logos/favicon.ico',
    shortcut: '/logos/favicon.ico',
    apple: '/logos/favicon.ico',
  },
  keywords: [
    'Dinosaur Park Malaysia',
    'Dinosaur Encounter Park',
    'VR Dinosaur Experience',
    'Virtual Reality Park Malaysia',
    'Dinosaur Theme Park',
    'Educational Dinosaur Park',
    'Family Activities Malaysia',
    'Interactive Dinosaur Experience',
    'Prehistoric VR Experience',
    'Kuala Lumpur Theme Park'
  ],
  openGraph: {
    title: 'Dinosaur Encounter Park Malaysia | VR Dinosaur Experience',
    description: 'Step into prehistoric times at Malaysia\'s premier Virtual Reality Dinosaur Park. Experience life-sized dinosaurs in VR at Dinosaur Encounter Park.',
    images: ['/og-image.jpg'],
    locale: 'en_MY',
    type: 'website',
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Dinosaur Encounter Park Malaysia",
  "description": "Malaysia's first Virtual Reality Dinosaur Park offering immersive prehistoric experiences.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kuala Lumpur",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <div className="fixed inset-0 z-0">
          {/* Main Background */}
          <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center" />
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-soft-light" />
          
          {/* Darker Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />
        </div>
        <ScrollGradient />
        <Navbar />
        <div className="flex-grow relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
