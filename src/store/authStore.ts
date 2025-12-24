import { create } from "zustand"

type AuthState = {
  user: any | null
  jwt: string | null
  isLoggedIn: boolean
  login: (data: { user: any; jwt: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  jwt: null,
  isLoggedIn: false,

  login: ({ user, jwt }) => {
    localStorage.setItem("token", jwt)
    localStorage.setItem("user", JSON.stringify(user))

    set({
      user,
      jwt,
      isLoggedIn: true,
    })
  },

  logout: () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    set({
      user: null,
      jwt: null,
      isLoggedIn: false,
    })
  },
}))