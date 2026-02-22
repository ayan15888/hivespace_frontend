import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { UserPlus, Plus, Mail, Briefcase, X } from "lucide-react"
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
import type { Employee } from "../types/hierarchy"

const TeamDetail = () => {
  const { orgId, workspaceId, projectId, teamId } = useParams<{
    orgId: string
    workspaceId: string
    projectId: string
    teamId: string
  }>()
  const navigate = useNavigate()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [employeeName, setEmployeeName] = useState("")
  const [employeeEmail, setEmployeeEmail] = useState("")
  const [employeeRole, setEmployeeRole] = useState("")
  const [addError, setAddError] = useState<string | null>(null)
  const [teamName, setTeamName] = useState("Team Name") // TODO: Fetch from API
  const [orgName, setOrgName] = useState("Organization Name") // TODO: Fetch from API
  const [workspaceName, setWorkspaceName] = useState("Workspace Name") // TODO: Fetch from API
  const [projectName, setProjectName] = useState("Project Name") // TODO: Fetch from API
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      const state = location.state as { orgName?: string; workspaceName?: string; projectName?: string; teamName?: string }
      if (state.orgName) setOrgName(state.orgName)
      if (state.workspaceName) setWorkspaceName(state.workspaceName)
      if (state.projectName) setProjectName(state.projectName)
      if (state.teamName) setTeamName(state.teamName)
    }
  }, [location.state])

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault()
    setAddError(null)
    const name = employeeName.trim()
    const email = employeeEmail.trim()
    if (!name) {
      setAddError("Please enter an employee name.")
      return
    }
    if (!email) {
      setAddError("Please enter an email address.")
      return
    }
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAddError("Please enter a valid email address.")
      return
    }
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      name,
      email,
      role: employeeRole.trim() || undefined,
      createdAt: new Date().toISOString(),
    }
    setEmployees((prev) => [...prev, newEmployee])
    setEmployeeName("")
    setEmployeeEmail("")
    setEmployeeRole("")
    setAddModalOpen(false)
  }

  const handleRemoveEmployee = (employeeId: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== employeeId))
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
                  <BreadcrumbLink asChild>
                    <Link to={`/organization/${orgId}/workspace/${workspaceId}/project/${projectId}`}>{projectName}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{teamName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Badge className="mb-2 border border-dashed border-slate-200 bg-white text-slate-600">
              Team
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {teamName}
            </h1>
            <p className="mt-1 text-slate-600">
              View and manage team members.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Team Members ({employees.length})
            </h2>
            <Button
              onClick={() => setAddModalOpen(true)}
              className="rounded-full bg-slate-900 text-white hover:bg-black"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>

          {employees.length === 0 ? (
            <Card className="rounded-2xl border-dashed border-slate-200 bg-white p-8 text-center">
              <UserPlus className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-2 text-slate-600">
                No team members yet. Add employees to get started.
              </p>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {employees.map((employee) => (
                <Card
                  key={employee.id}
                  className="rounded-2xl border-dashed border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-slate-200 bg-slate-100 text-slate-600">
                        <span className="text-lg font-semibold">
                          {employee.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveEmployee(employee.id)}
                        className="h-8 w-8 rounded-full p-0 text-slate-400 hover:text-red-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="mt-4 text-lg">{employee.name}</CardTitle>
                    {employee.role && (
                      <CardDescription className="mt-1 flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {employee.role}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {addModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setAddModalOpen(false)}
        >
          <Card
            className="relative mx-4 w-full max-w-md rounded-2xl border-dashed border-slate-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <CardTitle className="text-lg">Add Employee</CardTitle>
              <CardDescription>
                Add a new employee or team member to this team.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleAddEmployee} className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="employee-name">Name</Label>
                <Input
                  id="employee-name"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  placeholder="John Doe"
                  className="border-slate-200 bg-white"
                  autoFocus
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="employee-email">Email</Label>
                <Input
                  id="employee-email"
                  type="email"
                  value={employeeEmail}
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="border-slate-200 bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="employee-role">Role (optional)</Label>
                <Input
                  id="employee-role"
                  value={employeeRole}
                  onChange={(e) => setEmployeeRole(e.target.value)}
                  placeholder="Software Engineer"
                  className="border-slate-200 bg-white"
                />
              </div>
              {addError && (
                <p className="text-sm text-red-600">{addError}</p>
              )}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 rounded-full border-dashed border-slate-300"
                  onClick={() => {
                    setAddModalOpen(false)
                    setEmployeeName("")
                    setEmployeeEmail("")
                    setEmployeeRole("")
                    setAddError(null)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 rounded-full bg-slate-900 text-white hover:bg-black"
                >
                  Add Employee
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

export default TeamDetail
