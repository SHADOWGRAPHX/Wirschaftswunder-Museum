export interface TimelineEvent {
  year: string
  title: string
  description: string
  details: string
  icon: string
  image: string
}

export const timelineEvents: TimelineEvent[] = [
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