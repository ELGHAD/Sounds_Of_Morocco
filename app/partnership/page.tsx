"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

export default function Partnership() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    partnershipType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const t =
    language === "en"
      ? {
          title: "Partnership Inquiry",
          subtitle: "Connect with us to explore collaboration opportunities",
          form: "Partnership Form",
          companyName: "Company Name",
          contactName: "Contact Person Name",
          email: "Email Address",
          phone: "Phone Number",
          country: "Country",
          partnershipType: "Type of Partnership",
          message: "Tell us about your partnership idea",
          submit: "Submit Inquiry",
          success: "Inquiry Submitted!",
          successMsg:
            "Thank you for your interest in partnering with Sounds of Morocco. Our team will review your inquiry and contact you within 2-3 business days.",
          types: ["Select Type...", "Distribution", "Festival/Event", "Media/Press", "Sponsorship", "Other"],
        }
      : {
          title: "Demande de Partenariat",
          subtitle: "Connectez-vous avec nous pour explorer les opportunités de collaboration",
          form: "Formulaire de Partenariat",
          companyName: "Nom de l'Entreprise",
          contactName: "Nom de la Personne de Contact",
          email: "Adresse Email",
          phone: "Numéro de Téléphone",
          country: "Pays",
          partnershipType: "Type de Partenariat",
          message: "Parlez-nous de votre idée de partenariat",
          submit: "Soumettre la Demande",
          success: "Demande Soumise!",
          successMsg:
            "Merci de votre intérêt pour un partenariat avec Sounds of Morocco. Notre équipe examinera votre demande et vous contactera dans 2-3 jours ouvrables.",
          types: [
            "Sélectionner le Type...",
            "Distribution",
            "Festival/Événement",
            "Média/Presse",
            "Parrainage",
            "Autre",
          ],
        }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      country: "",
      partnershipType: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-[#f4debd]">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-b from-[#ff4219] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/partners" className="inline-block text-white hover:text-[#f4debd] transition-colors mb-4">
            ← {language === "en" ? "Back to Partners" : "Retour aux Partenaires"}
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-lg text-white/90">{t.subtitle}</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#3333ff]">{t.form}</h2>
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="px-4 py-2 bg-[#3333ff] text-white rounded-lg hover:bg-[#ff4219] transition-colors text-sm font-medium"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
          </div>

          {submitted && (
            <div className="mb-8 p-6 bg-green-100 border-l-4 border-green-500 rounded animate-slideInUp">
              <h3 className="text-lg font-bold text-green-800 mb-2">{t.success}</h3>
              <p className="text-green-700 text-sm">{t.successMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Company and Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.companyName}</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.contactName}</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Country and Partnership Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.country}</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.partnershipType}</label>
                <select
                  required
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors bg-white text-sm"
                >
                  {t.types.map((type, idx) => (
                    <option key={idx} value={idx === 0 ? "" : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff4219] text-white py-2 rounded-lg font-bold hover:bg-[#ff4219]/90 transition-colors"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
