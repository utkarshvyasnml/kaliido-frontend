"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"

type Product = {
  id: number
  title: string
  slug: string
  price: number
  thumbnail?: { url: string } | null
}

export default function HeaderSearch({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  /* SEARCH API */
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const t = setTimeout(async () => {
      setLoading(true)
      const res = await fetch(`/api/search?q=${query}`)
      const data = await res.json()
      setResults(data)
      setLoading(false)
    }, 300)

    return () => clearTimeout(t)
  }, [query])

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[998]
          bg-black/40
          transition-opacity
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 z-[999]
          h-full w-full sm:w-[420px]
          bg-white
          shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 px-4 py-4 border-b">
          <Search size={20} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 outline-none text-base"
          />
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* RESULTS */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
          {loading && <p className="text-sm">Searching…</p>}

          {!loading && query.length > 1 && results.length === 0 && (
            <p className="text-sm text-gray-500">
              No products found
            </p>
          )}

          {results.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}`}
              onClick={onClose}
              className="flex gap-4 items-center"
            >
              {p.thumbnail && (
                <img
                  src={p.thumbnail.url}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div>
                <p className="font-medium leading-snug">
                  {p.title}
                </p>
                <p className="text-sm text-gray-600">
                  ₹{p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}