"use client"

import { useState } from "react"
import { Award, BookOpen, Briefcase } from "lucide-react"
import { leadersData } from "@/lib/leaders-data"

export default function LeaderProfiles() {
  const [selectedLeader, setSelectedLeader] = useState<string>("erhard")
  const leader = leadersData.find((l) => l.id === selectedLeader)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Visionary Leaders</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Meet the architects of Germany's economic miracle: Ludwig Erhard and Konrad Adenauer
          </p>
        </div>

        {/* Leader Selection Tabs */}
        <div className="flex gap-4 justify-center mb-12 animate-fade-in-up">
          {leadersData.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLeader(l.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedLeader === l.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Leader Profile */}
        {leader && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-8 sticky top-32">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-2 text-center">{leader.name}</h2>
                <p className="text-accent font-semibold text-center mb-1">{leader.role}</p>
                <p className="text-foreground/60 text-center text-sm mb-6">{leader.period}</p>

                {/* Quote */}
                <div className="bg-accent/10 border-l-4 border-accent rounded p-4 mb-6">
                  <p className="text-foreground/80 italic text-sm">"{leader.quotes[0]}"</p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Briefcase size={18} className="text-accent" />
                    <span className="text-foreground/70">Economic Reformer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award size={18} className="text-accent" />
                    <span className="text-foreground/70">Political Leader</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <BookOpen size={18} className="text-accent" />
                    <span className="text-foreground/70">Visionary Thinker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-primary mb-4">Biography</h3>
                <p className="text-foreground/80 leading-relaxed">{leader.bio}</p>
              </div>

              {/* Key Achievements */}
              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Achievements</h3>
                <ul className="space-y-3">
                  {leader.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legacy */}
              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 rounded-xl p-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-primary mb-4">Legacy</h3>
                <p className="text-foreground/80 leading-relaxed">{leader.legacy}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-foreground/60 mb-6">Discover the economic policies that drove Germany's transformation</p>
          <a
            href="/policies"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Economic Policies
          </a>
        </div>
      </div>
    </section>
  )
}