export interface Leader {
  id: string
  name: string
  title: string
  role: string
  bio: string
  achievements: string[]
  image: string
  quotes: string[]
}

export const leadersData: Leader[] = [
  {
    id: "erhard",
    name: "Ludwig Erhard",
    title: "Architect of the Social Market Economy",
    role: "Minister of Economics & Chancellor",
    bio: "Ludwig Erhard was the architect of the 'social market economy' and the primary force behind Germany's economic miracle. As Minister of Economics under Konrad Adenauer, he implemented bold reforms that transformed the war-torn economy into Europe's powerhouse.",
    achievements: [
      "Designed and implemented the 1948 currency reform (Deutsche Mark)",
      "Created the social market economy model combining free markets with social welfare",
      "Eliminated price controls and reduced government intervention",
      "Achieved average annual growth rates exceeding 8% during the 1950s",
      "Restored full employment and raised living standards dramatically",
      "Served as Chancellor from 1963-1966, continuing economic policies",
    ],
    image: "/ludwig-erhard-german-economist-portrait.jpg",
    quotes: [
      "A social market economy is the only system that is both economically efficient and socially just.",
      "Prosperity is not a privilege but a duty.",
      "The free market is the best regulator."
    ]
  },
  {
    id: "adenauer",
    name: "Konrad Adenauer",
    title: "Founder of the Federal Republic",
    role: "Chancellor of West Germany",
    bio: "Konrad Adenauer was the founding Chancellor of West Germany and provided the political stability necessary for economic recovery. His leadership established democratic institutions and integrated West Germany into the Western alliance.",
    achievements: [
      "Founded the Federal Republic of Germany and established democratic governance",
      "Integrated West Germany into NATO and Western Europe",
      "Negotiated the Paris Treaties restoring German sovereignty in 1955",
      "Established the European Coal and Steel Community (ECSC) membership",
      "Created political stability that enabled Erhard's economic reforms",
      "Rebuilt Germany's international reputation and diplomatic standing",
    ],
    image: "/konrad-adenauer-german-chancellor-portrait.jpg",
    quotes: [
      "We must build a new Europe. Only through unity can we overcome the divisions of the past.",
      "The German question is the European question.",
      "Democracy is the worst form of government, except for all the others."
    ]
  },
]