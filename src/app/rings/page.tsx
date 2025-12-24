import ShopLayout from "@/components/shop/ShopLayout"
import { fetchProducts, Product } from "@/lib/strapi"

export default async function RingsPage() {
  const products: Product[] = await fetchProducts("rings")

  return (
    <main>
      <ShopLayout products={products} />
    </main>
  )
}