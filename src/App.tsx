import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Docs from "./components/Docs"
import LoadingSplash from "./components/LoadingSplash"
import Dashboard from "./pages/Dashboard"

const App = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSplash && <LoadingSplash />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
    </>
  )
}

export default App
