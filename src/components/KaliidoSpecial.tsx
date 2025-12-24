"use client"

import { useEffect, useMemo, useState } from "react"
import ProductCard from "@/components/ProductCard"
import ProductCardSkeleton from "@/components/ProductCardSkeleton"
import { fetchProducts } from "@/lib/strapi"

const categories = [
  { label: "Earrings", value: "earrings" },
  { label: "Bracelet", value: "bracelets" },
  { label: "Rings", value: "rings" },
  { label: "Necklace", value: "necklaces" },
]

export default function KaliidoSpecial() {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState("earrings")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchProducts()
      setAllProducts(data || [])
      setIsInitialLoading(false)
    }
    load()
  }, [])

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => p.category === activeCategory)
  }, [allProducts, activeCategory])

  function handleCategoryChange(value: string) {
    if (value === activeCategory) return
    setIsLoading(true)
    setActiveCategory(value)
    setTimeout(() => setIsLoading(false), 200)
  }

  return (
    <section className="bg-white py-6 md:py-10 overflow-hidden">
      <div className="pl-4 md:pl-10">

        {/* HEADER */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Kaliido Special
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Handpicked Just For You
        </p>

        {/* CATEGORY PILLS */}
        <div className="flex gap-2 md:gap-3 pr-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`
                px-4 md:px-6 py-2 rounded-full
                text-[13px] md:text-sm font-medium transition
                ${
                  cat.value === activeCategory
                    ? "border border-[#ff2e74] text-[#ff2e74]"
                    : "bg-[#ffeef2] hover:bg-pink-100"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS SLIDER ================= */}
        <div
          className={`
            flex gap-4 overflow-x-auto no-scrollbar pb-4 flex-nowrap
            transition-opacity duration-200
            ${isLoading ? "opacity-0" : "opacity-100"}
          `}
        >
          {isInitialLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-none w-[62vw] sm:w-[42vw] md:w-[18.5vw]"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : filteredProducts.map((product) => (
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