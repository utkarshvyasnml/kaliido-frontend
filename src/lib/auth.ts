const STRAPI_URL = "http://localhost:1337"

/* ===============================
   AUTH API (LOGIN / REGISTER)
=============================== */

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  })

  if (!res.ok) throw new Error("Invalid credentials")

  return res.json() // { jwt, user }
}

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  const res = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })

  if (!res.ok) throw new Error("Signup failed")

  return res.json() // { jwt, user }
}

/* ===============================
   AUTH TOKEN HELPERS (🔥 IMPORTANT)
=============================== */

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("token")
}

export function setAuthToken(token: string) {
  if (typeof window === "undefined") return
  localStorage.setItem("token", token)
}

export function removeAuthToken() {
  if (typeof window === "undefined") return
  localStorage.removeItem("token")
}

/* ===============================
   USER HELPERS (OPTIONAL BUT GOOD)
=============================== */

export function getAuthUser() {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export function setAuthUser(user: any) {
  if (typeof window === "undefined") return
  localStorage.setItem("user", JSON.stringify(user))
}

export function removeAuthUser() {
  if (typeof window === "undefined") return
  localStorage.removeItem("user")
}