import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bebas_Neue, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] })
const poppins = Poppins({ weight: ["300", "400", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sounds of Morocco",
  description:
    "A cultural project and independent label blending traditional Moroccan timbres with modern electronic music.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
