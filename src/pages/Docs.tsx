import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Docs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
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

      <main className="flex-1 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 sm:px-10">
          <header className="space-y-4">
            <Badge className="border border-dashed border-slate-200 bg-amber-50 text-amber-700">
              HiveSpace documentation
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              From organization to team board, step by step
            </h1>
            <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
              HiveSpace is a playful Jira-style tool built around a simple, opinionated structure:{" "}
              <span className="font-semibold">organizations → workspaces → projects → teams</span>. Every team gets a
              clean comic board with shared status tags: <span className="font-mono">To do</span>,{" "}
              <span className="font-mono">Pending</span>, <span className="font-mono">Done</span>,{" "}
              <span className="font-mono">Error</span>, and <span className="font-mono">Bug</span>.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">1. Model your hierarchy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    <span className="font-semibold">Organization</span> – the top container (e.g. your company, client,
                    or studio). Billing, settings, and people roll up here.
                  </li>
                  <li>
                    <span className="font-semibold">Workspace</span> – a focused area inside an org, usually per
                    department (Engineering, Design, Growth), business unit, or product line.
                  </li>
                  <li>
                    <span className="font-semibold">Project</span> – a specific initiative inside a workspace, like
                    “Onboarding v2”, “Billing revamp”, or “Mobile app”.
                  </li>
                  <li>
                    <span className="font-semibold">Team</span> – the group actually shipping the work on a project.
                    Each team gets its own board, columns, and filters.
                  </li>
                </ol>
                <p>
                  Think of it as zoom levels: organizations set the big picture, workspaces group related projects, and
                  teams live where the tasks actually move.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">Quick example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-800">Example: product company</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-semibold">Org:</span> Acme Inc.
                  </li>
                  <li>
                    <span className="font-semibold">Workspace:</span> Product
                  </li>
                  <li>
                    <span className="font-semibold">Projects:</span> Web Platform, Mobile App, Growth Experiments
                  </li>
                  <li>
                    <span className="font-semibold">Teams:</span> Core, Growth, Platform, Mobile – each with its own
                    board under a project.
                  </li>
                </ul>
                <p className="pt-1 text-xs text-slate-500">
                  Agencies and studios can swap “Acme” for each client or game and reuse the same structure.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">2. Understand the team board</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                <p>
                  A team board is made of <span className="font-semibold">columns</span> (lists) and{" "}
                  <span className="font-semibold">cards</span> (tasks). Each card gets exactly one core status tag:
                </p>
                <ul className="space-y-1 pl-4 text-sm">
                  <li>
                    <span className="font-mono font-semibold">To do</span> – agreed work that hasn&apos;t started yet.
                  </li>
                  <li>
                    <span className="font-mono font-semibold">Pending</span> – blocked or waiting on review / approval /
                    an external dependency.
                  </li>
                  <li>
                    <span className="font-mono font-semibold">Done</span> – completed and verified, ready to celebrate.
                  </li>
                  <li>
                    <span className="font-mono font-semibold">Error</span> – something failed during execution (deploy,
                    migration, integration).
                  </li>
                  <li>
                    <span className="font-mono font-semibold">Bug</span> – a defect the team is tracking.
                  </li>
                </ul>
                <p>
                  You can still use friendly columns like “Backlog”, “In progress”, or “In review” – the tag keeps
                  reporting simple across projects while the layout stays playful and team-specific.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">3. A simple flow to get started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Create your first organization (e.g. your company name).</li>
                  <li>Add a workspace for a product area or department.</li>
                  <li>Create one or more projects inside that workspace.</li>
                  <li>Invite a team to a project and set up their board columns.</li>
                  <li>Start adding tasks with the core tags: To do, Pending, Done, Error, Bug.</li>
                </ol>
                <p className="pt-1">
                  From there, you can add more workspaces, projects, and teams as your hive grows – the structure stays
                  consistent so people don&apos;t get lost.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="border-dashed border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">Concept recap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Clear hierarchy from organization → workspace → project → team.</li>
                  <li>Multiple workspaces per organization, and multiple projects per workspace.</li>
                  <li>Multiple teams per project, each with their own playful comic board.</li>
                  <li>
                    Shared status vocabulary across boards: <span className="font-mono">To do</span>,{" "}
                    <span className="font-mono">Pending</span>, <span className="font-mono">Done</span>,{" "}
                    <span className="font-mono">Error</span>, <span className="font-mono">Bug</span>.
                  </li>
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

