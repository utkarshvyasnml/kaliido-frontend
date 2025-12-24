"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import ProductCardSkeleton from "@/components/ProductCardSkeleton"
import ViewAllButton from "@/components/ui/ViewAllButton"
import { fetchProducts } from "@/lib/strapi"

export default function AntiTarnishSection() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchProducts("anti-tarnish")
      setProducts(data || [])
      setLoading(false)
    }
    load()
  }, [])

  if (!loading && products.length === 0) return null

  return (
    <section className="bg-white py-5 md:py-8 overflow-hidden">
      <div className="pl-4 md:pl-8">

        {/* HEADER */}
        <div className="flex items-start justify-between pr-4 md:pr-8 mb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Anti Tarnish
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Shine that Won’t Ghost You
            </p>
          </div>

          <ViewAllButton href="/anti-tarnish" />
        </div>

        {/* PRODUCTS SLIDER */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-none w-[46vw] md:w-[18.5vw]"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-[46vw] md:w-[18.5vw]"
                >
                  <ProductCard product={product} />
                </div>
              ))}

          <div className="flex-none w-4" />
        </div>

      </div>
    </section>
  )
}