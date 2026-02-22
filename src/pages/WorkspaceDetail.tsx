import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { FolderOpen, Plus, Users } from "lucide-react"
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
import type { Project } from "../types/hierarchy"

const WorkspaceDetail = () => {
  const { orgId, workspaceId } = useParams<{ orgId: string; workspaceId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [projects, setProjects] = useState<Project[]>([])
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [createError, setCreateError] = useState<string | null>(null)
  const [workspaceName, setWorkspaceName] = useState("Workspace Name") // TODO: Fetch from API
  const [orgName, setOrgName] = useState("Organization Name") // TODO: Fetch from API

  useEffect(() => {
    if (location.state) {
      const state = location.state as { orgName?: string; workspaceName?: string }
      if (state.orgName) setOrgName(state.orgName)
      if (state.workspaceName) setWorkspaceName(state.workspaceName)
    }
  }, [location.state])

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError(null)
    const name = projectName.trim()
    if (!name) {
      setCreateError("Please enter a project name.")
      return
    }
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      description: projectDescription.trim() || undefined,
      workspaceId: workspaceId!,
      teams: [],
      createdAt: new Date().toISOString(),
    }
    setProjects((prev) => [...prev, newProject])
    setProjectName("")
    setProjectDescription("")
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
                  <BreadcrumbLink asChild>
                    <Link to={`/organization/${orgId}`}>{orgName}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{workspaceName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Badge className="mb-2 border border-dashed border-slate-200 bg-white text-slate-600">
              Workspace
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {workspaceName}
            </h1>
            <p className="mt-1 text-slate-600">
              Manage projects and initiatives within this workspace.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Projects ({projects.length})
            </h2>
            <Button
              onClick={() => setCreateModalOpen(true)}
              className="rounded-full bg-slate-900 text-white hover:bg-black"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>

          {projects.length === 0 ? (
            <Card className="rounded-2xl border-dashed border-slate-200 bg-white p-8 text-center">
              <FolderOpen className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-2 text-slate-600">
                No projects yet. Create your first project to get started.
              </p>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="cursor-pointer rounded-2xl border-dashed border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  onClick={() => navigate(`/organization/${orgId}/workspace/${workspaceId}/project/${project.id}`, {
                    state: { orgName, workspaceName, projectName: project.name }
                  })}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-purple-50">
                        <FolderOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <Badge variant="secondary" className="border-purple-200 bg-purple-50 text-purple-800">
                        {project.teams.length} {project.teams.length === 1 ? "team" : "teams"}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-lg">{project.name}</CardTitle>
                    {project.description && (
                      <CardDescription className="mt-1">{project.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>
                        {project.teams.reduce((acc, t) => acc + t.employees.length, 0)} employees
                      </span>
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
              <CardTitle className="text-lg">Create Project</CardTitle>
              <CardDescription>
                Create a new project initiative.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleCreateProject} className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="project-name">Project name</Label>
                <Input
                  id="project-name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Web Platform"
                  className="border-slate-200 bg-white"
                  autoFocus
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-desc">Description (optional)</Label>
                <Input
                  id="project-desc"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Main web application platform"
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
                    setProjectName("")
                    setProjectDescription("")
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

export default WorkspaceDetail
