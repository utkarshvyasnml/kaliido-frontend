"use client"

import { useState } from "react"
import { registerUser } from "@/lib/auth"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"
import PrimaryButton from "@/components/ui/PrimaryButton"

export default function SignupForm() {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    const res = await registerUser(username, email, password)
    login(res.jwt, res.user)
    router.push("/")
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Create Account</h1>

      <input
        placeholder="Name"
        className="w-full border px-4 py-3 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
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

      <PrimaryButton full onClick={handleSubmit} disabled={loading}>
        Sign Up
      </PrimaryButton>
    </div>
  )
}