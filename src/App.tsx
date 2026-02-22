import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Docs from "./components/Docs"
import LoadingSplash from "./components/LoadingSplash"
import Dashboard from "./pages/Dashboard"
import OrganizationDetail from "./pages/OrganizationDetail"
import WorkspaceDetail from "./pages/WorkspaceDetail"
import ProjectDetail from "./pages/ProjectDetail"
import TeamDetail from "./pages/TeamDetail"

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
        <Route path="/organization/:orgId" element={<OrganizationDetail />} />
        <Route path="/organization/:orgId/workspace/:workspaceId" element={<WorkspaceDetail />} />
        <Route path="/organization/:orgId/workspace/:workspaceId/project/:projectId" element={<ProjectDetail />} />
        <Route path="/organization/:orgId/workspace/:workspaceId/project/:projectId/team/:teamId" element={<TeamDetail />} />
      </Routes>
    </>
  )
}

export default App
