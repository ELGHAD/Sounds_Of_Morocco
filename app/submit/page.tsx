"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SubmitArtist() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    country: "",
    genre: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const t =
    language === "en"
      ? {
          title: "Submit Your Music",
          subtitle: "Join Sounds of Morocco and distribute your music globally",
          benefits: "Why Submit to Sounds of Morocco?",
          form: "Artist Submission Form",
          artistName: "Artist Name",
          email: "Email Address",
          country: "Country",
          genre: "Music Genre",
          message: "Tell us about your music",
          submit: "Submit Application",
          success: "Application Submitted!",
          successMsg:
            "We've received your submission. Our team will review it and get back to you within 5-7 business days.",
        }
      : {
          title: "Soumettez Votre Musique",
          subtitle: "Rejoignez Sounds of Morocco et distribuez votre musique mondialement",
          benefits: "Pourquoi soumettre à Sounds of Morocco?",
          form: "Formulaire de Soumission d'Artiste",
          artistName: "Nom de l'Artiste",
          email: "Adresse Email",
          country: "Pays",
          genre: "Genre Musical",
          message: "Parlez-nous de votre musique",
          submit: "Soumettre la Candidature",
          success: "Candidature Soumise!",
          successMsg:
            "Nous avons reçu votre candidature. Notre équipe l'examinera et vous répondra dans 5-7 jours ouvrables.",
        }

  const benefits = [
    {
      icon: "🌍",
      title: language === "en" ? "Global Distribution" : "Distribution Mondiale",
      desc: language === "en" ? "Access to 50+ streaming platforms" : "Accès à plus de 50 plateformes de streaming",
    },
    {
      icon: "💰",
      title: language === "en" ? "Fair Royalties" : "Redevances Équitables",
      desc: language === "en" ? "Transparent payment structure" : "Structure de paiement transparente",
    },
    {
      icon: "🎯",
      title: language === "en" ? "Artist Support" : "Support Artiste",
      desc: language === "en" ? "Marketing and promotion assistance" : "Assistance marketing et promotion",
    },
    {
      icon: "🎵",
      title: language === "en" ? "Creative Freedom" : "Liberté Créative",
      desc: language === "en" ? "100% ownership of your music" : "Propriété complète de votre musique",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ artistName: "", email: "", country: "", genre: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#3333ff] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#3333ff] mb-12 text-center">{t.benefits}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3333ff] mb-8">{t.form}</h2>

          {submitted && (
            <div className="mb-8 p-6 bg-green-100 border-l-4 border-green-500 rounded">
              <h3 className="text-xl font-bold text-green-800 mb-2">{t.success}</h3>
              <p className="text-green-700">{t.successMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.artistName}</label>
              <input
                type="text"
                required
                value={formData.artistName}
                onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                placeholder="Your artist name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.country}</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                  placeholder="Morocco"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.genre}</label>
                <input
                  type="text"
                  value={formData.genre}
                  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                  placeholder="Electronic, Traditional..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors resize-none"
                placeholder="Tell us about your music, influences, and why you'd like to join Sounds of Morocco..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff4219] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#ff4219]/90 transition-colors transform hover:scale-105"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
