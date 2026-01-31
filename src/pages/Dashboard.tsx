import { useState } from "react"
import { Building2, KeyRound, Sparkles, X } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Badge } from "../components/ui/badge"

type OrgItem = {
  id: string
  name: string
  type: "created" | "joined"
}

const Dashboard = () => {
  const [orgs, setOrgs] = useState<OrgItem[]>([])
  const [joinModalOpen, setJoinModalOpen] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [joinError, setJoinError] = useState<string | null>(null)
  const [createName, setCreateName] = useState("")
  const [createDescription, setCreateDescription] = useState("")
  const [createError, setCreateError] = useState<string | null>(null)

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setJoinError(null)
    const code = accessCode.trim()
    if (!code) {
      setJoinError("Please enter an access code.")
      return
    }
    // TODO: call API to join with code; for now simulate success
    setOrgs((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: `Organization (${code.slice(0, 6)}…)`, type: "joined" },
    ])
    setAccessCode("")
    setJoinModalOpen(false)
  }

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError(null)
    const name = createName.trim()
    if (!name) {
      setCreateError("Please enter an organization name.")
      return
    }
    setOrgs((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, type: "created" },
    ])
    setCreateName("")
    setCreateDescription("")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
          { path: "/dashboard", label: "Dashboard" },
        ]}
        buttons={[{ label: "Log out", path: "/" }]}
      />

      <main className="flex-1 border-t border-dashed border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
          <div className="mb-8">
            <Badge className="mb-2 border border-dashed border-slate-200 bg-white text-slate-600">
              Dashboard
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your organizations
            </h1>
            <p className="mt-1 text-slate-600">
              Create a new organization or join one with an access code.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="rounded-2xl border-dashed border-slate-200 bg-white shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-amber-50">
                  <Building2 className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Create organization</CardTitle>
                <CardDescription>
                  Start a new organization and invite your team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="org-name">Organization name</Label>
                    <Input
                      id="org-name"
                      value={createName}
                      onChange={(e) => setCreateName(e.target.value)}
                      placeholder="Acme Inc."
                      className="border-slate-200 bg-white"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-desc">Description (optional)</Label>
                    <Input
                      id="org-desc"
                      value={createDescription}
                      onChange={(e) => setCreateDescription(e.target.value)}
                      placeholder="Product & engineering"
                      className="border-slate-200 bg-white"
                    />
                  </div>
                  {createError && (
                    <p className="text-sm text-red-600">{createError}</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-slate-900 text-white hover:bg-black"
                  >
                    Create organization
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-dashed border-slate-200 bg-white shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-sky-50">
                  <KeyRound className="h-5 w-5 text-sky-600" />
                </div>
                <CardTitle className="text-lg">Join organization</CardTitle>
                <CardDescription>
                  Enter an access code from your team to join.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  type="button"
                  onClick={() => {
                    setJoinModalOpen(true)
                    setAccessCode("")
                    setJoinError(null)
                  }}
                  className="w-full rounded-full border border-dashed border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                >
                  Join with access code
                </Button>
              </CardContent>
            </Card>
          </div>

          {orgs.length > 0 && (
            <section className="mt-10">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Your organizations
              </h2>
              <ul className="space-y-3">
                {orgs.map((org) => (
                  <li
                    key={org.id}
                    className="flex items-center justify-between rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="font-medium text-slate-900">{org.name}</span>
                    <Badge
                      variant="secondary"
                      className={
                        org.type === "created"
                          ? "border-amber-200 bg-amber-50 text-amber-800"
                          : "border-sky-200 bg-sky-50 text-sky-800"
                      }
                    >
                      {org.type === "created" ? "Created" : "Joined"}
                    </Badge>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {orgs.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
              <Sparkles className="mx-auto h-10 w-10 text-amber-400" />
              <p className="mt-2 text-slate-600">
                No organizations yet. Create one or join with an access code.
              </p>
            </div>
          )}
        </div>
      </main>

      {joinModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setJoinModalOpen(false)}
        >
          <Card
            className="relative mx-4 w-full max-w-sm rounded-2xl border-dashed border-slate-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Join with access code</CardTitle>
              <button
                type="button"
                onClick={() => setJoinModalOpen(false)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <CardDescription className="mt-1">
              Enter the code shared by your organization admin.
            </CardDescription>
            <form onSubmit={handleJoinSubmit} className="mt-4 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="access-code">Access code</Label>
                <Input
                  id="access-code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="e.g. ABC-XYZ-123"
                  className="border-slate-200 bg-white font-mono"
                  autoFocus
                />
              </div>
              {joinError && (
                <p className="text-sm text-red-600">{joinError}</p>
              )}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 rounded-full border-dashed border-slate-300"
                  onClick={() => setJoinModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 rounded-full bg-slate-900 text-white hover:bg-black"
                >
                  Join
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

export default Dashboard
