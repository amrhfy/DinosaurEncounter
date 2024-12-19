import Hero from "@/components/home/Hero";
import Dinopedia from "@/components/home/Dinopedia";
import Attractions from "@/components/home/Attractions";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/95" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-60 mix-blend-soft-light" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div id="dinopedia">
          <Dinopedia />
        </div>
        <Attractions />
      </div>
    </main>
  );
}
