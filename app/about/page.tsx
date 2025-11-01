"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const aboutContent = [
  {
    id: 1,
    title: "The Cultural Project",
    subtitle: "Preserving Heritage",
    description:
      "Sounds of Morocco is a cultural initiative dedicated to preserving and celebrating the rich musical heritage of Morocco. We collect, digitize, and remix traditional Moroccan sounds—from Amazigh folk to Gnawa rhythms—blending them with modern electronic production to create something entirely new.",
    icon: "🎵",
  },
  {
    id: 2,
    title: "The Independent Label",
    subtitle: "Supporting Artists",
    description:
      "As an independent music label, we support emerging and established artists from North Africa and beyond. We provide distribution to 60+ streaming platforms, production support, and international promotion.",
    icon: "🎧",
  },
]

const teamMembers = [
  { name: "Hamza Elrhadiouini", role: "Lead Producer", icon: "🎹" },
  { name: "Noura El Amrani", role: "Field Recordist", icon: "🎤" },
  { name: "Youssef Belhaj", role: "Sound Designer", icon: "🔊" },
  { name: "Sara Aït Lahcen", role: "Mixing Engineer", icon: "🎚️" },
]

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "fr">("en")

  const translations = {
    en: {
      title: "About Us",
      subtitle: "Discover our mission and team",
      our_team: "Our Team",
    },
    fr: {
      title: "À Propos",
      subtitle: "Découvrez notre mission et notre équipe",
      our_team: "Notre Équipe",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#3333ff] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      {/* About Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aboutContent.map((item, index) => (
            <div
              key={item.id}
              className="group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="text-[#3333ff] font-bold text-sm mb-2 uppercase">{item.subtitle}</p>
                  <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="mt-16 pt-12 border-t-2 border-[#3333ff]/20">
          <h2 className="text-3xl font-bold text-[#3333ff] mb-12 text-center">{t.our_team}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group opacity-0 animate-fadeIn"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center p-6">
                  <div className="text-4xl mb-3">{member.icon}</div>
                  <h4 className="font-bold text-[#3333ff] text-lg mb-1">{member.name}</h4>
                  <p className="text-[#ff4219] font-semibold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
