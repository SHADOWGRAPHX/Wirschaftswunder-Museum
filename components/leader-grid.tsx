"use client"

import { leadersData } from "@/lib/leaders-data"
import LeaderCard from "@/components/leader-card"

export default function LeaderGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Key Figures</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            The visionary leaders who shaped Germany's economic transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadersData.map((leader) => (
            <div key={leader.id}>
              <LeaderCard leader={leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}