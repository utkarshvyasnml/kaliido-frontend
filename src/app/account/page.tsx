"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"

export default function AccountPage() {
  const router = useRouter()
  const { user, isLoggedIn, logout } = useAuthStore()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) return null

  return (
    <div className="max-w-4xl mx-auto py-16 space-y-6">
      <h1 className="text-2xl font-semibold">
        Welcome, {user?.username}
      </h1>

      <p>Email: {user?.email}</p>

      <button
        onClick={() => {
          logout()
          router.push("/")
        }}
        className="bg-black text-white px-6 py-3"
      >
        Logout
      </button>
    </div>
  )
}