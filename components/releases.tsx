"use client"

interface ReleasesProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    releases: "Latest Releases",
    stream: "Stream Now",
  },
  fr: {
    releases: "Dernières Releases",
    stream: "Écouter",
  },
}

const releasesData = [
  {
    title: "Desert Frequencies",
    type: "EP",
    date: "2025-06-10",
    description: "A sonic journey through the Sahara",
  },
  {
    title: "Medina Tapes",
    type: "Single",
    date: "2025-09-02",
    description: "Urban electronic exploration",
  },
  {
    title: "Aït Benhaddou Sessions",
    type: "Album",
    date: "2025-11-20",
    description: "Full-length collaborative work",
  },
]

export default function Releases({ language }: ReleasesProps) {
  const t = translations[language]

  return (
    <section id="releases" className="py-20 bg-[#3333ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">{t.releases}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {releasesData.map((release) => (
            <div key={release.title} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <span className="inline-block px-3 py-1 bg-[#ff4219] text-white text-xs font-bold rounded-full mb-3">
                {release.type}
              </span>
              <h3 className="text-2xl font-bold text-[#3333ff] mb-2">{release.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(release.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US")}
              </p>
              <p className="text-gray-700 mb-6">{release.description}</p>
              <button className="w-full px-4 py-2 bg-[#ff4219] text-white font-bold rounded-lg hover:bg-[#e63a17] transition-colors">
                {t.stream}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
