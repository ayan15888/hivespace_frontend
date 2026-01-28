import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Docs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black900">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
        ]}
        buttons={[
          { path: "/login", label: "Login" },
          { path: "/register", label: "Register" },
        ]}
      />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 space-y-14">

          {/* Header */}
          <header className="space-y-4">
            <Badge className="border border-dashed border-slate-200 bg-amber-50 text-amber-700">
              HiveSpace Documentation
            </Badge>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              HiveSpace Documentation
            </h1>

            <p className="max-w-3xl text-black600 text-sm sm:text-base">
              HiveSpace is an opinionated, Jira-style project management tool.
              It enforces a simple hierarchy and a shared task vocabulary so
              teams stay aligned without overthinking the process.
            </p>
          </header>

          {/* Section: Core Concepts */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Core concepts</h2>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle>Hierarchy model</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-black700">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Organization</strong> – Top-level container.
                    Represents a company, client, or studio.
                  </li>
                  <li>
                    <strong>Workspace</strong> – Logical grouping inside an
                    organization (Engineering, Product, Design).
                  </li>
                  <li>
                    <strong>Project</strong> – A concrete initiative inside a
                    workspace (Onboarding v2, Billing Revamp).
                  </li>
                  <li>
                    <strong>Team</strong> – The execution unit. Teams own boards
                    and move tasks.
                  </li>
                </ol>

                <p>
                  This structure prevents chaos. Every task always belongs to a
                  team, a project, a workspace, and an organization — no
                  ambiguity.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section: Example */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Example setup</h2>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle>Product company example</CardTitle>
              </CardHeader>

              <CardContent className="text-sm text-black700 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Organization:</strong> Acme Inc.</li>
                  <li><strong>Workspace:</strong> Product</li>
                  <li>
                    <strong>Projects:</strong> Web Platform, Mobile App, Growth
                  </li>
                  <li>
                    <strong>Teams:</strong> Core, Platform, Mobile, Growth
                  </li>
                </ul>

                <p className="text-xs text-black500">
                  Agencies can treat each client as an organization and reuse
                  the same structure.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section: Boards */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Team boards</h2>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle>Status system</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm text-black700">
                <p>
                  Each task card has exactly one core status. These statuses are
                  shared across all teams for consistent reporting.
                </p>

                <ul className="pl-4 space-y-1">
                  <li><code>To do</code> – Approved work not started</li>
                  <li><code>Pending</code> – Blocked or waiting</li>
                  <li><code>Done</code> – Completed and verified</li>
                  <li><code>Error</code> – Execution failure</li>
                  <li><code>Bug</code> – Tracked defect</li>
                </ul>

                <p>
                  Teams are free to customize columns (Backlog, In progress,
                  Review). The status tag keeps analytics clean.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section: Getting Started */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Getting started</h2>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle>Basic workflow</CardTitle>
              </CardHeader>

              <CardContent className="text-sm text-black">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create an organization</li>
                  <li>Create a workspace</li>
                  <li>Create one or more projects</li>
                  <li>Add teams to a project</li>
                  <li>Create tasks and move them across the board</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Recap */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Summary</h2>

            <Card className="border-dashed border-slate-200">
              <CardContent className="text-md text-black space-y-2 pt-6">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Strict hierarchy keeps structure predictable</li>
                  <li>Teams are the execution unit</li>
                  <li>Shared status vocabulary simplifies reporting</li>
                  <li>Flexible boards, consistent data</li>
                </ul>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Docs
