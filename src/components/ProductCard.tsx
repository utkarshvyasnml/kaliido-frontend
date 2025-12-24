"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { useCartStore } from "@/store/cartStore"
import PrimaryButton from "@/components/ui/PrimaryButton"

type ProductCardProps = {
  product: any
}

type WishlistItem = {
  id: number
  title: string
  slug: string
  price: number
  image?: string | null
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null

  /* ================= IMAGE FIX ================= */
  let imageUrl: string | null = product.thumbnail?.url ?? null
  if (imageUrl?.startsWith("/")) {
    imageUrl = `http://localhost:1337${imageUrl}`
  }

  const price = product.price
  const mrp = product.mrp
  const rating = product.rating ?? 0
  const reviews = product.reviews_count ?? 0

  const discount =
    mrp && price && mrp > price
      ? Math.round(((mrp - price) / mrp) * 100)
      : null

  const addToCart = useCartStore((s) => s.addItem)

  /* ================= WISHLIST (LOCAL STORAGE) ================= */
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem("wishlist")
    if (!raw) return
    const items: WishlistItem[] = JSON.parse(raw)
    setIsWishlisted(items.some((i) => i.id === product.id))
  }, [product.id])

  function toggleWishlist(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    const raw = localStorage.getItem("wishlist")
    const items: WishlistItem[] = raw ? JSON.parse(raw) : []

    if (items.some((i) => i.id === product.id)) {
      const updated = items.filter((i) => i.id !== product.id)
      localStorage.setItem("wishlist", JSON.stringify(updated))
      setIsWishlisted(false)
    } else {
      items.push({
        id: product.id,
        title: product.title,
        slug: product.slug,
        price: product.price,
        image: imageUrl,
      })
      localStorage.setItem("wishlist", JSON.stringify(items))
      setIsWishlisted(true)
    }

    /* 🔔 notify header wishlist */
    window.dispatchEvent(new Event("wishlist-updated"))
  }

  return (
    <div className="flex flex-col w-full h-full">

      {/* ================= CLICKABLE AREA ================= */}
      <Link href={`/product/${product.slug}`} className="block">
        {/* IMAGE */}
        <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-gray-50 mb-3">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-100 text-xs">
              No Image
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col px-1">
          <h3 className="text-[14px] md:text-[15px] font-medium leading-snug text-gray-900 line-clamp-2 mb-1 min-h-[38px]">
            {product.title}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 mb-1">
            <div className="flex text-yellow-400 text-xs">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>
                  {i <= rating ? "★" : <span className="text-gray-200">★</span>}
                </span>
              ))}
            </div>
            <span className="text-gray-400 text-[10px] md:text-xs">
              ({reviews})
            </span>
          </div>

          {/* PRICE + WISHLIST */}
          <div className="flex items-center justify-between mt-[2px]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[15px] md:text-[16px] font-bold text-black">
                ₹{price}
              </span>

              {mrp && (
                <span className="text-[12px] line-through text-gray-400">
                  ₹{mrp}
                </span>
              )}

              {discount && (
                <span className="text-[10px] font-bold bg-pink-100 text-[#ff2e74] px-1.5 py-0.5 rounded-[4px]">
                  {discount}% Off
                </span>
              )}
            </div>

            {/* ❤️ WISHLIST ICON */}
            <button
              onClick={toggleWishlist}
              className="text-gray-400 hover:text-[#ff2e74] transition"
              aria-label="Wishlist"
            >
              <Heart
                size={18}
                className={
                  isWishlisted
                    ? "fill-[#ff2e74] text-[#ff2e74]"
                    : ""
                }
              />
            </button>
          </div>
        </div>
      </Link>

      {/* ================= ADD TO CART ================= */}
      <div className="pt-4 px-1">
        <PrimaryButton
          full
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: imageUrl,
            })
          }
        >
          Add to Cart
        </PrimaryButton>
      </div>
    </div>
  )
}