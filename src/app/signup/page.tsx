"use client"

import { useState } from "react"
import { registerUser } from "@/lib/auth"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignup() {
    try {
      const data = await registerUser(username, email, password)
      login({ user: data.user, jwt: data.jwt })
      router.push("/account")
    } catch {
      alert("Signup failed")
    }
  }

  return (
    <div className="max-w-md mx-auto py-16 space-y-4">
      <h1 className="text-2xl font-semibold">Create Account</h1>

      <input
        className="w-full border px-4 py-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

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
        onClick={handleSignup}
        className="w-full bg-black text-white py-3"
      >
        Sign Up
      </button>
    </div>
  )
}