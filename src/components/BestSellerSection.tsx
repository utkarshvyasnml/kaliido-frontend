"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import { fetchProducts } from "@/lib/strapi"

const categories = [
  { label: "Earrings", value: "earrings" },
  { label: "Bracelet", value: "bracelets" },
  { label: "Rings", value: "rings" },
  { label: "Necklace", value: "necklaces" },
]

export default function BestSellerSection() {
  const [activeCategory, setActiveCategory] = useState("earrings")
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetchProducts(activeCategory).then((res) => {
      if (!res || res.length === 0) {
        setProducts([])
        setLoading(false)
        return
      }

      // 1️⃣ Best sellers first
      const bestSellers = res.filter(
        (p: any) => p.is_best_seller === true
      )

      // 2️⃣ Fallback → random products
      if (bestSellers.length > 0) {
        setProducts(bestSellers)
      } else {
        const shuffled = [...res].sort(() => 0.5 - Math.random())
        setProducts(shuffled.slice(0, 6))
      }

      setLoading(false)
    })
  }, [activeCategory])

  return (
    <section className="bg-[#fffbfc] py-6 md:py-10 overflow-hidden">
      <div className="pl-4 md:pl-10">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
          Best Sellers
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Most loved by our customers 💖
        </p>

        {/* CATEGORY PILLS */}
        <div className="flex items-center gap-2 md:gap-3 mb-6 pr-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`
                px-5 md:px-6 py-2 rounded-full
                text-[13px] md:text-sm font-medium transition
                ${
                  activeCategory === cat.value
                    ? "border border-[#ff2e74] text-[#ff2e74] bg-white"
                    : "bg-[#ffeef2] text-gray-800 hover:bg-pink-100"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS SLIDER ================= */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 flex-nowrap">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-none w-[62vw] sm:w-[42vw] md:w-[18.5vw] h-[360px] bg-gray-100 rounded-xl animate-pulse"
                />
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-[62vw] sm:w-[42vw] md:w-[18.5vw]"
                >
                  <ProductCard product={product} />
                </div>
              ))}

          {/* right spacing */}
          <div className="flex-none w-6" />
        </div>

      </div>
    </section>
  )
}