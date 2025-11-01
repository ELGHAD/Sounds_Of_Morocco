"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface SubmitFormProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    submit: "Submit Your Music",
    description: "Are you an artist or label? Submit your music for consideration on Sounds of Morocco.",
    artistName: "Artist / Label Name",
    email: "Email Address",
    city: "City",
    genre: "Music Genre",
    links: "Streaming Links (Spotify, SoundCloud, etc.)",
    message: "Tell us about your music",
    consent: "I agree to the terms and conditions",
    submitBtn: "Submit Your Music",
    successTitle: "Submission Received!",
    successMsg: "Thank you for submitting. We will review your music and get back to you soon.",
  },
  fr: {
    submit: "Soumettre votre musique",
    description: "Êtes-vous un artiste ou un label ? Soumettez votre musique pour examen auprès de Sounds of Morocco.",
    artistName: "Nom de l'artiste / Label",
    email: "Adresse e-mail",
    city: "Ville",
    genre: "Genre musical",
    links: "Liens de streaming (Spotify, SoundCloud, etc.)",
    message: "Parlez-nous de votre musique",
    consent: "J'accepte les conditions d'utilisation",
    submitBtn: "Soumettre votre musique",
    successTitle: "Soumission reçue!",
    successMsg: "Merci d'avoir soumis. Nous examinerons votre musique et vous recontacterons bientôt.",
  },
}

export default function SubmitForm({ language }: SubmitFormProps) {
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    city: "",
    genre: "",
    links: "",
    message: "",
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = translations[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target as any
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !prev[name as keyof typeof formData] : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setFormData({ artistName: "", email: "", city: "", genre: "", links: "", message: "", consent: false })
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <section id="submit" className="py-20 bg-[#f4debd]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-[#ff4219] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#3333ff] mb-4">{t.successTitle}</h2>
          <p className="text-lg text-gray-800 mb-8">{t.successMsg}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-[#3333ff] text-white font-bold rounded-lg hover:bg-[#2222dd] transition-colors"
          >
            {language === "en" ? "Submit Another" : "Soumettre un autre"}
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="submit" className="py-20 bg-[#f4debd]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-3 text-center">{t.submit}</h2>
        <p className="text-lg text-gray-700 text-center mb-12">{t.description}</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          {/* Artist Name */}
          <div>
            <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.artistName}</label>
            <input
              type="text"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
              placeholder="Your name or label"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* City & Genre */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.city}</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                placeholder="Marrakech"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.genre}</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
              >
                <option value="">Select Genre</option>
                <option value="Gnawa">Gnawa</option>
                <option value="Electro">Electro</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Amazigh">Amazigh</option>
                <option value="Fusion">Fusion</option>
              </select>
            </div>
          </div>

          {/* Streaming Links */}
          <div>
            <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.links}</label>
            <input
              type="url"
              name="links"
              value={formData.links}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
              placeholder="https://open.spotify.com/..."
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.message}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors resize-none"
              placeholder="Tell us about your music, inspiration, and vision..."
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
              {t.consent}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-4 bg-[#ff4219] text-white font-bold text-lg rounded-lg hover:bg-[#e63a17] transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (language === "en" ? "Submitting..." : "Envoi...") : t.submitBtn}
          </button>
        </form>
      </div>
    </section>
  )
}
