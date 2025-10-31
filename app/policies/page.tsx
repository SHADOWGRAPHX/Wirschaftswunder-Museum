"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EconomicPolicies from "@/components/economic-policies"

export default function PoliciesPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <EconomicPolicies />
      <Footer />
    </main>
  )
}
