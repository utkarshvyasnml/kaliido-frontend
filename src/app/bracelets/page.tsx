import ShopLayout from "@/components/shop/ShopLayout"
import { fetchProducts, Product } from "@/lib/strapi"

export default async function BraceletsPage() {
  const products: Product[] = await fetchProducts("bracelets")

  return (
    <main>
      <ShopLayout products={products} />
    </main>
  )
}