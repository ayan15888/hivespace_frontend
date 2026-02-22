import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { Users, Plus, UserPlus } from "lucide-react"
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
import type { Team } from "../types/hierarchy"

const ProjectDetail = () => {
  const { orgId, workspaceId, projectId } = useParams<{ orgId: string; workspaceId: string; projectId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [teams, setTeams] = useState<Team[]>([])
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [teamName, setTeamName] = useState("")
  const [teamDescription, setTeamDescription] = useState("")
  const [createError, setCreateError] = useState<string | null>(null)
  const [projectName, setProjectName] = useState("Project Name") // TODO: Fetch from API
  const [orgName, setOrgName] = useState("Organization Name") // TODO: Fetch from API
  const [workspaceName, setWorkspaceName] = useState("Workspace Name") // TODO: Fetch from API

  useEffect(() => {
    if (location.state) {
      const state = location.state as { orgName?: string; workspaceName?: string; projectName?: string }
      if (state.orgName) setOrgName(state.orgName)
      if (state.workspaceName) setWorkspaceName(state.workspaceName)
      if (state.projectName) setProjectName(state.projectName)
    }
  }, [location.state])

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError(null)
    const name = teamName.trim()
    if (!name) {
      setCreateError("Please enter a team name.")
      return
    }
    const newTeam: Team = {
      id: crypto.randomUUID(),
      name,
      description: teamDescription.trim() || undefined,
      projectId: projectId!,
      employees: [],
      createdAt: new Date().toISOString(),
    }
    setTeams((prev) => [...prev, newTeam])
    setTeamName("")
    setTeamDescription("")
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
                  <BreadcrumbLink asChild>
                    <Link to={`/organization/${orgId}/workspace/${workspaceId}`}>{workspaceName}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{projectName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Badge className="mb-2 border border-dashed border-slate-200 bg-white text-slate-600">
              Project
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {projectName}
            </h1>
            <p className="mt-1 text-slate-600">
              Manage teams and execution units for this project.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Teams ({teams.length})
            </h2>
            <Button
              onClick={() => setCreateModalOpen(true)}
              className="rounded-full bg-slate-900 text-white hover:bg-black"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Team
            </Button>
          </div>

          {teams.length === 0 ? (
            <Card className="rounded-2xl border-dashed border-slate-200 bg-white p-8 text-center">
              <Users className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-2 text-slate-600">
                No teams yet. Create your first team to get started.
              </p>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card
                  key={team.id}
                  className="cursor-pointer rounded-2xl border-dashed border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  onClick={() => navigate(`/organization/${orgId}/workspace/${workspaceId}/project/${projectId}/team/${team.id}`, {
                    state: { orgName, workspaceName, projectName, teamName: team.name }
                  })}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-emerald-50">
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <Badge variant="secondary" className="border-emerald-200 bg-emerald-50 text-emerald-800">
                        {team.employees.length} {team.employees.length === 1 ? "member" : "members"}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4 text-lg">{team.name}</CardTitle>
                    {team.description && (
                      <CardDescription className="mt-1">{team.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <UserPlus className="h-4 w-4" />
                      <span>Click to manage team members</span>
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
              <CardTitle className="text-lg">Create Team</CardTitle>
              <CardDescription>
                Create a new execution unit team.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleCreateTeam} className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="team-name">Team name</Label>
                <Input
                  id="team-name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Core Team"
                  className="border-slate-200 bg-white"
                  autoFocus
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="team-desc">Description (optional)</Label>
                <Input
                  id="team-desc"
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  placeholder="Main development team"
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
                    setTeamName("")
                    setTeamDescription("")
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

export default ProjectDetail
