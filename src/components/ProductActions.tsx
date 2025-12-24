"use client"

import { useState } from "react"
import { useCartStore } from "@/store/cartStore"
import PrimaryButton from "@/components/ui/PrimaryButton"

type Props = {
  product: {
    id: number
    title: string
    price: number
    thumbnail?: {
      url: string
    } | null
  }
}

export default function ProductActions({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)
  const [qty, setQty] = useState(1)

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail?.url ?? null,
      })
    }
  }

  return (
    <div className="space-y-4">

      {/* QTY SELECTOR */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-10 h-10 border rounded"
        >
          −
        </button>

        <span className="font-semibold">{qty}</span>

        <button
          onClick={() => setQty((q) => q + 1)}
          className="w-10 h-10 border rounded"
        >
          +
        </button>
      </div>

      {/* ADD TO CART */}
      <PrimaryButton full onClick={handleAddToCart}>
        Add to Cart
      </PrimaryButton>
    </div>
  )
}