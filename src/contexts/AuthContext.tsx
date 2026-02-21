import { createContext, useCallback, useContext, useEffect, useState } from "react"

const AUTH_KEY = "hivespace_logged_in"

type AuthContextValue = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    setLoggedIn(stored === "true")
  }, [])

  const login = useCallback(() => {
    localStorage.setItem(AUTH_KEY, "true")
    setLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY)
    setLoggedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
