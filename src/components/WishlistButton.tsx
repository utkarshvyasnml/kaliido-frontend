"use client"

import { Heart } from "lucide-react"
import { useWishlistStore } from "@/store/wishlistStore"

type Props = {
  product: {
    id: number
    title: string
    price: number
    slug: string
    thumbnail?: { url: string } | null
  }
}

export default function WishlistButton({ product }: Props) {
  const toggle = useWishlistStore((s) => s.toggle)
  const isInWishlist = useWishlistStore((s) =>
    s.isInWishlist(product.id)
  )

  return (
    <button
      onClick={() =>
        toggle({
          id: product.id,
          title: product.title,
          price: product.price,
          slug: product.slug,
          image: product.thumbnail?.url ?? null,
        })
      }
      className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow"
    >
      <Heart
        size={18}
        className={
          isInWishlist
            ? "fill-[#ff2e74] text-[#ff2e74]"
            : "text-gray-400"
        }
      />
    </button>
  )
}