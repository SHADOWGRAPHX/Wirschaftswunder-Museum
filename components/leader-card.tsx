"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Leader } from "@/lib/leaders-data"

interface LeaderCardProps {
  leader: Leader
}

export default function LeaderCard({ leader }: LeaderCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-muted">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-1">{leader.name}</h2>
          <p className="text-lg text-white/90">{leader.title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="inline-block mb-4 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
          <span className="text-sm font-semibold text-accent">{leader.role}</span>
        </div>

        <p className="text-foreground/70 mb-6 leading-relaxed">{leader.bio}</p>

        {/* Quotes */}
        <div className="mb-6 space-y-3">
          {leader.quotes.map((quote, i) => (
            <blockquote key={i} className="border-l-4 border-accent pl-4 italic text-foreground/60">
              {quote}
            </blockquote>
          ))}
        </div>

        {/* Achievements Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors mb-4"
        >
          <span className="font-semibold text-primary">Key Achievements</span>
          <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {/* Achievements List */}
        {isExpanded && (
          <div className="space-y-2 animate-fade-in-up">
            {leader.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                <span className="text-accent font-bold mt-1 flex-shrink-0">✓</span>
                <span className="text-foreground/70">{achievement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}