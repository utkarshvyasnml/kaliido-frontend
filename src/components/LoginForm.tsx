"use client"

import { useState } from "react"
import { loginUser } from "@/lib/auth"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"
import PrimaryButton from "@/components/ui/PrimaryButton"

export default function LoginForm() {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError("")

      const res = await loginUser(email, password)
      login(res.jwt, res.user)

      router.push("/")
    } catch (e: any) {
      setError("Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border px-4 py-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border px-4 py-3 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <PrimaryButton full onClick={handleSubmit} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </PrimaryButton>
    </div>
  )
}