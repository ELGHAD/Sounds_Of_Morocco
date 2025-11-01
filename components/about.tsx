"use client"

interface AboutProps {
  language: "en" | "fr"
}

const translations = {
  en: {
    about: "About",
    culturalProject: "The Cultural Project",
    culturalDesc:
      "Sounds of Morocco is a cultural initiative dedicated to preserving and celebrating the rich musical heritage of Morocco. We collect, digitize, and remix traditional Moroccan sounds—from Amazigh folk to Gnawa rhythms—blending them with modern electronic production to create something entirely new.",
    team: "Our Team",
    independentLabel: "The Independent Label",
    labelDesc:
      "As an independent music label, we support emerging and established artists from North Africa and beyond. We provide distribution to 60+ streaming platforms, production support, and international promotion.",
    submit: "Submit Your Music",
  },
  fr: {
    about: "À propos",
    culturalProject: "Le Projet Culturel",
    culturalDesc:
      "Sounds of Morocco est une initiative culturelle dédiée à préserver et célébrer le riche patrimoine musical marocain. Nous collectons, numérisons et remixons des sons marocains traditionnels—du folk amazighe aux rythmes Gnawa—en les fusionnant avec la production électronique moderne.",
    team: "Notre Équipe",
    independentLabel: "Le Label Indépendant",
    labelDesc:
      "En tant que label de musique indépendant, nous soutenons les artistes émergents et établis d'Afrique du Nord et d'ailleurs. Nous offrons une distribution vers 60+ plateformes de streaming, un soutien à la production et une promotion internationale.",
    submit: "Soumettre votre musique",
  },
}

const teamMembers = [
  { name: "Hamza Elrhadiouini", role: "Lead Producer" },
  { name: "Noura El Amrani", role: "Field Recordist" },
  { name: "Youssef Belhaj", role: "Sound Designer" },
  { name: "Sara Aït Lahcen", role: "Mixing Engineer" },
]

export default function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-20 bg-[#f4debd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#3333ff] mb-16 text-center">{t.about}</h2>

        {/* Cultural Project Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#3333ff] mb-6">{t.culturalProject}</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-10">{t.culturalDesc}</p>

          {/* Team Grid */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-[#3333ff] mb-8">{t.team}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h5 className="font-bold text-[#3333ff] text-lg">{member.name}</h5>
                  <p className="text-[#ff4219] font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Independent Label Section */}
        <div className="bg-white rounded-lg p-10 shadow-lg">
          <h3 className="text-3xl font-bold text-[#3333ff] mb-6">{t.independentLabel}</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">{t.labelDesc}</p>
          <a
            href="#submit"
            className="inline-block px-8 py-4 bg-[#3333ff] text-white font-bold rounded-lg hover:bg-[#2222dd] transition-colors"
          >
            {t.submit}
          </a>
        </div>
      </div>
    </section>
  )
}
