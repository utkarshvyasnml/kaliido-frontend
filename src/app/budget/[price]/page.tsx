import ProductCard from "@/components/ProductCard"
import { fetchProducts } from "@/lib/strapi"

export default async function BudgetPage({
  params,
}: {
  params: { price: string }
}) {
  const maxPrice = Number(params.price)

  const products = await fetchProducts()

  const filtered = products.filter(
    (p) => p.price <= maxPrice
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">
        Products under ₹{maxPrice}
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-500">
          No products found under this price.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}