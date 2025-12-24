import { getAuthToken } from "@/lib/auth"

const STRAPI_URL = "http://localhost:1337"

/* ===============================
   GET USER WISHLIST
=============================== */
export async function getWishlist() {
  const token = getAuthToken()
  if (!token) throw new Error("Not authenticated")

  const res = await fetch(`${STRAPI_URL}/api/users/me?populate=wishlist.thumbnail`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) throw new Error("Failed to fetch wishlist")

  const user = await res.json()
  return user.wishlist || []
}

/* ===============================
   ADD TO WISHLIST
=============================== */
export async function addToWishlist(productId: number) {
  const token = getAuthToken()
  if (!token) throw new Error("Not authenticated")

  const res = await fetch(`${STRAPI_URL}/api/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      wishlist: {
        connect: [productId],
      },
    }),
  })

  if (!res.ok) throw new Error("Failed to add to wishlist")
}

/* ===============================
   REMOVE FROM WISHLIST
=============================== */
export async function removeFromWishlist(productId: number) {
  const token = getAuthToken()
  if (!token) throw new Error("Not authenticated")

  const res = await fetch(`${STRAPI_URL}/api/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      wishlist: {
        disconnect: [productId],
      },
    }),
  })

  if (!res.ok) throw new Error("Failed to remove from wishlist")
}