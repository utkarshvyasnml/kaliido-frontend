"use client"

import { useState } from "react"
import FilterSidebar from "@/components/shop/FilterSidebar"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/types/product"

type Props = {
  products: Product[]
}

export default function ShopClient({ products }: Props) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  return (
    <div className="flex gap-8">
      {/* FILTER */}
      <FilterSidebar
        value={priceRange}
        onChange={(min, max) => setPriceRange([min, max])}
      />

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}