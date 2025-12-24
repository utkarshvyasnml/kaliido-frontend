import { fetchProductBySlug, fetchProducts } from "@/lib/strapi"
import ProductGallery from "@/components/ProductGallery"
import ProductInfo from "@/components/ProductInfo"
import SimilarProducts from "@/components/SimilarProducts"
import ProductExtraFAQ from "@/components/ProductExtraFAQ"
import FooterLogoStrip from "@/components/FooterLogoStrip"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export default async function ProductPage({ params }: Props) {
  const product = await fetchProductBySlug(params.slug)

  if (!product) return notFound()

  /* ================= IMAGE LOGIC ================= */
  const mainImage = product.thumbnail ? [product.thumbnail] : []
  const galleryImages = product.gallery ?? []
  const images = [...mainImage, ...galleryImages]

  /* ================= SIMILAR PRODUCTS ================= */
  const allProducts = await fetchProducts(product.category)
  const similarProducts = allProducts.filter(
    (p) => p.slug !== product.slug
  )

  return (
    <>
      {/* ================= PRODUCT MAIN SECTION ================= */}
      <section
        className="
          max-w-7xl mx-auto
          px-0 md:px-4
          pt-0 md:pt-8
          pb-12
          grid md:grid-cols-2
          gap-2 md:gap-10
        "
      >
        {/* LEFT: PRODUCT IMAGES */}
        <ProductGallery images={images} />

        {/* RIGHT: PRODUCT INFO */}
        <div className="px-4 md:px-0">
          <ProductInfo product={product} />
        </div>
      </section>

      {/* ================= SIMILAR PRODUCTS (FULL WIDTH) ================= */}
      <SimilarProducts products={similarProducts} />

      {/* ================= CARE & SUPPORT (FULL WIDTH) ================= */}
      <ProductExtraFAQ />

      {/* ================= FOOTER LOGO STRIP (NO GAP ABOVE FOOTER) ================= */}
      <FooterLogoStrip />
    </>
  )
}