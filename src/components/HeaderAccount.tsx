"use client"

import { X, User } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function HeaderAccount({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  /* SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[998] bg-black/40
          transition-opacity
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 z-[999]
          h-full w-full sm:w-[360px]
          bg-white shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-2">
            <User />
            <h3 className="font-semibold">My Account</h3>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="p-4 space-y-4 text-sm">
          <Link href="/login" onClick={onClose} className="block">
            Login / Register
          </Link>
          <Link href="/orders" onClick={onClose} className="block">
            My Orders
          </Link>
          <Link href="/wishlist" onClick={onClose} className="block">
            Wishlist
          </Link>
          <Link href="/profile" onClick={onClose} className="block">
            Profile
          </Link>
          <Link href="/logout" onClick={onClose} className="block text-red-600">
            Logout
          </Link>
        </div>
      </aside>
    </>
  )
}