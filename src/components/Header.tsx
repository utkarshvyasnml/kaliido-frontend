"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
} from "lucide-react"

import MobileMenu from "@/components/MobileMenu"
import MiniCart from "@/components/MiniCart"
import HeaderSearch from "@/components/HeaderSearch"
import HeaderWishlist from "@/components/HeaderWishlist"
import HeaderAccount from "@/components/HeaderAccount"

import { useCartStore } from "@/store/cartStore"

/* ===============================
   MENU ITEMS
=============================== */
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Earrings", href: "/earrings" },
  { label: "Bracelets", href: "/bracelets" },
  { label: "Necklaces", href: "/necklaces" },
  { label: "Rings", href: "/rings" },
  { label: "Anti Tarnish", href: "/anti-tarnish" },
  { label: "Shop All", href: "/shop-all" },
]

export default function Header() {
  const pathname = usePathname()

  /* DRAWER STATES */
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  /* CART */
  const totalQty = useCartStore((s) => s.totalQty)
  const openCart = useCartStore((s) => s.openCart)
  const closeCart = useCartStore((s) => s.closeCart)

  /* 🔥 CLOSE ALL DRAWERS ON ROUTE CHANGE */
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    setWishlistOpen(false)
    setAccountOpen(false)
    closeCart()
  }, [pathname, closeCart])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary">

        {/* ================= MOBILE HEADER ================= */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>

            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kaliido"
                width={110}
                height={40}
                priority
              />
            </Link>

            <div className="flex items-center gap-4">
              <button onClick={() => setSearchOpen(true)}>
                <Search size={22} />
              </button>

              <button onClick={() => setWishlistOpen(true)}>
                <Heart size={22} />
              </button>

              <button onClick={openCart} className="relative">
                <ShoppingBag size={22} />
                {totalQty > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff2e74] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {totalQty}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6">

            <div className="relative flex items-center justify-center py-4">

              {/* SEARCH */}
              <div className="absolute left-0">
                <button onClick={() => setSearchOpen(true)}>
                  <Search size={22} className="text-white" />
                </button>
              </div>

              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Kaliido"
                  width={140}
                  height={50}
                  priority
                />
              </Link>

              {/* RIGHT ICONS */}
              <div className="absolute right-0 flex items-center gap-6 text-white">
                <button onClick={() => setAccountOpen(true)}>
                  <User size={22} />
                </button>

                <button onClick={() => setWishlistOpen(true)}>
                  <Heart size={22} />
                </button>

                <button onClick={openCart} className="relative">
                  <ShoppingBag size={22} />
                  {totalQty > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ff2e74] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                      {totalQty}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* NAV */}
            <nav className="flex justify-center pb-4">
              <ul className="flex gap-8">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white font-bold hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>

        {/* MOBILE MENU */}
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onAccountOpen={() => {
            setMenuOpen(false)
            setAccountOpen(true)
          }}
        />
      </header>

      {/* ================= DRAWERS ================= */}
      <HeaderSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <HeaderWishlist
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />

      <HeaderAccount
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      <MiniCart />
    </>
  )
}