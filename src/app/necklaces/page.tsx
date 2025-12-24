import ShopLayout from "@/components/shop/ShopLayout"
import { fetchProducts, Product } from "@/lib/strapi"

export default async function NecklacesPage() {
  const products: Product[] = await fetchProducts("necklaces")

  return (
    <main>
      <ShopLayout products={products} />
    </main>
  )
}