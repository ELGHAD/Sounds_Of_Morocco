"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Share2, Calendar, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const articles = [
  {
    id: 1,
    title: "Unveiling the New Era of Moroccan Electronic Music",
    titleFr: "Dévoiler la nouvelle ère de la musique électronique marocaine",
    category: "Project",
    categoryFr: "Projet",
    date: "2025-11-15",
    author: "Hamza Elrhadiouini",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop",
    content: `Sounds of Morocco is proud to announce a groundbreaking initiative that bridges the gap between Morocco's rich musical heritage and contemporary electronic production. Our new era celebrates the fusion of traditional sounds with modern innovation.

Over the past three years, our team has traveled across Morocco, collecting rare recordings of Amazigh folk singers, Gnawa musicians, and street performers. These authentic voices form the backbone of our new production approach.

By combining these historical soundscapes with cutting-edge synthesizers, drum machines, and digital effects, we're creating something entirely new—music that honors the past while embracing the future. This is not appropriation; it's collaboration and respect.

Our first wave of releases under this initiative will debut across all major streaming platforms next month. Artists including Atlas Echoes, Sahara Pulse, and Casablanca Nights are leading the charge with their innovative interpretations.

We invite artists, producers, and music lovers to join us in this cultural revolution. Submit your music, attend our listening sessions, or simply follow along as we reshape the global perception of Moroccan music.`,
    contentFr: `Sounds of Morocco est fière d'annoncer une initiative révolutionnaire qui comble le fossé entre le riche patrimoine musical du Maroc et la production électronique contemporaine. Notre nouvelle ère célèbre la fusion des sons traditionnels avec l'innovation moderne.

Au cours des trois dernières années, notre équipe a voyagé à travers le Maroc, collectant des enregistrements rares de chanteurs folkloriques amazighs, de musiciens Gnawa et de musiciens de rue. Ces voix authentiques forment l'épine dorsale de notre nouvelle approche de production.

En combinant ces paysages sonores historiques avec des synthétiseurs de pointe, des boîtes à rythmes et des effets numériques, nous créons quelque chose d'entièrement nouveau—une musique qui honore le passé tout en embrassant l'avenir. Ce n'est pas une appropriation; c'est une collaboration et du respect.

Notre première vague de sorties dans cette initiative fera ses débuts sur toutes les principales plateformes de streaming le mois prochain. Les artistes, y compris Atlas Echoes, Sahara Pulse et Casablanca Nights, mènent la charge avec leurs interprétations innovantes.

Nous invitons les artistes, les producteurs et les amateurs de musique à nous rejoindre dans cette révolution culturelle. Soumettez votre musique, assistez à nos sessions d'écoute ou suivez simplement nos progrès alors que nous remodelons la perception mondiale de la musique marocaine.`,
  },
  // ... other articles would follow the same pattern
  {
    id: 2,
    title: "Atlas Echoes Releases Debut Album: A Musical Journey",
    titleFr: "Atlas Echoes sort son album de débuts: Un voyage musical",
    category: "Releases",
    categoryFr: "Releases",
    date: "2025-10-22",
    author: "Noura El Amrani",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    content:
      'Atlas Echoes has officially released their debut album "Timeless Voices," marking a watershed moment in contemporary Moroccan music. The 12-track album has already broken streaming records and captivated international audiences.',
    contentFr:
      'Atlas Echoes a officiellement sorti son album de débuts "Timeless Voices", marquant un moment décisif dans la musique marocaine contemporaine. L\'album de 12 pistes a déjà battu des records de streaming et captivé les audiences internationales.',
  },
]

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const article = articles.find((a) => a.id.toString() === params.id)

  if (!article) {
    return (
      <>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#3333ff] mb-4">Article not found</h1>
            <Link href="/" className="text-[#ff4219] hover:underline">
              Go back home
            </Link>
          </div>
        </div>
        <Footer language={language} />
      </>
    )
  }

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#news"
            className="flex items-center gap-2 text-[#3333ff] hover:text-[#ff4219] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            {language === "en" ? "Back to News" : "Retour aux actualités"}
          </Link>

          {/* Hero Image */}
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={article.image || "/placeholder.svg"}
              alt={language === "en" ? article.title : article.titleFr}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#ff4219] text-white text-xs font-bold rounded-full mb-4">
              {language === "en" ? article.category : article.categoryFr}
            </span>
            <h1 className="text-5xl font-bold text-[#3333ff] mb-6">
              {language === "en" ? article.title : article.titleFr}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(article.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US")}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                {article.author}
              </div>
              <button className="ml-auto p-2 hover:bg-[#f4debd] rounded-lg transition-colors">
                <Share2 size={20} className="text-[#ff4219]" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {(language === "en" ? article.content : article.contentFr).split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[#3333ff] mb-4">
              {language === "en" ? "More Articles" : "Plus d'articles"}
            </h3>
            <Link
              href="/#news"
              className="inline-block px-6 py-3 bg-[#3333ff] text-white font-bold rounded-lg hover:bg-[#2222dd] transition-colors"
            >
              {language === "en" ? "Browse All News" : "Parcourir toutes les actualités"}
            </Link>
          </div>
        </article>
      </main>
      <Footer language={language} />
    </>
  )
}
