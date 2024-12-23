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
  title: "Dinosaur Encounter",
  description: "@amrhfy",
  icons: {
    icon: "/logos/favicon.ico",
  },
};

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
