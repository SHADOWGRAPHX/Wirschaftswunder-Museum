"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp, Zap, Users, Globe, BarChart3, Shield } from "lucide-react"

interface Policy {
  id: string
  title: string
  icon: React.ReactNode
  shortDescription: string
  fullDescription: string
  keyPoints: string[]
  impact: string
  year: string
}

const policies: Policy[] = [
  {
    id: "currency-reform",
    title: "Currency Reform (1948)",
    icon: <TrendingUp size={32} />,
    shortDescription: "Introduction of the Deutsche Mark to replace the worthless Reichsmark",
    fullDescription:
      "The 1948 currency reform was a watershed moment in German economic recovery. Ludwig Erhard introduced the Deutsche Mark, which immediately restored confidence in the currency and eliminated the rampant black market. This bold move signaled the beginning of a new economic era and was essential for the success of all subsequent reforms.",
    keyPoints: [
      "Replaced hyperinflated Reichsmark with stable Deutsche Mark",
      "Eliminated black market trading overnight",
      "Restored consumer and investor confidence",
      "Enabled price controls to be lifted",
      "Provided foundation for all other reforms",
    ],
    impact: "Immediate stabilization of the economy and restoration of normal commerce",
    year: "1948",
  },
  {
    id: "social-market-economy",
    title: "Social Market Economy",
    icon: <Users size={32} />,
    shortDescription: "Unique model combining free markets with comprehensive social welfare",
    fullDescription:
      "The social market economy (Soziale Marktwirtschaft) was Erhard's revolutionary concept that balanced free market principles with strong social safety nets. This model rejected both pure capitalism and socialism, instead creating a system where economic efficiency and social justice could coexist. It became the foundation of the German economic system.",
    keyPoints: [
      "Free market competition with government oversight",
      "Strong labor protections and worker rights",
      "Comprehensive social insurance system",
      "Progressive taxation for wealth redistribution",
      "Environmental and consumer protections",
    ],
    impact: "Created sustainable economic growth with broad-based prosperity and social stability",
    year: "1949",
  },
  {
    id: "price-decontrol",
    title: "Price Decontrol & Market Liberalization",
    icon: <Zap size={32} />,
    shortDescription: "Removal of wartime price controls to unleash market forces",
    fullDescription:
      "Following the currency reform, Erhard systematically removed price controls that had been in place since the Nazi era. This controversial move initially caused prices to rise, but it quickly stimulated production, eliminated shortages, and created incentives for innovation and efficiency. The market responded dramatically with increased supply and economic activity.",
    keyPoints: [
      "Eliminated rationing and price controls",
      "Allowed market prices to reflect supply and demand",
      "Stimulated production and entrepreneurship",
      "Reduced black market activity",
      "Created competitive environment for businesses",
    ],
    impact: "Rapid increase in production, employment, and consumer goods availability",
    year: "1948-1950",
  },
  {
    id: "labor-reforms",
    title: "Labor Market & Worker Protections",
    icon: <Shield size={32} />,
    shortDescription: "Strong labor laws and worker rights within a competitive economy",
    fullDescription:
      "Germany implemented comprehensive labor protections including co-determination rights (Mitbestimmung), where workers had representation on company boards. Strong unions negotiated wages and working conditions, while the government enforced strict labor standards. This created a stable labor market with high productivity and worker satisfaction.",
    keyPoints: [
      "Worker representation on corporate boards (co-determination)",
      "Strong collective bargaining agreements",
      "Comprehensive unemployment insurance",
      "Workplace safety regulations",
      "Apprenticeship and vocational training programs",
    ],
    impact: "High employment, worker productivity, and social stability",
    year: "1949-1960s",
  },
  {
    id: "investment-incentives",
    title: "Investment & Capital Formation",
    icon: <BarChart3 size={32} />,
    shortDescription: "Tax incentives and policies to encourage business investment and growth",
    fullDescription:
      "The government created favorable conditions for capital investment through tax incentives, depreciation allowances, and access to credit. The Marshall Plan provided crucial foreign aid, while domestic savings were channeled into productive investment. This created a virtuous cycle of investment, productivity growth, and rising incomes.",
    keyPoints: [
      "Accelerated depreciation for capital equipment",
      "Tax incentives for business investment",
      "Access to Marshall Plan aid and credits",
      "Development of capital markets",
      "Support for export-oriented industries",
    ],
    impact: "Rapid capital accumulation and modernization of industrial capacity",
    year: "1948-1960s",
  },
  {
    id: "export-promotion",
    title: "Export-Oriented Growth Strategy",
    icon: <Globe size={32} />,
    shortDescription: "Focus on high-quality exports to earn foreign exchange and drive growth",
    fullDescription:
      "Germany pursued an aggressive export strategy, leveraging its reputation for quality engineering and manufacturing. The government supported export industries through favorable policies, while German companies invested heavily in quality and innovation. This strategy transformed Germany into a global trading power and provided the foreign exchange needed for imports and debt repayment.",
    keyPoints: [
      "Focus on high-quality manufactured goods",
      "Investment in research and development",
      "Support for export industries",
      "Integration into international trade",
      "Building reputation for German engineering",
    ],
    impact: "Germany became a global economic power with strong trade surpluses",
    year: "1950s-1960s",
  },
]

export default function EconomicPolicies() {
  const [selectedPolicy, setSelectedPolicy] = useState<string>("currency-reform")
  const policy = policies.find((p) => p.id === selectedPolicy)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Economic Policies & Reforms</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            The innovative policies and reforms that transformed Germany's economy and created the Wirtschaftswunder
          </p>
        </div>

        {/* Policy Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {policies.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPolicy(p.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 text-left group ${
                selectedPolicy === p.id ? "border-accent bg-accent/10" : "border-border bg-card hover:border-accent/50"
              }`}
            >
              <div
                className={`mb-3 transition-colors ${selectedPolicy === p.id ? "text-accent" : "text-foreground/60 group-hover:text-accent"}`}
              >
                {p.icon}
              </div>
              <h3
                className={`font-bold text-lg mb-1 transition-colors ${selectedPolicy === p.id ? "text-accent" : "text-primary"}`}
              >
                {p.title}
              </h3>
              <p className="text-sm text-foreground/60">{p.year}</p>
            </button>
          ))}
        </div>

        {/* Policy Details */}
        {policy && (
          <div className="bg-card border border-border rounded-xl p-8 lg:p-12 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Icon and Quick Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-accent/10 text-accent mb-6">
                  {policy.icon}
                </div>
                <h2 className="text-3xl font-bold text-primary mb-2">{policy.title}</h2>
                <p className="text-accent font-semibold mb-6">{policy.year}</p>

                {/* Impact Box */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Impact</h4>
                  <p className="text-foreground/80 text-sm">{policy.impact}</p>
                </div>
              </div>

              {/* Right Column - Full Description and Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Overview</h3>
                  <p className="text-foreground/80 leading-relaxed">{policy.fullDescription}</p>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Key Components</h3>
                  <ul className="space-y-3">
                    {policy.keyPoints.map((point, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Policy Interconnections */}
        <div className="mt-16 bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 rounded-xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-primary mb-4">How These Policies Worked Together</h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The success of the Wirtschaftswunder was not due to any single policy, but rather the synergistic
            combination of all these reforms. The currency reform created stability, price decontrol unleashed market
            forces, labor protections ensured social stability, investment incentives drove capital formation, and
            export promotion created global demand for German products. Together, these policies created a virtuous
            cycle of growth, employment, and rising living standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <p className="font-semibold text-primary mb-2">Stability</p>
              <p className="text-sm text-foreground/70">
                Currency reform and price controls created economic predictability
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <p className="font-semibold text-primary mb-2">Growth</p>
              <p className="text-sm text-foreground/70">
                Investment incentives and market liberalization drove rapid expansion
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <p className="font-semibold text-primary mb-2">Prosperity</p>
              <p className="text-sm text-foreground/70">
                Worker protections and export success created broad-based wealth
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">Understand the historical context that made these reforms possible</p>
          <a
            href="/context"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Historical Context
          </a>
        </div>
      </div>
    </section>
  )
}
