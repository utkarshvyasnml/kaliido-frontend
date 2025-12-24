"use client"

import { X, Minus, Plus, Trash } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import { useEffect, useState } from "react"
import { fetchProducts, Product } from "@/lib/strapi"

const FREE_SHIPPING_LIMIT = 499

export default function MiniCart() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
    addItem,
  } = useCartStore()

  const [recommended, setRecommended] = useState<Product[]>([])

  useEffect(() => {
    async function loadRecommended() {
      const products = await fetchProducts()
      setRecommended(products.slice(0, 6))
    }

    if (isOpen) loadRecommended()
  }, [isOpen])

  /* 🔥🔥🔥 CRITICAL FIX */
  if (!isOpen) return null

  const remaining = Math.max(FREE_SHIPPING_LIMIT - subtotal, 0)
  const progress = Math.min((subtotal / FREE_SHIPPING_LIMIT) * 100, 100)

  /* ================= EMPTY CART ================= */
  if (items.length === 0) {
    return (
      <>
        {/* BACKDROP */}
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/40 z-50"
        />

        {/* DRAWER */}
        <div className="fixed top-0 right-0 z-50 h-full w-[92%] sm:w-[420px] bg-white rounded-l-2xl flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
              🛍️
            </div>

            <h3 className="text-xl font-semibold">
              Your cart is empty!
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Time to add your favourites ✨
            </p>

            <button
              onClick={closeCart}
              className="mt-6 px-8 py-3 rounded-full bg-[#ff2e74] text-white font-semibold"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </>
    )
  }

  /* ================= CART WITH ITEMS ================= */
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 z-50"
      />

      {/* DRAWER */}
      <div className="fixed top-0 right-0 z-50 h-full w-[92%] sm:w-[420px] bg-white rounded-l-2xl flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">My Cart</h3>
          <button onClick={closeCart}>
            <X />
          </button>
        </div>

        {/* FREE SHIPPING */}
        <div className="p-4 border-b">
          <p className="text-sm font-medium text-center">
            {remaining > 0 ? (
              <>
                Add <span className="text-[#ff2e74] font-semibold">₹{remaining}</span> to get Free Shipping
              </>
            ) : (
              <span className="text-green-600">🎉 Free Shipping unlocked!</span>
            )}
          </p>

          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ff2e74]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4 border-b">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}

                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-2">
                    {item.title}
                  </p>

                  <p className="text-[#ff2e74] font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => decreaseQty(item.id)} className="w-7 h-7 border rounded">
                      <Minus size={14} />
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => increaseQty(item.id)} className="w-7 h-7 border rounded">
                      <Plus size={14} />
                    </button>

                    <button onClick={() => removeItem(item.id)} className="ml-auto text-gray-400">
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {recommended.length > 0 && (
            <div className="p-4">
              <h4 className="font-semibold mb-3">You may also like</h4>

              <div className="flex gap-4 overflow-x-auto no-scrollbar">
                {recommended.map((product) => (
                  <div key={product.id} className="min-w-[140px]">
                    <img
                      src={product.thumbnail?.url}
                      className="w-full h-36 rounded-xl object-cover"
                    />
                    <p className="text-sm mt-2 line-clamp-2">{product.title}</p>
                    <p className="font-semibold">₹{product.price}</p>

                    <button
                      onClick={() =>
                        addItem({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.thumbnail?.url ?? null,
                        })
                      }
                      className="text-[#ff2e74] text-sm font-semibold mt-1"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-3">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-lg">₹{subtotal}</span>
          </div>

          <button className="w-full py-3 rounded-full bg-[#ff2e74] text-white font-bold">
            BUY NOW →
          </button>
        </div>
      </div>
    </>
  )
}