"use client"

import Link from "next/link"
import { useWishlistStore } from "@/store/wishlistStore"

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items)
  const remove = useWishlistStore((s) => s.remove)

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">
          Your wishlist is empty
        </h1>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-2xl font-semibold mb-6">
        Wishlist
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            {item.image && (
              <img
                src={item.image}
                className="w-full aspect-square object-cover"
              />
            )}

            <h3 className="mt-3 font-medium">
              {item.title}
            </h3>

            <p className="mt-1">₹{item.price}</p>

            <div className="flex justify-between mt-3">
              <Link
                href={`/product/${item.slug}`}
                className="underline"
              >
                View
              </Link>

              <button
                onClick={() => remove(item.id)}
                className="text-sm text-gray-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}