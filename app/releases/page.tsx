"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const releases = [
  {
    id: 1,
    title: "Desert Echoes",
    artist: "Youssef Amine",
    date: "2024-11-15",
    type: "Album",
    image: "/desert-music-album-cover.jpg",
    description: "A mesmerizing blend of Moroccan oud melodies with hypnotic electronic beats.",
    platforms: ["Spotify", "Apple Music", "Bandcamp"],
  },
  {
    id: 2,
    title: "Marrakech Nights",
    artist: "Layla & The Soundscapes",
    date: "2024-11-08",
    type: "EP",
    image: "/night-city-music-release.jpg",
    description: "Three tracks capturing the essence of Marrakech's vibrant nightlife.",
    platforms: ["Spotify", "YouTube Music", "Deezer"],
  },
  {
    id: 3,
    title: "Atlantic Waves",
    artist: "Hassan Berber",
    date: "2024-10-30",
    type: "Single",
    image: "/ocean-waves-electronic.jpg",
    description: "Inspired by the rhythmic patterns of Atlantic Ocean waves.",
    platforms: ["Spotify", "Apple Music", "SoundCloud"],
  },
  {
    id: 4,
    title: "Medina Dreams",
    artist: "Collective Orchestra",
    date: "2024-10-20",
    type: "Album",
    image: "/moroccan-medina-traditional.jpg",
    description: "A 10-track journey through traditional and contemporary Moroccan music.",
    platforms: ["Spotify", "Apple Music", "Bandcamp"],
  },
]

export default function Releases() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [filter, setFilter] = useState("All")

  const filteredReleases = filter === "All" ? releases : releases.filter((r) => r.type === filter)

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#3333ff] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            {language === "en" ? "Latest Releases" : "Dernières Sorties"}
          </h1>
          <p className="text-xl text-white/90">
            {language === "en"
              ? "Discover our newest musical projects and collaborations"
              : "Découvrez nos nouveaux projets musicaux et collaborations"}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-3 flex-wrap mb-12">
          {["All", "Album", "EP", "Single"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                filter === type
                  ? "bg-[#ff4219] text-white shadow-lg"
                  : "bg-white text-[#3333ff] border-2 border-[#3333ff] hover:bg-[#3333ff] hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReleases.map((release, index) => (
            <div
              key={release.id}
              className="group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={release.image || "/placeholder.svg"}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#ff4219] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {release.type}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#3333ff] font-bold text-sm mb-2">{release.artist}</p>
                  <h3 className="text-xl font-bold text-black mb-2">{release.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{release.description}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    {new Date(release.date).toLocaleDateString(language === "en" ? "en-US" : "fr-FR")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {release.platforms.map((platform) => (
                      <span key={platform} className="text-xs bg-[#f4debd] text-[#3333ff] px-3 py-1 rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
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
