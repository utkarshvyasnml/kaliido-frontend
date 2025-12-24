import ProductCard from "@/components/ProductCard"
import ViewAllButton from "@/components/ui/ViewAllButton"
import { fetchProducts } from "@/lib/strapi"

export default async function NewArrivals() {
  const products = await fetchProducts()

  if (!products || products.length === 0) return null

  return (
    <section className="bg-white py-6 md:py-10 overflow-hidden">
      <div className="pl-4 md:pl-8">

        {/* HEADER */}
        <div className="flex items-end justify-between pr-4 mb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              New Arrivals
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              You Blink, You Miss
            </p>
          </div>

          {/* VIEW ALL */}
          <ViewAllButton href="/shop-all" />
        </div>

        {/* PRODUCTS */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 items-stretch">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <div className="w-4 shrink-0" />
        </div>

      </div>
    </section>
  )
}