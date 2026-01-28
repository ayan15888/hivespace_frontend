import { Sparkles } from "lucide-react"

const LoadingSplash = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-sm">
        {/* soft halo */}
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-amber-200/30 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-200 bg-white p-6 shadow-2xl">
          {/* top shimmer */}
          <div className="pointer-events-none absolute -top-16 left-0 h-32 w-40 -skew-x-12 bg-linear-to-r from-transparent via-amber-200/40 to-transparent hs-shimmer" />

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-amber-200/40 blur-md hs-float" />
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-amber-100 text-xs font-semibold uppercase tracking-wide text-slate-900 hs-float">
                HS
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Loading your hive
              </p>
              <p className="text-sm text-slate-600">
                Building orgs → workspaces → projects → teams.
              </p>
            </div>

            {/* rotating dashed ring */}
            <div className="ml-auto h-10 w-10 rounded-full border border-dashed border-slate-300 hs-rotate" />
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Syncing tags: To do, Pending, Done, Error, Bug.</span>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
              {["Org", "Workspace", "Project", "Team"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1 rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1 shadow-sm"
                >
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full border border-dashed border-slate-200 bg-white">
              <div className="h-full w-1/3 rounded-full bg-amber-400/70" />
              <div className="pointer-events-none relative -mt-2 h-2 w-full">
                <div className="absolute top-0 h-2 w-24 rounded-full bg-amber-300/70 blur-[1px] hs-shimmer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSplash

