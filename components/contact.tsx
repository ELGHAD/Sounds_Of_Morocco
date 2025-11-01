"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    contact: "Get in Touch",
    description: "Have questions? We'd love to hear from you. Choose a topic below.",
    business: "Business",
    booking: "Booking",
    press: "Press",
    collaboration: "Collaboration",
    name: "Your Name",
    email: "Email Address",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    address: "Marrakech, Morocco",
    phone: "+212 (0) 5XX XXX XXX",
    newsletter: "Subscribe to Our Newsletter",
    subscribe: "Subscribe",
  },
  fr: {
    contact: "Nous Contacter",
    description: "Des questions ? Nous aimerions vous entendre. Choisissez un sujet ci-dessous.",
    business: "Affaires",
    booking: "Réservation",
    press: "Presse",
    collaboration: "Collaboration",
    name: "Votre nom",
    email: "Adresse e-mail",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer le message",
    address: "Marrakech, Maroc",
    phone: "+212 (0) 5XX XXX XXX",
    newsletter: "Abonnez-vous à notre infolettre",
    subscribe: "S'abonner",
  },
}

export default function Contact({ language }: ContactProps) {
  const [activeTab, setActiveTab] = useState("business")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const t = translations[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const tabs = [
    { id: "business", label: t.business },
    { id: "booking", label: t.booking },
    { id: "press", label: t.press },
    { id: "collaboration", label: t.collaboration },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-4 text-center">{t.contact}</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">{t.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#ff4219]" />
              </div>
              <div>
                <h3 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Address" : "Adresse"}</h3>
                <p className="text-gray-700">{t.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-[#ff4219]" />
              </div>
              <div>
                <h3 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Phone" : "Téléphone"}</h3>
                <p className="text-gray-700">{t.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-[#ff4219]" />
              </div>
              <div>
                <h3 className="font-bold text-[#3333ff] mb-1">{language === "en" ? "Email" : "E-mail"}</h3>
                <p className="text-gray-700">hello@soundsofmorocco.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#f4debd] rounded-lg p-6">
              <h4 className="font-bold text-[#3333ff] mb-4">{t.newsletter}</h4>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder={t.email}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff]"
                />
                <button className="px-4 py-2 bg-[#ff4219] text-white font-bold rounded-lg hover:bg-[#e63a17] transition-colors">
                  {t.subscribe}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {/* Tab Selection */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    activeTab === tab.id ? "bg-[#ff4219] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3333ff] mb-2">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3333ff] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#3333ff] text-white font-bold text-lg rounded-lg hover:bg-[#2222dd] transition-all transform hover:scale-105"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
