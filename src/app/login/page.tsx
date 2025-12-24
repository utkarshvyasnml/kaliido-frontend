"use client"

import { useState } from "react"
import { loginUser } from "@/lib/auth"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    try {
      setLoading(true)
      const data = await loginUser(email, password)

      // ✅ ONLY ONE ARGUMENT
      login({ user: data.user, jwt: data.jwt })

      router.push("/account")
    } catch (err) {
      alert("Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto py-16 space-y-4">
      <h1 className="text-2xl font-semibold">Login</h1>

      <input
        className="w-full border px-4 py-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full border px-4 py-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full bg-black text-white py-3"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  )
}