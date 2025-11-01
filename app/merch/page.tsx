"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ShoppingCart } from "lucide-react"

export default function Merch() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [filter, setFilter] = useState("All")
  const [cart, setCart] = useState<number[]>([])

  const t =
    language === "en"
      ? {
          title: "Official Merchandise",
          subtitle: "Wear the sound, carry the culture",
          categories: ["All", "Apparel", "Accessories", "Collectibles"],
        }
      : {
          title: "Merchandise Officiel",
          subtitle: "Portez le son, portez la culture",
          categories: ["Tous", "Vêtements", "Accessoires", "Objets Collectibles"],
        }

  const merch = [
    {
      id: 1,
      name: language === "en" ? "Sounds of Morocco T-Shirt" : "T-Shirt Sounds of Morocco",
      category: "Apparel",
      price: 34.99,
      image: "/blue-tshirt-logo.jpg",
      color: "Blue",
    },
    {
      id: 2,
      name: language === "en" ? "Desert Nights Hoodie" : "Hoodie Desert Nights",
      category: "Apparel",
      price: 64.99,
      image: "/hoodie-orange.jpg",
      color: "Orange",
    },
    {
      id: 3,
      name: language === "en" ? "Moroccan Pattern Cap" : "Casquette Motif Marocain",
      category: "Accessories",
      price: 24.99,
      image: "/beige-cap.jpg",
      color: "Beige",
    },
    {
      id: 4,
      name: language === "en" ? "Vinyl Record Clock" : "Horloge Disque Vinyle",
      category: "Collectibles",
      price: 49.99,
      image: "/vinyl-clock.jpg",
      color: "Black",
    },
    {
      id: 5,
      name: language === "en" ? "Limited Edition Badge Set" : "Ensemble de Badges Édition Limitée",
      category: "Accessories",
      price: 14.99,
      image: "/badges-set.jpg",
      color: "Multi",
    },
    {
      id: 6,
      name: language === "en" ? "Marrakech Nights Poster" : "Affiche Marrakech Nights",
      category: "Collectibles",
      price: 19.99,
      image: "/poster-art.jpg",
      color: "Print",
    },
    {
      id: 7,
      name: language === "en" ? "Silk Scarf Collection" : "Collection Foulard Soie",
      category: "Accessories",
      price: 44.99,
      image: "/silk-scarf.jpg",
      color: "Multicolor",
    },
    {
      id: 8,
      name: language === "en" ? "Artist Collaboration Tee" : "T-Shirt Collaboration Artiste",
      category: "Apparel",
      price: 39.99,
      image: "/collaboration-tee.jpg",
      color: "White",
    },
  ]

  const filtered = filter === "All" || filter === "Tous" ? merch : merch.filter((m) => m.category === filter)

  const handleAddToCart = (id: number) => {
    setCart([...cart, id])
  }

  return (
    <div className="min-h-screen bg-[#f4debd]">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#ff4219] to-[#f4debd]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter & Cart Badge */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-3 flex-wrap">
            {t.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  filter === cat
                    ? "bg-[#3333ff] text-white shadow-lg"
                    : "bg-white text-[#3333ff] border-2 border-[#3333ff] hover:bg-[#3333ff] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="relative">
              <ShoppingCart size={32} className="text-[#3333ff]" />
              <span className="absolute -top-2 -right-2 bg-[#ff4219] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cart.length}
              </span>
            </div>
          )}
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((item, idx) => (
            <div key={item.id} className="group opacity-0 animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64 bg-gray-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#3333ff] font-bold text-xs mb-1">{item.color}</p>
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#ff4219]">${item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="bg-[#3333ff] text-white px-4 py-2 rounded-lg hover:bg-[#3333ff]/90 transition-colors transform hover:scale-105"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer language={language} />
    </div>
  )
}
