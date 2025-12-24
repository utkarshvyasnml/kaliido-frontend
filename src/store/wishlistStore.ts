import { create } from "zustand"
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/lib/wishlist"

type WishlistItem = {
  id: number
  title: string
  slug: string
  price: number
  thumbnail?: { url: string }
}

type WishlistState = {
  items: WishlistItem[]
  loading: boolean
  fetchWishlist: () => Promise<void>
  toggleWishlist: (product: WishlistItem) => Promise<void>
  isWishlisted: (id: number) => boolean
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  loading: false,

  fetchWishlist: async () => {
    set({ loading: true })
    const items = await getWishlist()
    set({ items, loading: false })
  },

  toggleWishlist: async (product) => {
    const exists = get().items.some((i) => i.id === product.id)

    if (exists) {
      await removeFromWishlist(product.id)
      set({
        items: get().items.filter((i) => i.id !== product.id),
      })
    } else {
      await addToWishlist(product.id)
      set({ items: [...get().items, product] })
    }
  },

  isWishlisted: (id) => {
    return get().items.some((i) => i.id === id)
  },
}))