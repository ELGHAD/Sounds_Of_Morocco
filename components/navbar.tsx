"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  language: "en" | "fr"
  setLanguage: (lang: "en" | "fr") => void
}

const translations = {
  en: {
    about: "About",
    artists: "Artists",
    releases: "Releases",
    partners: "Partners",
    news: "News",
    submit: "Submit",
    merch: "Merch",
    contact: "Contact",
  },
  fr: {
    about: "À propos",
    artists: "Artistes",
    releases: "Releases",
    partners: "Partenaires",
    news: "Actualités",
    submit: "Soumettre",
    merch: "Boutique",
    contact: "Contact",
  },
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsScrolled(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[language]
  const navItems = ["about", "artists", "releases", "partners", "news", "submit", "merch", "contact"] as const

  const getHref = (item: string) => {
    if (item === "submit") return "/submit"
    if (item === "merch") return "/merch"
    return `/${item}`
  }

  const isActive = (item: string) => {
    return pathname.startsWith(`/${item}`)
  }

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#3333ff] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" onClick={handleNavClick}>
            <div className="w-28 h-28 relative flex-shrink-0">
              <Image
                src="/images/design-mode/logo.png"
                alt="Sounds of Morocco"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(item)
                    ? isScrolled
                      ? "text-[#f4debd] border-b-2 border-[#f4debd]"
                      : "text-[#f4debd] border-b-2 border-[#f4debd]"
                    : isScrolled
                      ? "text-white hover:text-[#f4debd]"
                      : "text-black hover:text-[#3333ff]"
                }`}
              >
                {t[item]}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isScrolled ? "bg-white/20 text-white hover:bg-white/30" : "bg-black/10 text-black hover:bg-black/20"
              }`}
            >
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden ${isScrolled ? "text-white" : "text-black"}`}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-[#3333ff]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                onClick={handleNavClick}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(item) ? "bg-[#f4debd] text-[#3333ff]" : "text-white hover:bg-white/20"
                }`}
              >
                {t[item]}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
