export type CartItem = {
  id: number
  title: string
  price: number
  thumbnail?: string
  qty: number
}

const CART_KEY = "kaliido_cart"

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(CART_KEY)
  return data ? JSON.parse(data) : []
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function addToCart(item: CartItem) {
  const cart = getCart()
  const existing = cart.find((i) => i.id === item.id)

  if (existing) {
    existing.qty += 1
  } else {
    cart.push(item)
  }

  saveCart(cart)
  return cart
}

export function removeFromCart(id: number) {
  const cart = getCart().filter((i) => i.id !== id)
  saveCart(cart)
  return cart
}

export function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0)
}