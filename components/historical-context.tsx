"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ContextSection {
  id: string
  title: string
  icon: string
  content: string
  details: string[]
}

const contextSections: ContextSection[] = [
  {
    id: "devastation",
    title: "The Devastation of War",
    icon: "💔",
    content:
      "By 1945, Germany lay in complete ruins. World War II had destroyed much of the country's infrastructure, industrial capacity, and housing. Millions were displaced, and the economy was in total collapse.",
    details: [
      "70% of industrial capacity destroyed or severely damaged",
      "Entire cities reduced to rubble by bombing campaigns",
      "Over 7 million displaced persons and refugees",
      "Currency worthless due to hyperinflation",
      "Food shortages and widespread poverty",
      "Psychological trauma and national humiliation",
    ],
  },
  {
    id: "occupation",
    title: "Allied Occupation & Division",
    icon: "🛡️",
    content:
      "Germany was divided into four occupation zones controlled by the United States, Soviet Union, Britain, and France. This division would eventually lead to the creation of two separate German states.",
    details: [
      "Four occupation zones with different policies",
      "Soviet zone became East Germany (GDR)",
      "Western zones merged to form West Germany (FRG)",
      "Berlin divided into four sectors",
      "Reparations and war crimes trials",
      "Denazification and re-education programs",
    ],
  },
  {
    id: "marshall-plan",
    title: "Marshall Plan & Foreign Aid",
    icon: "🤝",
    content:
      "The United States recognized that a prosperous Europe was essential for global stability and democracy. The Marshall Plan provided crucial economic aid to Western Europe, including West Germany.",
    details: [
      "Over $13 billion in aid to Western Europe (1948-1952)",
      "West Germany received approximately $1.4 billion",
      "Aid used for reconstruction and capital investment",
      "Helped restore confidence in the economy",
      "Enabled purchase of raw materials and equipment",
      "Supported integration into Western economic system",
    ],
  },
  {
    id: "cold-war",
    title: "Cold War Context",
    icon: "❄️",
    content:
      "The emerging Cold War between the United States and Soviet Union shaped Germany's recovery. The West was determined to make West Germany a showcase of capitalist success to contrast with Soviet communism.",
    details: [
      "West Germany became frontline of Cold War",
      "Western commitment to German recovery strengthened",
      "Competition with East Germany drove reforms",
      "NATO membership integrated West Germany into Western alliance",
      "Security concerns justified investment in recovery",
      "Economic success became political weapon",
    ],
  },
  {
    id: "cultural-shift",
    title: "Cultural & Social Transformation",
    icon: "🌱",
    content:
      "Beyond economics, Germany underwent a profound cultural and social transformation. The country rejected its Nazi past and embraced democratic values, European integration, and a new national identity.",
    details: [
      "Rejection of Nazi ideology and militarism",
      "Embrace of democratic institutions and values",
      "Integration into Western European community",
      "Reconciliation with former enemies",
      "Focus on economic rather than military power",
      "Development of social market economy philosophy",
    ],
  },
  {
    id: "recovery-path",
    title: "The Path to Recovery",
    icon: "🚀",
    content:
      "Recovery was not automatic or inevitable. It required bold leadership, innovative policies, international support, and the resilience of the German people. The combination of these factors created the conditions for the Wirtschaftswunder.",
    details: [
      "Leadership committed to democratic reform",
      "Willingness to implement radical economic policies",
      "International support and integration",
      "Work ethic and entrepreneurial spirit of Germans",
      "Investment in education and vocational training",
      "Focus on quality and innovation in manufacturing",
    ],
  },
]

export default function HistoricalContext() {
  const [expandedSection, setExpandedSection] = useState<string | null>("devastation")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Historical Context</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Understanding the devastation of post-war Germany and the remarkable path to recovery
          </p>
        </div>

        {/* Context Sections */}
        <div className="space-y-4">
          {contextSections.map((section, index) => (
            <div key={section.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full text-left group"
              >
                <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <span className="text-4xl flex-shrink-0">{section.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">{section.content}</p>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                        expandedSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Expanded Details */}
                  {expandedSection === section.id && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                      <ul className="space-y-3">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            </div>
                            <span className="text-foreground/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 rounded-lg p-6">
            <div className="text-4xl font-bold text-accent mb-2">1945</div>
            <p className="text-foreground/80 font-semibold mb-2">Year Zero</p>
            <p className="text-sm text-foreground/70">Germany's complete defeat and the beginning of reconstruction</p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 rounded-lg p-6">
            <div className="text-4xl font-bold text-secondary mb-2">$1.4B</div>
            <p className="text-foreground/80 font-semibold mb-2">Marshall Plan Aid</p>
            <p className="text-sm text-foreground/70">American investment in West German recovery and reconstruction</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">1960s</div>
            <p className="text-foreground/80 font-semibold mb-2">Economic Power</p>
            <p className="text-sm text-foreground/70">
              Germany becomes Europe's leading economy and global trading power
            </p>
          </div>
        </div>

        {/* The Miracle Explained */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Was Recovery Possible?</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-accent mb-3">1. Political Will</h3>
              <p className="text-foreground/80">
                Leaders like Konrad Adenauer and Ludwig Erhard were committed to fundamental reform and willing to make
                bold decisions. They rejected the failed policies of the past and embraced new approaches.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-3">2. International Support</h3>
              <p className="text-foreground/80">
                The Marshall Plan and Western integration provided crucial financial and political support. The Cold War
                context made Western powers invested in Germany's success.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-3">3. Human Capital</h3>
              <p className="text-foreground/80">
                Despite the devastation, Germany retained its educated workforce, engineering expertise, and cultural
                traditions of craftsmanship and quality. These human resources were essential for recovery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-3">4. Innovative Policies</h3>
              <p className="text-foreground/80">
                The social market economy combined the best of capitalism and social welfare. This unique model created
                both efficiency and equity, attracting investment and maintaining social stability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-3">5. Global Demand</h3>
              <p className="text-foreground/80">
                Post-war reconstruction created enormous demand for German industrial products. German companies
                capitalized on this opportunity to rebuild their export markets and earn foreign exchange.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">Discover the lasting impact and legacy of the Wirtschaftswunder</p>
          <a
            href="/legacy"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Impact & Legacy
          </a>
        </div>
      </div>
    </section>
  )
}
