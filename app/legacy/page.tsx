"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImpactLegacy from "@/components/impact-legacy"

export default function LegacyPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <ImpactLegacy />
      <Footer />
    </main>
  )
}
