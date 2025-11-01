"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

interface HeroProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    tagline: "Discover Morocco's Sounds, Reimagined",
    subtitle:
      "A cultural project and independent label blending traditional Moroccan timbres with modern electronic music.",
    exploreProject: "Explore the Project",
    browseLabel: "Browse Artists",
  },
  fr: {
    tagline: "Découvrez les Sons du Maroc, Réimaginés",
    subtitle:
      "Un projet culturel et un label indépendant fusionnant les timbres marocains traditionnels avec la musique électronique moderne.",
    exploreProject: "Explorer le Projet",
    browseLabel: "Explorer les Artistes",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-mode/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3333ff] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">{t.tagline}</h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#about"
            className="px-8 py-4 bg-[#ff4219] text-white font-bold text-lg rounded-lg hover:bg-[#e63a17] transition-colors"
          >
            {t.exploreProject}
          </a>
          <a
            href="#artists"
            className="px-8 py-4 bg-[#f4debd] text-[#3333ff] font-bold text-lg rounded-lg hover:bg-white transition-colors"
          >
            {t.browseLabel}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          
        </div>
      </div>
    </section>
  )
}
