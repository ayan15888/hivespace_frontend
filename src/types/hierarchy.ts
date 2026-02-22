export interface Employee {
  id: string
  name: string
  email: string
  role?: string
  avatar?: string
  createdAt: string
}

export interface Team {
  id: string
  name: string
  description?: string
  projectId: string
  employees: Employee[]
  createdAt: string
}

export interface Project {
  id: string
  name: string
  description?: string
  workspaceId: string
  teams: Team[]
  createdAt: string
}

export interface Workspace {
  id: string
  name: string
  description?: string
  organizationId: string
  projects: Project[]
  createdAt: string
}

export interface Organization {
  id: string
  name: string
  description?: string
  workspaces: Workspace[]
  createdAt: string
  type: "created" | "joined"
}
