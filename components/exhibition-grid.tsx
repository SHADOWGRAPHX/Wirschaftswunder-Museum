"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Exhibition {
  id: string
  title: string
  description: string
  href: string
  icon: string
  color: string
  image: string
}

const exhibitions: Exhibition[] = [
  {
    id: "timeline",
    title: "Timeline",
    description: "Journey through the key events and milestones of Germany's economic recovery from 1945 to 1960s",
    href: "/timeline",
    icon: "📅",
    color: "from-blue-500/20 to-blue-600/20",
    image: "/1950s-german-cars-volkswagen-beetle.jpg",
  },
  {
    id: "leaders",
    title: "Visionary Leaders",
    description: "Meet Ludwig Erhard and Konrad Adenauer, the architects of the economic miracle",
    href: "/leaders",
    icon: "👥",
    color: "from-amber-500/20 to-amber-600/20",
    image: "/konrad-adenauer-german-chancellor-portrait.jpg",
  },
  {
    id: "policies",
    title: "Economic Policies",
    description: "Discover the innovative reforms and policies that transformed the German economy",
    href: "/policies",
    icon: "📊",
    color: "from-emerald-500/20 to-emerald-600/20",
    image: "/deutsche-mark-currency-1948.jpg",
  },
  {
    id: "context",
    title: "Historical Context",
    description: "Understand the devastation of post-war Germany and the path to recovery",
    href: "/context",
    icon: "🏛️",
    color: "from-purple-500/20 to-purple-600/20",
    image: "/post-war-germany-ruins-1945.jpg",
  },
  {
    id: "legacy",
    title: "Impact & Legacy",
    description: "Explore how the Wirtschaftswunder shaped modern Germany and influenced global economics",
    href: "/legacy",
    icon: "🌍",
    color: "from-rose-500/20 to-rose-600/20",
    image: "/modern-germany-economy-industry-2020s.jpg",
  },
]

export default function ExhibitionGrid() {
  const [visibleItems, setVisibleItems] = useState<string[]>([])

  useEffect(() => {
    exhibitions.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, exhibitions[index].id])
      }, index * 100)
    })
  }, [])

  return (
    <section id="exhibitions" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Explore the Museum</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover the fascinating story of Germany's transformation through interactive exhibitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((exhibition) => (
            <Link
              key={exhibition.id}
              href={exhibition.href}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card hover:border-accent transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                visibleItems.includes(exhibition.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url('${exhibition.image}')` }}
              />
              
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exhibition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">{exhibition.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {exhibition.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{exhibition.description}</p>
                </div>

                <div className="flex items-center gap-2 text-accent font-semibold mt-6 group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}