"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

const contactReasons = [
  {
    id: "business",
    titleEn: "Business",
    titleFr: "Affaires",
    descEn: "Partnership and business inquiries",
    descFr: "Partenariats et demandes commerciales",
  },
  {
    id: "booking",
    titleEn: "Booking",
    titleFr: "Réservation",
    descEn: "Artist booking and event inquiries",
    descFr: "Réservation d'artistes et demandes d'événements",
  },
  {
    id: "press",
    titleEn: "Press",
    titleFr: "Presse",
    descEn: "Media and press inquiries",
    descFr: "Demandes médias et presse",
  },
  {
    id: "collaboration",
    titleEn: "Collaboration",
    titleFr: "Collaboration",
    descEn: "Artist collaboration opportunities",
    descFr: "Opportunités de collaboration d'artistes",
  },
]

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [selectedReason, setSelectedReason] = useState("business")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Choose a reason and send us a message.",
      name: "Your Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      address: "Marrakech, Morocco",
      phone: "+212 (0) 5XX XXX XXX",
      contactEmail: "hello@soundsofmorocco.com",
    },
    fr: {
      title: "Nous Contacter",
      subtitle: "Nous aimerions vous entendre. Choisissez une raison et envoyez-nous un message.",
      name: "Votre Nom",
      email: "Adresse E-mail",
      message: "Votre Message",
      send: "Envoyer",
      address: "Marrakech, Maroc",
      phone: "+212 (0) 5XX XXX XXX",
      contactEmail: "hello@soundsofmorocco.com",
    },
  }

  const t = translations[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", message: "" })
  }

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

      {/* Contact Reasons Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactReasons.map((reason, index) => (
            <div
              key={reason.id}
              onClick={() => setSelectedReason(reason.id)}
              className="group opacity-0 animate-fadeIn cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedReason === reason.id
                    ? "bg-[#ff4219] text-white shadow-lg"
                    : "bg-white text-[#3333ff] shadow-md hover:shadow-xl"
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{language === "en" ? reason.titleEn : reason.titleFr}</h3>
                <p className="text-sm opacity-90">{language === "en" ? reason.descEn : reason.descFr}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-[#ff4219] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Address" : "Adresse"}</h4>
                  <p className="text-gray-600">{t.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Phone className="text-[#ff4219] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Phone" : "Téléphone"}</h4>
                  <p className="text-gray-600">{t.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="text-[#ff4219] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Email" : "E-mail"}</h4>
                  <p className="text-gray-600">{t.contactEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#3333ff] mb-2">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#3333ff] mb-2">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#3333ff] mb-2">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff4219] text-white font-bold py-3 rounded-lg hover:bg-[#3333ff] transition-colors transform hover:scale-105"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
