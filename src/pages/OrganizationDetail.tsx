import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { FolderKanban, Plus, Users } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Badge } from "../components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import type { Workspace } from "../types/hierarchy"

const OrganizationDetail = () => {
  const { orgId } = useParams<{ orgId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [workspaceName, setWorkspaceName] = useState("")
  const [workspaceDescription, setWorkspaceDescription] = useState("")
  const [createError, setCreateError] = useState<string | null>(null)
  const [orgName, setOrgName] = useState("Organization Name") // TODO: Fetch from API

  useEffect(() => {
    if (location.state) {
      const state = location.state as { orgName?: string }
      if (state.orgName) setOrgName(state.orgName)
    }
  }, [location.state])

  const handleCreateWorkspace = (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError(null)
    const name = workspaceName.trim()
    if (!name) {
      setCreateError("Please enter a workspace name.")
      return
    }
    const newWorkspace: Workspace = {
      id: crypto.randomUUID(),
      name,
      description: workspaceDescription.trim() || undefined,
      organizationId: orgId!,
      projects: [],
      createdAt: new Date().toISOString(),
    }
    setWorkspaces((prev) => [...prev, newWorkspace])
    setWorkspaceName("")
    setWorkspaceDescription("")
    setCreateModalOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
          { path: "/dashboard", label: "Dashboard" },
        ]}
      />

      <main className="flex-1 border-t border-dashed border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
          <div className="mb-8">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{orgName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Badge className="mb-2 border border-dashed border-slate-200 bg-white text-slate-600">
              Organization
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {orgName}
            </h1>
            <p className="mt-1 text-slate-600">
              Manage workspaces for departments or domains.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Workspaces ({workspaces.length})
            </h2>
            <Button
              onClick={() => setCreateModalOpen(true)}
              className="rounded-full bg-slate-900 text-white hover:bg-black"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Workspace
            </Button>
          </div>

          {workspaces.length === 0 ? (
            <Card className="rounded-2xl border-dashed border-slate-200 bg-white p-8 text-center">
              <FolderKanban className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-2 text-slate-600">
                No workspaces yet. Create your first workspace to get started.
              </p>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workspaces.map((workspace) => (
                <Card
                  key={workspace.id}
                  className="cursor-pointer rounded-2xl border-dashed border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  onClick={() => navigate(`/organization/${orgId}/workspace/${workspace.id}`, {
                    state: { orgName, workspaceName: workspace.name }
                  })}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-sky-50">
                        <FolderKanban className="h-5 w-5 text-sky-600" />
                      </div>
                      <Badge variant="secondary" className="border-sky-200 bg-sky-50 text-sky-800">
                        {workspace.projects.length} {workspace.projects.length === 1 ? "project" : "projects"}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-lg">{workspace.name}</CardTitle>
                    {workspace.description && (
                      <CardDescription className="mt-1">{workspace.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>{workspace.projects.reduce((acc, p) => acc + p.teams.length, 0)} teams</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {createModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setCreateModalOpen(false)}
        >
          <Card
            className="relative mx-4 w-full max-w-md rounded-2xl border-dashed border-slate-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <CardTitle className="text-lg">Create Workspace</CardTitle>
              <CardDescription>
                Create a new workspace for a department or domain.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleCreateWorkspace} className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="workspace-name">Workspace name</Label>
                <Input
                  id="workspace-name"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  placeholder="Engineering"
                  className="border-slate-200 bg-white"
                  autoFocus
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="workspace-desc">Description (optional)</Label>
                <Input
                  id="workspace-desc"
                  value={workspaceDescription}
                  onChange={(e) => setWorkspaceDescription(e.target.value)}
                  placeholder="Product development & engineering"
                  className="border-slate-200 bg-white"
                />
              </div>
              {createError && (
                <p className="text-sm text-red-600">{createError}</p>
              )}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 rounded-full border-dashed border-slate-300"
                  onClick={() => {
                    setCreateModalOpen(false)
                    setWorkspaceName("")
                    setWorkspaceDescription("")
                    setCreateError(null)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 rounded-full bg-slate-900 text-white hover:bg-black"
                >
                  Create
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default OrganizationDetail
