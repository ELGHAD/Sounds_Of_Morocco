"use client"

interface PartnersProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    partners: "Our Partners",
    streaming: "Streaming Partners",
  },
  fr: {
    partners: "Nos Partenaires",
    streaming: "Partenaires de Streaming",
  },
}

const partnerLogos = ["Spotify", "Apple Music", "Deezer", "YouTube Music", "Amazon Music", "Tidal"]

export default function Partners({ language }: PartnersProps) {
  const t = translations[language]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-12 text-center">{t.partners}</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#ff4219] mb-8 text-center">{t.streaming}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerLogos.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-6 bg-[#f4debd] rounded-lg hover:shadow-lg transition-shadow h-24"
              >
                <span className="font-bold text-[#3333ff] text-center text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
