import { Sparkles } from "lucide-react"

const LoadingSplash = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-sm">
        {/* pulsing halo */}
        <div className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-3xl bg-amber-200/40" />

        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-amber-100 text-xs font-semibold uppercase tracking-wide text-slate-900 animate-bounce">
              HS
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Loading your hive
              </p>
              <p className="text-sm text-slate-600">
                Spinning up organizations, workspaces, projects & teams.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Linking to-dos, done, pending, error & bug tags.</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
              {["Org", "Workspace", "Project", "Team"].map((pill, idx) => (
                <span
                  key={pill}
                  className={`inline-flex items-center gap-1 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-2 py-1 shadow-sm transition
                  ${idx % 2 === 0 ? "animate-[bounce_1.4s_infinite_0.1s]" : "animate-[bounce_1.6s_infinite_0.3s]"}`}
                >
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-1/3 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-amber-400/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSplash

