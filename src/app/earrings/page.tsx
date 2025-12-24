import ShopLayout from "@/components/shop/ShopLayout"
import { fetchProducts, Product } from "@/lib/strapi"

export default async function EarringsPage() {
  const products: Product[] = await fetchProducts("earrings")

  return (
    <main>
      <ShopLayout products={products} />
    </main>
  )
}