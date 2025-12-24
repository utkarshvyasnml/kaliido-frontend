const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://attempts-development-inspection-tide.trycloudflare.com"

/* ===============================
   PRODUCT TYPE
=============================== */
export type Product = {
  id: number
  title: string
  price: number
  mrp?: number
  rating: number
  reviews_count: number
  category: string
  slug: string
  description?: string

  thumbnail?: {
    url: string
  } | null

  gallery?: {
    url: string
  }[]
}

/* ===============================
   FETCH ALL / CATEGORY PRODUCTS
   (Home, Category, Shop All)
=============================== */
export async function fetchProducts(
  category?: string
): Promise<Product[]> {
  const params = new URLSearchParams()

  // ✅ SAFE POPULATE (your old working way)
  params.append("populate", "thumbnail")
  params.append("sort", "id:desc")

  if (category) {
    params.append("filters[category][$eq]", category)
  }

  const url = `${STRAPI_URL}/api/products?${params.toString()}`
  console.log("👉 STRAPI PRODUCTS:", url)

  const res = await fetch(url, { cache: "no-store" })

  if (!res.ok) {
    console.error("STRAPI ERROR:", res.status)
    return []
  }

  const json = await res.json()

  return (json.data ?? []).map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    mrp: item.mrp,
    rating: item.rating ?? 0,
    reviews_count: item.reviews_count ?? 0,
    category: item.category,
    slug: item.slug,
    description: item.description ?? "",

    thumbnail: item.thumbnail
      ? {
          url: item.thumbnail.url.startsWith("/")
            ? `${STRAPI_URL}${item.thumbnail.url}`
            : item.thumbnail.url,
        }
      : null,
  }))
}

/* ===============================
   FETCH SINGLE PRODUCT BY SLUG
   (Product Detail Page)
=============================== */
export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  const params = new URLSearchParams()

  // ✅ IMPORTANT: SAME STYLE AS OLD (NO BREAKING)
  params.append("populate", "thumbnail")
  params.append("populate", "gallery")

  // ✅ slug decode (fix 404 for long slugs)
  params.append("filters[slug][$eq]", decodeURIComponent(slug))

  const url = `${STRAPI_URL}/api/products?${params.toString()}`
  console.log("👉 STRAPI PRODUCT:", url)

  const res = await fetch(url, { cache: "no-store" })

  if (!res.ok) {
    console.error("STRAPI ERROR:", res.status)
    return null
  }

  const json = await res.json()
  const item = json.data?.[0]

  if (!item) return null

  return {
    id: item.id,
    title: item.title,
    price: item.price,
    mrp: item.mrp,
    rating: item.rating ?? 0,
    reviews_count: item.reviews_count ?? 0,
    category: item.category,
    slug: item.slug,
    description: item.description ?? "",

    thumbnail: item.thumbnail
      ? {
          url: item.thumbnail.url.startsWith("/")
            ? `${STRAPI_URL}${item.thumbnail.url}`
            : item.thumbnail.url,
        }
      : null,

    // ✅ REAL STRAPI GALLERY (not dummy)
    gallery: Array.isArray(item.gallery)
      ? item.gallery.map((img: any) => ({
          url: img.url.startsWith("/")
            ? `${STRAPI_URL}${img.url}`
            : img.url,
        }))
      : [],
  }
}