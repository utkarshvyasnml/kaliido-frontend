import { fetchProducts } from "@/lib/strapi";
import ShopLayout from "@/components/shop/ShopLayout";
import { Product } from "@/types/product";

export default async function ShopAllPage() {
  const products: Product[] = await fetchProducts();

  return <ShopLayout products={products} />;
}