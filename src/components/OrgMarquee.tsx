const marqueeItems = [
  "Create an organization for your company",
  "Spin up workspaces for product, design & growth",
  "Nest multiple projects under each workspace",
  "Give every project its own teams",
  "Track tasks with To do, Pending, Done, Error & Bug tags",
] as const

const OrgMarquee = () => {
  return (
    <section className="marquee-container border-y border-dashed border-slate-200 bg-white/70 py-4">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="mx-3 inline-flex items-center gap-2 rounded-full border border-dashed border-slate-500 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrgMarquee

