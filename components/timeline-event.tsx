"use client"

interface TimelineItem {
  year: number
  title: string
  description: string
  details: string[]
  image: string
}

interface TimelineEventProps {
  item: TimelineItem
  index: number
}

export default function TimelineEvent({ item, index }: TimelineEventProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex gap-8 items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content */}
      <div className="flex-1">
        <div className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors duration-300">
          <div className="inline-block mb-4 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-sm font-semibold text-accent">{item.year}</span>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
          <p className="text-lg text-foreground/70 mb-4">{item.description}</p>

          <ul className="space-y-2">
            {item.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/60">
                <span className="text-accent font-bold mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg" />
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="relative h-64 rounded-xl overflow-hidden border border-border hover:border-accent transition-colors duration-300">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}