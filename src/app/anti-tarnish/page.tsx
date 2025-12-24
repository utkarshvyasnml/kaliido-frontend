import ShopLayout from "@/components/shop/ShopLayout"
import { fetchProducts, Product } from "@/lib/strapi"

export default async function AntiTarnishPage() {
  const products: Product[] = await fetchProducts("anti-tarnish")

  return (
    <main>
      <ShopLayout products={products} />
    </main>
  )
}