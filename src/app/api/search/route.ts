import { NextResponse } from "next/server"

const STRAPI_URL = "http://localhost:1337"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q")

  if (!q || q.length < 2) {
    return NextResponse.json([])
  }

  const res = await fetch(
    `${STRAPI_URL}/api/products?filters[title][$containsi]=${q}&populate=thumbnail`,
    { cache: "no-store" }
  )

  const json = await res.json()

  const products = (json.data || []).map((p: any) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    price: p.price,
    thumbnail: p.thumbnail
      ? {
          url: p.thumbnail.url.startsWith("/")
            ? `${STRAPI_URL}${p.thumbnail.url}`
            : p.thumbnail.url,
        }
      : null,
  }))

  return NextResponse.json(products)
}