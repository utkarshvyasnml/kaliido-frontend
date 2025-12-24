"use client"

import ProductActions from "@/components/ProductActions"
import { Star } from "lucide-react"

type Product = {
  id: number
  title: string
  price: number
  mrp?: number
  rating?: number
  reviews_count?: number
  description?: string
  thumbnail?: {
    url: string
  } | null
}

export default function ProductInfo({ product }: { product: Product }) {
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : null

  return (
    <div className="space-y-3 mt-1 md:mt-0">

      {/* ================= TITLE ================= */}
      <h1 className="text-2xl md:text-3xl font-semibold">
        {product.title}
      </h1>

      {/* ================= RATING ================= */}
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              fill={i <= (product.rating ?? 0) ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm">
          ({product.reviews_count ?? 0} Reviews)
        </span>
      </div>

      {/* ================= PRICE + QTY ROW ================= */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          {product.mrp && (
            <span className="line-through text-gray-400">
              ₹{product.mrp}
            </span>
          )}

          {discount && (
            <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
              Save {discount}%
            </span>
          )}
        </div>
      </div>

      {/* ================= ADD TO CART ================= */}
      <ProductActions product={product} />

      {/* ================= PROMO BOX ================= */}
      <div className="border border-pink-500 rounded-2xl p-4 space-y-6 bg-pink-50">
        <div className="flex items-center gap-3">
          <span className="text-xl">🎁</span>
          <span className="font-medium">
            Secret Santa Gift above ₹599
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl">💎</span>
          <span className="font-medium">
            Free Jewellery Organiser above ₹1299
          </span>
        </div>
      </div>

      {/* ================= TRUST STRIP ================= */}
      <div className="grid grid-cols-3 text-center gap-4 py-6 border-t border-b">
        <div>
          <div className="text-2xl">📦</div>
          <p className="font-medium">Easy Returns</p>
          <p className="text-sm text-gray-500">COD Available</p>
        </div>
        <div>
          <div className="text-2xl">💖</div>
          <p className="font-medium">12L+ Customers</p>
          <p className="text-sm text-gray-500">4.8 Google Rating</p>
        </div>
        <div>
          <div className="text-2xl">📞</div>
          <p className="font-medium">Support</p>
          <p className="text-sm text-gray-500">10:30am–5:30pm</p>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      {product.description && (
        <details className="group border rounded-2xl px-5 py-4">
          <summary className="flex justify-between items-center cursor-pointer font-semibold">
            Description
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="text-gray-600 mt-3 leading-relaxed">
            {product.description}
          </p>
        </details>
      )}

      {/* ================= FAQ ================= */}
      <details className="group border rounded-2xl px-5 py-4">
        <summary className="flex justify-between items-center cursor-pointer font-semibold">
          Frequently Asked Questions
          <span className="group-open:rotate-180 transition">⌄</span>
        </summary>
        <p className="text-gray-600 mt-3">
          This jewellery is anti-tarnish, skin-safe and perfect for daily wear.
        </p>
      </details>
    </div>
  )
}