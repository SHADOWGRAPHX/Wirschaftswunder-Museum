"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/1950s-german-prosperity-economic-boom.jpg')" }}
      />
      
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/50 to-accent/70" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-sm font-semibold text-accent">Digital Museum</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Wirtschaftswunder
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Germany's Economic Miracle: From Ruins to Prosperity
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Explore the remarkable transformation of post-WW2 Germany through innovative policies, visionary leadership,
            and the resilience of the German people
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#exhibitions"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Exhibitions
            </a>
            <a
              href="/timeline"
              className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              View Timeline
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <ChevronDown className="text-white" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}