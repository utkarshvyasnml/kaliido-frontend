"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CartItem, addToCart, getCart, getCartCount } from "@/lib/cart"

type CartContextType = {
  items: CartItem[]
  count: number
  add: (item: CartItem) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const cart = getCart()
    setItems(cart)
    setCount(getCartCount())
  }, [])

  const add = (item: CartItem) => {
    const updated = addToCart(item)
    setItems([...updated])
    setCount(getCartCount())
  }

  return (
    <CartContext.Provider value={{ items, count, add }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}