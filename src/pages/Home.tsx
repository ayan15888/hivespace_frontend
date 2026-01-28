import { Sparkles, Zap, ListChecks, Clock } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import OrgMarquee from "../components/OrgMarquee"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { colors } from "../constants/color"

const featureList = [
  {
    icon: <Sparkles className="h-5 w-5 text-amber-500" />,
    title: "Organizations to teams",
    copy: "Model your hierarchy from organizations to workspaces, projects, and the teams that ship the work.",
  },
  {
    icon: <ListChecks className="h-5 w-5 text-sky-500" />,
    title: "Workspaces & projects",
    copy: "Group related projects inside focused workspaces so every squad sees just what they need.",
  },
  {
    icon: <Clock className="h-5 w-5 text-rose-500" />,
    title: "Team status tags",
    copy: "Track to do, pending, done, errors, and bugs with simple comic-style tags on every task.",
  },
]

const TAG_STYLES: Record<string, {
  border: string
  bg: string
  dot: string
  text: string
}> = {
  "To do": {
    border: "border-black",
    bg: "bg-blue-700",
    dot: "bg-blue-500",
    text: "text-white",
  },
  Pending: {
    border: "border-black",
    bg: "bg-yellow-700",
    dot: "bg-yellow-500",
    text: "text-white",
  },
  Done: {
    border: "border-black",
    bg: "bg-green-700",
    dot: "bg-green-500",
    text: "text-white",
  },
  Error: {
    border: "border-black",
    bg: "bg-red-700",
    dot: "bg-red-500",
    text: "text-white",
  },
  Bug: {
    border: "border-black",
    bg: "bg-purple-700",
    dot: "bg-purple-400",
    text: "text-white",
  },
}


const mockColumns = [
  {
    name: "To do",
    color: "bg-amber-50 border-amber-800",
    items: ["Plan sprint for Org Alpha", "Create workspace for Design", "Draft project roadmap"],
  },
  {
    name: "Pending / In review",
    color: "bg-sky-50 border-sky-800",
    items: ["Approve Team Orbit setup", "Review bug triage board"],
  },
  {
    name: "Done & bugs",
    color: "bg-emerald-50 border-emerald-800",
    items: ["Launch Org Beta workspace", "Fix login error bug"],
  },
]

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
        ]}
        buttons={[
          { label: "Login", path: "/login" },
          { label: "Register", path: "/register" },
        ]}
      />

      <main
        style={{
          background: `radial-gradient(circle at top left, ${colors.accentSoft}66 0, transparent 55%), radial-gradient(circle at bottom right, ${colors.accentSoft}80 0, transparent 60%)`,
        }}
        className="flex-1 bg-white text-slate-900"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-14 sm:px-10">
          <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <Badge className="w-fit border border-dashed border-slate-200 bg-white text-xs uppercase tracking-wide text-slate-600 shadow-sm">
                From org to team
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                  One playful space for your whole organization
                </h1>
                <p className="text-lg text-slate-700 sm:text-xl">
                  HiveSpace lets you create organizations, spin up workspaces, nest multiple projects, and give every team a clear place to track their work.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="rounded-full bg-slate-900 px-6 text-white hover:bg-black">
                  Start a board
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-dashed border-slate-300 bg-white px-6 text-slate-900"
                >
                  View docs
                </Button>
                <span className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur border border-dashed border-amber-900">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <span>Setup in under 2 minutes</span>
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-16 w-16 rounded-3xl border-4 border-dashed border-yellow-300/80" />
              <div className="absolute -right-4 bottom-10 h-14 w-14 rounded-full bg-amber-100/80 blur-xl" />
              <Card className="relative overflow-hidden rounded-3xl border-dashed border-black bg-white shadow-xl backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-dashed border-slate-200">
                  <CardTitle className="text-lg font-semibold text-black">Sprint Playground</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span>Comic mode</span>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
                  {mockColumns.map((column) => (
                    <div
                      key={column.name}
                      className={`flex flex-col gap-3 rounded-2xl border p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${column.color}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{column.name}</span>
                        <span className="rounded-full bg-slate-900/5 px-2 py-0.5 text-xs text-slate-700">
                          {column.items.length}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {column.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-dashed border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

<div className="col-span-full mt-2 flex flex-wrap gap-2 text-[11px]">
  {["To do", "Pending", "Done", "Error", "Bug"].map((tag) => {
    const style = TAG_STYLES[tag]

    return (
      <span
        key={tag}
        className={`inline-flex items-center gap-1 rounded-full border border-solid px-2 py-0.5
        ${style.border} ${style.bg} ${style.text}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
        <span>{tag}</span>
      </span>
    )
  })}
</div>

                </CardContent>
              </Card>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {featureList.map((feature) => (
              <Card
                key={feature.title}
                className="h-full rounded-2xl border-dashed border-slate-200 bg-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.copy}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <OrgMarquee />

          <section className="rounded-3xl border border-dashed border-slate-200 bg-white p-8 shadow-sm backdrop-blur md:flex md:items-center md:justify-between">
            <div className="space-y-2">
              <Badge className="border border-dashed border-slate-200 bg-amber-50 text-amber-700">
                Friendly launchpad
              </Badge>
              <p className="text-2xl font-semibold text-slate-900">Ship faster with a board that feels light.</p>
              <p className="text-slate-600">
                Bring structure, keep the humor, and keep your team focused on what matters.
              </p>
            </div>
            <div className="mt-4 flex gap-3 md:mt-0">
              <Button className="rounded-full bg-slate-100 px-5 text-slate-900 hover:bg-white">
                Create project
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-dashed border-slate-500 bg-transparent px-5 text-slate-100"
              >
                Talk to us
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
