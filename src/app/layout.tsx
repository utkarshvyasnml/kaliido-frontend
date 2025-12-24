import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"

import TopBar from "@/components/TopBar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HomeOnlyFooterStrip from "@/components/HomeOnlyFooterStrip"
import RouteClickReset from "@/components/RouteClickReset"

import { CartProvider } from "@/context/CartContext"


/* ===============================
   GOOGLE FONTS SETUP
=============================== */

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work",
  display: "swap",
})

/* ===============================
   SITE METADATA
=============================== */

export const metadata: Metadata = {
  title: "Kaliido – Premium Fashion Jewellery",
  description: "Premium fashion jewellery store",
}

/* ===============================
   ROOT LAYOUT (FINAL)
=============================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable}
          ${workSans.variable}
          bg-background
          text-textDark
          font-body
          antialiased
        `}
      >
        {/* 🔥 GLOBAL CART PROVIDER (UNCHANGED) */}
        <CartProvider>

          

          {/* ✅ CRITICAL ROUTE FIX (AS IS) */}
          <RouteClickReset />

          {/* 🔔 TOP BAR */}
          <TopBar />

          {/* 🧭 HEADER */}
          <Header />

          {/* 🧩 PAGE CONTENT */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* ⭐ HOME ONLY STRIP */}
          <HomeOnlyFooterStrip />

          {/* 🔻 FOOTER */}
          <Footer />

        </CartProvider>
      </body>
    </html>
  )
}