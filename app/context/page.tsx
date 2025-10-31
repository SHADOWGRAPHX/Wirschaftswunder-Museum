"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HistoricalContext from "@/components/historical-context"

export default function ContextPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <HistoricalContext />
      <Footer />
    </main>
  )
}
