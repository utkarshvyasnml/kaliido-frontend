"use client"

import { X, Heart, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useWishlistStore } from "@/store/wishlistStore"

export default function HeaderWishlist({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const items = useWishlistStore((s) => s.items)
  const remove = useWishlistStore((s) => s.remove)

  /* 🔒 SCROLL LOCK */
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
          h-full w-full sm:w-[420px]
          bg-white shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-2">
            <Heart className="text-[#ff2e74]" />
            <h3 className="font-semibold">Wishlist</h3>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-gray-500">
              Your wishlist is empty
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center"
            >
              <Link
                href={`/product/${item.slug}`}
                onClick={onClose}
                className="flex gap-4 items-center flex-1"
              >
                {item.image && (
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
                <div>
                  <p className="font-medium line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹{item.price}
                  </p>
                </div>
              </Link>

              {/* REMOVE */}
              <button
                onClick={() => remove(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}