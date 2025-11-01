"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fr">("en")

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Footer language={language} />
    </div>
  )
}
