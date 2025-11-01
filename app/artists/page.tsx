"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const artists = [
  {
    id: 1,
    name: "Atlas Echoes",
    genre: "Amazigh & Synth",
    bio: "Modern interpretation of Amazigh folk traditions blended with contemporary synth sounds.",
    image: "/atlas-mountains-music.jpg",
  },
  {
    id: 2,
    name: "Casablanca Nights",
    genre: "Electro",
    bio: "Urban electronic duo creating vibrant soundscapes inspired by city nightlife.",
    image: "/casablanca-night-lights.jpg",
  },
  {
    id: 3,
    name: "Sahara Pulse",
    genre: "Gnawa Fusion",
    bio: "Gnawa bass meets synth groove in hypnotic electronic journeys.",
    image: "/sahara-desert-electronic.jpg",
  },
  {
    id: 4,
    name: "Medina Collective",
    genre: "Hip-Hop",
    bio: "Traditional Moroccan beats infused with modern hip-hop lyrics and production.",
    image: "/medina-marketplace-traditional.jpg",
  },
  {
    id: 5,
    name: "Taroudant Waves",
    genre: "Ambient",
    bio: "Ethereal ambient soundscapes inspired by Moroccan landscapes and culture.",
    image: "/waves-ocean-ambient.jpg",
  },
  {
    id: 6,
    name: "Fez Synesthesia",
    genre: "Experimental",
    bio: "Avant-garde electronic experimentation pushing boundaries of Moroccan music.",
    image: "/experimental-electronic-music.jpg",
  },
]

export default function ArtistsPage() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [selectedGenre, setSelectedGenre] = useState("All")

  const genres = ["All", "Amazigh & Synth", "Electro", "Gnawa Fusion", "Hip-Hop", "Ambient", "Experimental"]

  const translations = {
    en: {
      title: "Our Artists",
      subtitle: "Discover the talented musicians behind Sounds of Morocco",
    },
    fr: {
      title: "Nos Artistes",
      subtitle: "Découvrez les musiciens talentueux derrière Sounds of Morocco",
    },
  }

  const t = translations[language]
  const filteredArtists = selectedGenre === "All" ? artists : artists.filter((a) => a.genre === selectedGenre)

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#ff4219] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      {/* Genre Filter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 flex-wrap mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedGenre === genre
                  ? "bg-[#ff4219] text-white shadow-lg"
                  : "bg-white text-[#3333ff] border-2 border-[#3333ff] hover:bg-[#3333ff] hover:text-white"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist, index) => (
            <div
              key={artist.id}
              className="group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#ff4219] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {artist.genre}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{artist.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{artist.bio}</p>
                  <button className="w-full bg-[#3333ff] text-white font-bold py-2 rounded-lg hover:bg-[#ff4219] transition-colors transform hover:scale-105">
                    {language === "en" ? "Learn More" : "En Savoir Plus"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
