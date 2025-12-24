import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
  id: number
  title: string
  price: number
  image?: string | null
  qty: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  totalQty: number
  subtotal: number

  openCart: () => void
  closeCart: () => void

  addItem: (item: Omit<CartItem, "qty">) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeItem: (id: number) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      totalQty: 0,
      subtotal: 0,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (item) => {
        const items = get().items
        const existing = items.find((i) => i.id === item.id)

        let updatedItems

        if (existing) {
          updatedItems = items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          )
        } else {
          updatedItems = [...items, { ...item, qty: 1 }]
        }

        set({
          items: updatedItems,
          isOpen: true,
          totalQty: updatedItems.reduce((s, i) => s + i.qty, 0),
          subtotal: updatedItems.reduce((s, i) => s + i.qty * i.price, 0),
        })
      },

      increaseQty: (id) => {
        const items = get().items.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        )
        set({
          items,
          totalQty: items.reduce((s, i) => s + i.qty, 0),
          subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
        })
      },

      decreaseQty: (id) => {
        const items = get().items
          .map((i) =>
            i.id === id ? { ...i, qty: i.qty - 1 } : i
          )
          .filter((i) => i.qty > 0)

        set({
          items,
          totalQty: items.reduce((s, i) => s + i.qty, 0),
          subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
        })
      },

      removeItem: (id) => {
        const items = get().items.filter((i) => i.id !== id)
        set({
          items,
          totalQty: items.reduce((s, i) => s + i.qty, 0),
          subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
        })
      },
    }),
    { name: "kaliido-cart" }
  )
)