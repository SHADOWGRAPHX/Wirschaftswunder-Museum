"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import TimelineComponent from "@/components/timeline"
import Footer from "@/components/footer"
import { timelineEvents } from "@/lib/timeline-data"

export default function TimelinePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <div className="pt-16">
        <TimelineComponent />
      </div>
      <Footer />
    </main>
  )
}