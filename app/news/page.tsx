"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const news = [
  {
    id: 1,
    title: "Sounds of Morocco Announces Partnership with UNESCO",
    date: "2024-11-20",
    category: "Partnership",
    image: "/unesco-partnership-announcement.jpg",
    excerpt: "Exciting collaboration to preserve and promote Moroccan musical heritage worldwide.",
    content: "We are thrilled to announce our partnership with UNESCO to support cultural heritage initiatives...",
  },
  {
    id: 2,
    title: "Electric Dream Festival 2025 Lineup Released",
    date: "2024-11-18",
    category: "Event",
    image: "/music-festival-lineup-announcement.jpg",
    excerpt: "featuring Sounds of Morocco artists performing across three days in Marrakech.",
    content: "The highly anticipated 2025 Electric Dream Festival lineup has been officially revealed...",
  },
  {
    id: 3,
    title: "Behind the Scenes: Studio Session with Youssef Amine",
    date: "2024-11-15",
    category: "Artist Spotlight",
    image: "/music-producer-studio-recording.jpg",
    excerpt: "An intimate look at how our artists craft their signature sound blending tradition and innovation.",
    content: "In this exclusive behind-the-scenes feature, we sit down with Youssef Amine...",
  },
  {
    id: 4,
    title: "New Documentary Series Explores Moroccan Electronic Music",
    date: "2024-11-10",
    category: "Media",
    image: "/documentary-film-production.jpg",
    excerpt: "A four-part series diving deep into the origins and evolution of Morocco's electronic music scene.",
    content: "A groundbreaking documentary series is now available on streaming platforms...",
  },
  {
    id: 5,
    title: "Sounds of Morocco Releases Limited Edition Vinyl Collection",
    date: "2024-11-05",
    category: "Release",
    image: "/vinyl-record-limited-edition.jpg",
    excerpt: "Collectors edition featuring remasters and previously unreleased tracks.",
    content: "Mark collectors' calendars: a special limited edition vinyl collection is now available...",
  },
  {
    id: 6,
    title: "Artist Q&A: Layla Discusses the Fusion of Old and New",
    date: "2024-10-30",
    category: "Artist Spotlight",
    image: "/artist-interview-discussion.jpg",
    excerpt: "Interview with Layla & The Soundscapes about creating music that bridges cultures.",
    content: "We sat down with Layla to discuss her approach to blending traditional Moroccan...",
  },
]

export default function News() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Partnership", "Event", "Artist Spotlight", "Media", "Release"]
  const filteredNews = selectedCategory === "All" ? news : news.filter((n) => n.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#3333ff] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            {language === "en" ? "News & Updates" : "Actualités et Mises à Jour"}
          </h1>
          <p className="text-xl text-white/90">
            {language === "en"
              ? "Stay informed about the latest from Sounds of Morocco"
              : "Restez informé des dernières actualités de Sounds of Morocco"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-12 justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-[#ff4219] text-white shadow-lg"
                  : "bg-white text-[#3333ff] border-2 border-[#3333ff] hover:bg-[#3333ff] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-8">
          {filteredNews.map((article, index) => (
            <div
              key={article.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-72 h-56 lg:h-auto overflow-hidden bg-gradient-to-br from-[#3333ff] to-[#ff4219]">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold text-[#ff4219] uppercase bg-[#ff4219]/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString(language === "en" ? "en-US" : "fr-FR")}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-[#3333ff] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-base mb-4">{article.excerpt}</p>
                  </div>

                  <button className="self-start bg-[#3333ff] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#ff4219] transition-colors transform hover:scale-105">
                    {language === "en" ? "Read More" : "Lire Plus"}
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
