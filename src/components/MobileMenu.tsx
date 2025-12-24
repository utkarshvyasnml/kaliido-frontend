"use client"

import { useState } from "react"
import Link from "next/link"
import {
  X,
  Plus,
  Minus,
  Home,
  Sparkles,
  Link2,
  Gem,
  CircleDot,
  ShieldCheck,
  Grid,
} from "lucide-react"

type MenuItem = {
  label: string
  href: string
  icon: React.ReactNode
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/", icon: <Home size={18} /> },
  { label: "Earrings", href: "/earrings", icon: <Sparkles size={18} /> },
  { label: "Bracelets", href: "/bracelets", icon: <Link2 size={18} /> },
  { label: "Necklaces", href: "/necklaces", icon: <Gem size={18} /> },
  { label: "Rings", href: "/rings", icon: <CircleDot size={18} /> },
  { label: "Anti Tarnish", href: "/anti-tarnish", icon: <ShieldCheck size={18} /> },
  { label: "Shop All", href: "/shop-all", icon: <Grid size={18} /> },
]

export default function MobileMenu({
  open,
  onClose,
  onAccountOpen,
}: {
  open: boolean
  onClose: () => void
  onAccountOpen: () => void
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!open) return null

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      {/* DRAWER */}
      <aside className="fixed top-0 left-0 z-50 h-full w-[88%] max-w-sm bg-white rounded-tr-2xl shadow-xl">
        {/* HEADER */}
        <div className="flex items-center px-4 py-4 border-b">
          <button
            onClick={onClose}
            className="p-2 rounded-full border"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* MENU */}
        <div className="h-full overflow-y-auto px-4 pb-10">
          <ul className="divide-y">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 font-semibold text-[16px]"
                  >
                    <span className="text-primary">{item.icon}</span>
                    {item.label}
                  </Link>

                  {item.children && (
                    <button onClick={() => toggle(index)}>
                      {openIndex === index ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ MY ACCOUNT (CONNECTED TO HEADERACCOUNT) */}
          <div className="mt-8">
            <button
              onClick={() => {
                onClose()
                onAccountOpen()
              }}
              className="w-full text-center border-2 border-primary text-primary rounded-full py-3 font-semibold"
            >
              My Account
            </button>
          </div>

          <div className="h-12" />
        </div>
      </aside>
    </>
  )
}