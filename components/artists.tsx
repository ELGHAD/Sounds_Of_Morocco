"use client"

import { useState } from "react"
import { Music } from "lucide-react"

interface ArtistsProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    artists: "Artists",
    all: "All",
  },
  fr: {
    artists: "Artistes",
    all: "Tous",
  },
}

const artistsData = [
  {
    name: "Atlas Echoes",
    genre: "Amazigh & Synth",
    bio: "Modern interpretation of Amazigh folk",
  },
  {
    name: "Casablanca Nights",
    genre: "Electro",
    bio: "Urban electronic duo from Casa",
  },
  {
    name: "Sahara Pulse",
    genre: "Gnawa Fusion",
    bio: "Gnawa bass meets synth groove",
  },
  {
    name: "Medina Collective",
    genre: "Hip-Hop",
    bio: "Traditional beats, modern lyrics",
  },
]

export default function Artists({ language }: ArtistsProps) {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const t = translations[language]

  const genres = ["All", "Amazigh & Synth", "Electro", "Gnawa Fusion", "Hip-Hop"]

  return (
    <section id="artists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-12 text-center">{t.artists}</h2>

        {/* Genre Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedGenre === genre ? "bg-[#ff4219] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {genre === "All" ? t.all : genre}
            </button>
          ))}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistsData.map((artist) => (
            <div
              key={artist.name}
              className="bg-gradient-to-br from-[#f4debd] to-[#ffd7a0] rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#3333ff] mb-4">
                <Music className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#3333ff] mb-2">{artist.name}</h3>
              <p className="text-[#ff4219] font-semibold text-sm mb-3">{artist.genre}</p>
              <p className="text-gray-700 text-sm">{artist.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
