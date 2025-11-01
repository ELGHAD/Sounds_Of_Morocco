"use client"

import { useState } from "react"
import { Calendar, User, Share2 } from "lucide-react"
import Link from "next/link"

interface BlogProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    blog: "Latest News",
    description: "Stay updated with the latest from Sounds of Morocco",
    all: "All",
    project: "Project",
    releases: "Releases",
    interviews: "Interviews",
    readMore: "Read More",
  },
  fr: {
    blog: "Actualités",
    description: "Restez à jour avec les dernières nouvelles de Sounds of Morocco",
    all: "Tous",
    project: "Projet",
    releases: "Releases",
    interviews: "Interviews",
    readMore: "Lire la suite",
  },
}

const articles = [
  {
    id: 1,
    title: "Unveiling the New Era of Moroccan Electronic Music",
    titleFr: "Dévoiler la nouvelle ère de la musique électronique marocaine",
    category: "Project",
    categoryFr: "Projet",
    date: "2025-11-15",
    author: "Hamza Elrhadiouini",
    excerpt:
      "Sounds of Morocco launches a groundbreaking initiative to merge traditional Moroccan soundscapes with cutting-edge electronic production.",
    excerptFr:
      "Sounds of Morocco lance une initiative révolutionnaire pour fusionner les paysages sonores traditionnels marocains avec la production électronique de pointe.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Atlas Echoes Releases Debut Album: A Musical Journey",
    titleFr: "Atlas Echoes sort son album de débuts: Un voyage musical",
    category: "Releases",
    categoryFr: "Releases",
    date: "2025-10-22",
    author: "Noura El Amrani",
    excerpt: 'Atlas Echoes\' debut album "Timeless Voices" breaks streaming records across 50 countries.',
    excerptFr: "L'album de débuts d'Atlas Echoes \"Timeless Voices\" casse les records de streaming dans 50 pays.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Interview: Sahara Pulse on Blending Tradition and Innovation",
    titleFr: "Entretien: Sahara Pulse sur la fusion de la tradition et de l'innovation",
    category: "Interviews",
    categoryFr: "Interviews",
    date: "2025-09-10",
    author: "Youssef Belhaj",
    excerpt: "An exclusive conversation with Sahara Pulse about their creative process and inspirations.",
    excerptFr: "Une conversation exclusive avec Sahara Pulse sur leur processus créatif et inspirations.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Sounds of Morocco Expands to 60+ Streaming Platforms",
    titleFr: "Sounds of Morocco s'étend à 60+ plateformes de streaming",
    category: "Project",
    categoryFr: "Projet",
    date: "2025-08-28",
    author: "Sara Aït Lahcen",
    excerpt: "Our distribution network now reaches every major streaming service globally.",
    excerptFr:
      "Notre réseau de distribution atteint maintenant tous les principaux services de streaming mondialement.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Preserving Gnawa Heritage Through Digital Innovation",
    titleFr: "Préserver le patrimoine Gnawa par l'innovation numérique",
    category: "Project",
    categoryFr: "Projet",
    date: "2025-07-15",
    author: "Hamza Elrhadiouini",
    excerpt: "How Sounds of Morocco is using technology to document and celebrate traditional Gnawa music.",
    excerptFr:
      "Comment Sounds of Morocco utilise la technologie pour documenter et célébrer la musique Gnawa traditionnelle.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Casablanca Nights Goes Global: Tour Announcement",
    titleFr: "Casablanca Nights devient mondial: Annonce de tournée",
    category: "Releases",
    categoryFr: "Releases",
    date: "2025-06-20",
    author: "Noura El Amrani",
    excerpt: "The electro duo announces their first international tour across Europe and Africa.",
    excerptFr: "Le duo électro annonce sa première tournée internationale à travers l'Europe et l'Afrique.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
  },
]

export default function Blog({ language }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const t = translations[language]

  const categories = ["All", "Project", "Releases", "Interviews"]
  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-3 text-center">{t.blog}</h2>
        <p className="text-lg text-gray-600 text-center mb-12">{t.description}</p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[#ff4219] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category === "All" ? t.all : category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 bg-white group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={language === "en" ? article.title : article.titleFr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#ff4219] text-white text-xs font-bold rounded-full">
                  {language === "en" ? article.category : article.categoryFr}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3333ff] mb-3 line-clamp-2 group-hover:text-[#ff4219] transition-colors">
                  {language === "en" ? article.title : article.titleFr}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {language === "en" ? article.excerpt : article.excerptFr}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US")}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${article.id}`}
                    className="text-[#3333ff] font-semibold hover:text-[#ff4219] transition-colors"
                  >
                    {t.readMore} →
                  </Link>
                  <button className="p-2 rounded-full hover:bg-[#f4debd] transition-colors">
                    <Share2 size={18} className="text-[#ff4219]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
