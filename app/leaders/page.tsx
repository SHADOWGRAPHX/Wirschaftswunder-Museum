"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LeaderProfiles from "@/components/leader-profiles"

export default function LeadersPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <LeaderProfiles />
      <Footer />
    </main>
  )
}
