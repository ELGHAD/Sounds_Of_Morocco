"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

const partners = [
  {
    name: "Spotify",
    category: "Streaming",
    image: "/spotify-logo.png",
    description: "Our music is available on Spotify with millions of listeners worldwide.",
  },
  {
    name: "UNESCO",
    category: "Cultural",
    image: "/unesco-logo.png",
    description: "Supporting cultural heritage and music preservation initiatives.",
  },
  {
    name: "Morocco Tourism Board",
    category: "Tourism",
    image: "/morocco-tourism.jpg",
    description: "Showcasing Moroccan culture through electronic music innovation.",
  },
  {
    name: "Electric Dream Festival",
    category: "Events",
    image: "/festival-stage-lights.jpg",
    description: "Annual festival celebrating electronic music and cultural fusion.",
  },
  {
    name: "Al Omrane Studios",
    category: "Production",
    image: "/music-studio-recording.jpg",
    description: "Premier recording and production facilities in Casablanca.",
  },
  {
    name: "Maroc Records",
    category: "Label",
    image: "/record-label-vinyl.jpg",
    description: "Independent record label dedicated to Moroccan electronic music.",
  },
]

export default function Partners() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Streaming", "Cultural", "Tourism", "Events", "Production", "Label"]
  const filteredPartners =
    selectedCategory === "All" ? partners : partners.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#ff4219] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            {language === "en" ? "Our Partners" : "Nos Partenaires"}
          </h1>
          <p className="text-xl text-white/90">
            {language === "en"
              ? "Collaborating with industry leaders to amplify Moroccan sounds"
              : "Collaborer avec les leaders de l'industrie pour amplifier les sons marocains"}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-2 flex-wrap mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-[#3333ff] text-white shadow-lg"
                  : "bg-white text-[#3333ff] border-2 border-[#3333ff] hover:bg-[#3333ff] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.name}
              className="group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden h-40 bg-gradient-to-br from-[#3333ff] to-[#ff4219]">
                  <img
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-[#ff4219] mb-2 uppercase">{partner.category}</span>
                  <h3 className="text-2xl font-bold text-black mb-3">{partner.name}</h3>
                  <p className="text-gray-600 text-sm flex-1">{partner.description}</p>
                  <button className="mt-4 w-full bg-[#3333ff] text-white font-bold py-2 rounded-lg hover:bg-[#ff4219] transition-colors transform hover:scale-105">
                    {language === "en" ? "Learn More" : "En Savoir Plus"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner Section */}
        <div className="bg-[#3333ff] text-white rounded-lg p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            {language === "en" ? "Interested in Partnering?" : "Intéressé par un partenariat?"}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {language === "en"
              ? "We're always looking for collaborators who share our vision of celebrating Moroccan culture through music."
              : "Nous recherchons toujours des collaborateurs qui partagent notre vision de célébrer la culture marocaine par la musique."}
          </p>
          <Link
            href="/partnership"
            className="inline-block bg-[#ff4219] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#f4debd] hover:text-[#3333ff] transition-colors transform hover:scale-105"
          >
            {language === "en" ? "Get in Touch" : "Nous Contacter"}
          </Link>
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
