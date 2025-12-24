export type Product = {
  id: number
  title: string
  price: number
  mrp?: number
  rating?: number
  reviews_count?: number
  thumbnail?: {
    url: string
  } | null
  category?: string
}