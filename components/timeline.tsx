"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  details: string
  icon: string
  image: string
}

const events: TimelineEvent[] = [
  {
    year: "1945",
    title: "End of World War II",
    description: "Germany surrenders, marking the beginning of reconstruction",
    details:
      "Germany lay in ruins with its economy completely destroyed. The country was divided into occupation zones, and the Marshall Plan would soon provide crucial aid for European recovery.",
    icon: "🏚️",
    image: "/post-war-germany-ruins-destruction-1945.jpg",
  },
  {
    year: "1948",
    title: "Currency Reform",
    description: "Introduction of the Deutsche Mark replaces the Reichsmark",
    details:
      "Ludwig Erhard's currency reform eliminated hyperinflation and restored confidence in the German economy. This was a pivotal moment that signaled the beginning of economic recovery.",
    icon: "💱",
    image: "/deutsche-mark-currency-1948.jpg",
  },
  {
    year: "1949",
    title: "Federal Republic Founded",
    description: "West Germany established as an independent state",
    details:
      "The Federal Republic of Germany (Bundesrepublik Deutschland) was founded with Konrad Adenauer as Chancellor. This political stability provided the foundation for economic growth.",
    icon: "🏛️",
    image: "/konrad-adenauer-1949.jpg",
  },
  {
    year: "1950",
    title: "Social Market Economy",
    description: "Erhard implements the social market economy model",
    details:
      "The social market economy combined free market principles with social welfare policies. This unique approach balanced economic efficiency with social responsibility.",
    icon: "📈",
    image: "/1950s-german-prosperity-economic-boom.jpg",
  },
  {
    year: "1951",
    title: "ECSC Established",
    description: "Germany joins the European Coal and Steel Community",
    details:
      "West Germany became a founding member of the ECSC, integrating into Western Europe and gaining international legitimacy while securing access to vital resources.",
    icon: "🤝",
    image: "/marshall-plan-aid-germany-reconstruction-1948.jpg",
  },
  {
    year: "1955",
    title: "NATO Membership",
    description: "West Germany joins NATO and gains sovereignty",
    details:
      "Full sovereignty was restored as West Germany joined NATO. This integration into the Western alliance accelerated economic and political development.",
    icon: "🛡️",
    image: "/1960s-germany-modern-city-development.jpg",
  },
  {
    year: "1957",
    title: "Economic Boom Peak",
    description: "Germany experiences unprecedented economic growth",
    details:
      "By the mid-1950s, Germany's economy was growing at over 8% annually. Industrial production surpassed pre-war levels, and unemployment fell dramatically.",
    icon: "🚀",
    image: "/german-factory-industrial-production-1950s.jpg",
  },
  {
    year: "1960s",
    title: "Global Economic Power",
    description: "Germany becomes Europe's economic leader",
    details:
      "The Wirtschaftswunder had transformed Germany into one of the world's leading economies. German exports dominated global markets, and the country became a model for post-war recovery.",
    icon: "🌍",
    image: "/modern-germany-economy-industry-2020s.jpg",
  },
]

export default function TimelineComponent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Timeline</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Key events and milestones in Germany's remarkable economic transformation from 1945 to the 1960s
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up transition-all duration-500 ${
                  expandedIndex === index ? "scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg" />
                </div>

                {/* Content - alternating left and right */}
                <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 px-8">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full text-left group"
                    >
                      <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-accent mb-1">{event.year}</div>
                            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-foreground/70">{event.description}</p>
                          </div>
                        </div>

                        {/* Expanded details */}
                        {expandedIndex === index && (
                          <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                            <p className="text-foreground/80 leading-relaxed">{event.details}</p>
                          </div>
                        )}

                        {/* Expand indicator */}
                        <div className="flex justify-end mt-3">
                          <ChevronDown
                            size={20}
                            className={`text-accent transition-transform duration-300 ${
                              expandedIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-foreground/60 mb-6">Explore more about the leaders and policies that shaped this era</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/leaders"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Meet the Leaders
            </a>
            <a
              href="/policies"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              Learn About Policies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
