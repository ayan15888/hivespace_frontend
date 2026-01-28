import { NavLink } from "react-router-dom"
import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"

type NavItem = {
  path: string
  label: string
}

type ButtonItem = {
  path: string
  label: string
}

type NavbarProps = {
  items: NavItem[]
  buttons?: ButtonItem[]
}

const Navbar = ({ items, buttons }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-amber-100 text-xs font-semibold uppercase tracking-wide text-slate-900">
            HS
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-slate-900">HiveSpace</span>
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Jira, but lighter
            </span>
          </div>
        </NavLink>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          <div className="hidden items-center gap-4 sm:flex">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "rounded-full px-3 py-1 transition-colors",
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {buttons &&
            buttons.map((btn, index) => (
              <Button
                key={btn.path}
                asChild
                size="sm"
                variant={index === 0 ? "outline" : "default"}
                className={
                  index === 0
                    ? "hidden rounded-full border-dashed border-slate-300 bg-white px-4 text-xs font-medium text-slate-900 hover:bg-slate-50 sm:inline-flex"
                    : "rounded-full bg-slate-900 px-4 text-xs font-medium text-white hover:bg-black"
                }
              >
                <NavLink to={btn.path}>{btn.label}</NavLink>
              </Button>
            ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
