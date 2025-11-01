"use client"

import type React from "react"

import Image from "next/image"
import { Mail, Instagram, Music2, Youtube, SproutIcon as Spotify, Send } from "lucide-react"
import { useState } from "react"

interface FooterProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    explore: "Explore",
    streams: "Stream On",
    contact: "Contact",
    follow: "Follow Us",
    newsletter: "Stay Updated",
    newsletterDesc: "Subscribe to our newsletter for new releases and exclusive content",
    subscribe: "Subscribe",
    email: "Your email",
    quickLinks: {
      home: "Home",
      about: "About",
      artists: "Artists",
      releases: "Releases",
      partners: "Partners",
      news: "News",
    },
    streaming: {
      spotify: "Spotify",
      apple: "Apple Music",
      youtube: "YouTube Music",
      bandcamp: "Bandcamp",
    },
    contactInfo: {
      email: "hello@soundsofmorocco.com",
      description: "A cultural project and independent label",
    },
    rights: "© 2025 Sounds of Morocco. All rights reserved.",
  },
  fr: {
    explore: "Explorer",
    streams: "Écouter Sur",
    contact: "Contact",
    follow: "Nous Suivre",
    newsletter: "Restez Informé",
    newsletterDesc: "Inscrivez-vous à notre infolettre pour les nouvelles sorties et le contenu exclusif",
    subscribe: "S'abonner",
    email: "Votre email",
    quickLinks: {
      home: "Accueil",
      about: "À Propos",
      artists: "Artistes",
      releases: "Sorties",
      partners: "Partenaires",
      news: "Actualités",
    },
    streaming: {
      spotify: "Spotify",
      apple: "Apple Music",
      youtube: "YouTube Music",
      bandcamp: "Bandcamp",
    },
    contactInfo: {
      email: "hello@soundsofmorocco.com",
      description: "Un projet culturel et un label indépendant",
    },
    rights: "© 2025 Sounds of Morocco. Tous droits réservés.",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#000000] to-[#1a1a1a] text-white">
      <div className="bg-gradient-to-r from-[#3333ff] to-[#ff4219] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">{t.newsletter}</h3>
              <p className="text-white/90">{t.newsletterDesc}</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#000000] text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Send size={18} />
                {t.subscribe}
              </button>
            </form>
            {subscribed && (
              <p className="text-white text-sm font-semibold">{language === "en" ? "Thank you!" : "Merci!"}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="w-12 h-12 relative mb-3">
                <Image
                  src="/images/design-mode/logo.png"
                  alt="Sounds of Morocco"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-400">{t.contactInfo.description}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-[#3333ff] mb-4">{t.explore}</h4>
            <ul className="space-y-3">
              {Object.values(t.quickLinks).map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-[#ff4219] transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Streaming Platforms */}
          <div>
            <h4 className="font-bold text-lg text-[#ff4219] mb-4">{t.streams}</h4>
            <ul className="space-y-3">
              {Object.values(t.streaming).map((platform, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#3333ff] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <Music2 size={16} />
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg text-[#f4debd] mb-4">{t.contact}</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${t.contactInfo.email}`}
                className="text-gray-400 hover:text-[#ff4219] transition-colors duration-300 text-sm flex items-center gap-2"
              >
                <Mail size={16} />
                {t.contactInfo.email}
              </a>
              <p className="text-xs text-gray-500 leading-relaxed">
                {language === "en"
                  ? "Reach out for collaborations, bookings, or inquiries. We're here to connect."
                  : "Nous contacter pour des collaborations, des réservations ou des demandes."}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg text-[#3333ff] mb-4">{t.follow}</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4219] transition-all duration-300 group"
              >
                <Instagram size={18} className="group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3333ff] transition-all duration-300 group"
              >
                <Spotify size={18} className="group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4219] transition-all duration-300 group"
              >
                <Youtube size={18} className="group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3333ff] transition-all duration-300 group"
              >
                <Music2 size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>{t.rights}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#ff4219] transition-colors duration-300">
                {language === "en" ? "Privacy Policy" : "Politique de Confidentialité"}
              </a>
              <a href="#" className="hover:text-[#ff4219] transition-colors duration-300">
                {language === "en" ? "Terms of Service" : "Conditions d'Utilisation"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
