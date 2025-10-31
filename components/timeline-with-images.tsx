"use client"

import { timelineEvents } from "@/lib/timeline-data"

export default function TimelineWithImages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Historical Timeline</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Key events and milestones in Germany's remarkable economic transformation
          </p>
        </div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative h-64 rounded-xl overflow-hidden border border-border shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="inline-block mb-4 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-sm font-semibold text-accent">{event.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
                  <p className="text-lg text-foreground/70 mb-4">{event.description}</p>
                  <p className="text-foreground/80">{event.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}