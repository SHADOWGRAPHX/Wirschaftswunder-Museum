"use client"

import type React from "react"

import { useState } from "react"
import { Globe, TrendingUp, Users, Lightbulb, Award, BookOpen } from "lucide-react"

interface LegacyArea {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  impacts: string[]
}

const legacyAreas: LegacyArea[] = [
  {
    id: "germany",
    title: "Modern Germany",
    icon: <Globe size={32} />,
    description: "The Wirtschaftswunder fundamentally shaped modern Germany's identity and prosperity",
    impacts: [
      "Established Germany as Europe's economic leader and largest economy",
      "Created the foundation for German reunification in 1990",
      "Developed the social market economy model still used today",
      "Built Germany's reputation for quality engineering and manufacturing",
      "Enabled Germany to become a founding member of the European Union",
      "Transformed Germany from defeated nation to respected global power",
    ],
  },
  {
    id: "europe",
    title: "European Integration",
    icon: <Users size={32} />,
    description: "Germany's recovery accelerated European integration and cooperation",
    impacts: [
      "Membership in ECSC (1951) led to European Coal and Steel Community",
      "Foundation for what became the European Union",
      "Demonstrated benefits of economic cooperation and peace",
      "Encouraged other European nations to pursue integration",
      "Created framework for resolving historical conflicts through trade",
      "Established Germany as anchor of Western European stability",
    ],
  },
  {
    id: "global",
    title: "Global Economics",
    icon: <TrendingUp size={32} />,
    description: "The Wirtschaftswunder influenced economic policy and development worldwide",
    impacts: [
      "Demonstrated effectiveness of social market economy model",
      "Influenced post-war recovery strategies in other nations",
      "Showed importance of currency stability for economic growth",
      "Proved that free markets with social safety nets could coexist",
      "Inspired development models in Asia and other regions",
      "Challenged pure capitalism and pure socialism as alternatives",
    ],
  },
  {
    id: "labor",
    title: "Labor & Social Policy",
    icon: <Award size={32} />,
    description: "Germany's approach to worker rights and social welfare became a model",
    impacts: [
      "Co-determination (Mitbestimmung) model influenced labor relations globally",
      "Demonstrated that strong unions and worker protections enhance productivity",
      "Comprehensive social insurance system became template for other nations",
      "Showed that worker prosperity and business success are compatible",
      "Influenced labor standards and worker protections worldwide",
      "Proved that social stability supports economic growth",
    ],
  },
  {
    id: "innovation",
    title: "Innovation & Quality",
    icon: <Lightbulb size={32} />,
    description: "German focus on quality and innovation created lasting competitive advantage",
    impacts: [
      "Established 'Made in Germany' as symbol of quality and reliability",
      "Invested heavily in research and development",
      "Created culture of continuous improvement and innovation",
      "Built strong vocational training and apprenticeship systems",
      "Developed world-class engineering and manufacturing capabilities",
      "Maintained competitive advantage through quality rather than cost",
    ],
  },
  {
    id: "lessons",
    title: "Lessons for Today",
    icon: <BookOpen size={32} />,
    description: "The Wirtschaftswunder offers valuable lessons for contemporary economies",
    impacts: [
      "Importance of political stability and credible leadership",
      "Currency stability is foundation for economic growth",
      "Balance between market efficiency and social welfare is achievable",
      "Investment in human capital and education drives long-term growth",
      "International cooperation and integration create mutual benefits",
      "Sustainable growth requires both economic and social progress",
    ],
  },
]

export default function ImpactLegacy() {
  const [selectedArea, setSelectedArea] = useState<string>("germany")
  const area = legacyAreas.find((a) => a.id === selectedArea)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Impact & Legacy</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            How the Wirtschaftswunder shaped modern Germany, Europe, and global economics
          </p>
        </div>

        {/* Legacy Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {legacyAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedArea(area.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 text-left group ${
                selectedArea === area.id ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/50"
              }`}
            >
              <div
                className={`mb-3 transition-colors ${selectedArea === area.id ? "text-accent" : "text-foreground/60 group-hover:text-accent"}`}
              >
                {area.icon}
              </div>
              <h3
                className={`font-bold text-lg transition-colors ${selectedArea === area.id ? "text-accent" : "text-primary"}`}
              >
                {area.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        {area && (
          <div className="bg-card border border-border rounded-xl p-8 lg:p-12 animate-fade-in-up mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                {area.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">{area.title}</h2>
                <p className="text-lg text-foreground/80">{area.description}</p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-bold text-primary mb-6">Key Impacts</h3>
              <ul className="space-y-4">
                {area.impacts.map((impact, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Historical Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">1945: Year Zero</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-destructive font-bold">•</span>
                <span className="text-foreground/80">Economy completely destroyed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">•</span>
                <span className="text-foreground/80">Currency worthless</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">•</span>
                <span className="text-foreground/80">Widespread poverty and hunger</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">•</span>
                <span className="text-foreground/80">International isolation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">•</span>
                <span className="text-foreground/80">National humiliation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">1960s: Economic Powerhouse</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/80">Europe's largest economy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/80">Stable, respected currency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/80">Full employment and prosperity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/80">Global trading power</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/80">Respected democratic nation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">8%+</div>
            <p className="text-foreground/80 font-semibold mb-1">Annual Growth</p>
            <p className="text-sm text-foreground/60">Average during 1950s boom</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">15 Years</div>
            <p className="text-foreground/80 font-semibold mb-1">Transformation</p>
            <p className="text-sm text-foreground/60">From ruins to prosperity</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">2x</div>
            <p className="text-foreground/80 font-semibold mb-1">Industrial Output</p>
            <p className="text-sm text-foreground/60">Exceeded pre-war levels</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">Global</div>
            <p className="text-foreground/80 font-semibold mb-1">Influence</p>
            <p className="text-sm text-foreground/60">Model for post-war recovery</p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-primary/20 rounded-xl p-8 lg:p-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-6">The Enduring Legacy</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The Wirtschaftswunder represents one of history's most remarkable economic transformations. In just fifteen
            years, Germany went from complete devastation to becoming Europe's economic powerhouse. This achievement was
            not the result of luck or natural resources, but rather the combination of visionary leadership, innovative
            policies, international cooperation, and the resilience of the German people.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The lessons of the Wirtschaftswunder remain relevant today. It demonstrates that economic recovery is
            possible even after catastrophic setbacks, that political stability and credible leadership are essential
            for growth, and that balancing market efficiency with social welfare creates sustainable prosperity. The
            social market economy model continues to influence policy makers worldwide.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Most importantly, the Wirtschaftswunder shows that nations can transform themselves through commitment to
            democratic values, international cooperation, and a focus on long-term sustainable development. Germany's
            journey from 1945 to the 1960s offers hope and inspiration for any society seeking to overcome adversity and
            build a prosperous future.
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">Explore the complete story of Germany's economic miracle</p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </a>
        </div>
      </div>
    </section>
  )
}
