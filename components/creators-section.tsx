"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const creators = [
  { name: "Aritra Mukhopadhyay", role: "Website Design and Development" },
  { name: "Devansh V. Singh", role: "Poster Making and Editorials" },
  { name: "Vishesh Kumar", role: "Content" },
  { name: "Aditya Shreshth", role: "Content and Editorials" },
  { name: "Shourya Shrivastava", role: "Images, Culture and Editing" },
]

export default function CreatorsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Project Creators</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Meet the talented team behind this digital museum
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {creators.map((creator, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-primary">{creator.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{creator.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}