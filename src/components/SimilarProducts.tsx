"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import PrimaryButton from "@/components/ui/PrimaryButton"

type Product = {
  id: number
  title: string
  price: number
  mrp?: number
  rating?: number
  slug: string
  thumbnail?: {
    url: string
  } | null
}

export default function SimilarProducts({
  products,
}: {
  products: Product[]
}) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <section
      className="
        w-screen
        relative
        left-1/2 right-1/2
        -ml-[55vw] -mr-[50vw]
        md:-ml-[50vw] md:-mr-[50vw]
        mt-20
      "
    >
      {/* TITLE */}
      <div className="px-6 md:px-14 mb-6">
        <h2
  className="
    font-Work_sans
    font-[400]
    text-[36px]
    leading-[43px]
    text-[#1A1A1A]
  "
>
  Similar Products
</h2>
      </div>

      {/* SLIDER */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-6 md:px-14 pb-8">
        {products.map((product) => {
          const imageUrl = product.thumbnail?.url ?? ""

          return (
            <div
              key={product.id}
              className="
                flex-shrink-0
                w-[48%] sm:w-[45%] md:w-[22%]
                flex flex-col
              "
            >
              {/* IMAGE */}
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </Link>

              {/* INFO */}
              <div className="mt-3 flex flex-col flex-grow">
                <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>

                <div className="flex items-center gap-1 text-yellow-400 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i <= (product.rating ?? 0) ? "#facc15" : "none"}
                      stroke="#facc15"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold">
                    ₹{product.price}
                  </span>

                  {product.mrp && (
                    <span className="line-through text-gray-400 text-sm">
                      ₹{product.mrp}
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <div className="mt-auto pt-3">
                  <PrimaryButton
                    full
                    onClick={() =>
                      addItem({
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
            </div>
          )
        })}
      </div>
    </section>
  )
}