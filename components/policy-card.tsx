"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Policy {
  id: string
  name: string
  year: number
  description: string
  impact: string[]
  details: string
}

interface PolicyCardProps {
  policy: Policy
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl group">
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="inline-block mb-3 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-semibold text-accent">{policy.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
              {policy.name}
            </h3>
          </div>
        </div>

        <p className="text-foreground/70 mb-6">{policy.description}</p>

        {/* Impact List */}
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-3">Key Impacts</h4>
          <div className="space-y-2">
            {policy.impact.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground/60">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
        >
          <span className="font-semibold text-primary text-sm">Learn More</span>
          <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {/* Details */}
        {isExpanded && (
          <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-accent/20 animate-fade-in-up">
            <p className="text-foreground/70 leading-relaxed">{policy.details}</p>
          </div>
        )}
      </div>
    </div>
  )
}
