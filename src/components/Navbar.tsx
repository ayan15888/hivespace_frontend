import { NavLink, useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { useAuth } from "../contexts/AuthContext"

type NavItem = {
  path: string
  label: string
}

type NavbarProps = {
  items: NavItem[]
}

const Navbar = ({ items }: NavbarProps) => {
  const navigate = useNavigate()
  const { isLoggedIn, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-amber-100   font-semibold uppercase tracking-wide text-slate-900">
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
                      : "text-slate-700 hover:bg-slate-100 hover:text-black",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {isLoggedIn ? (
            <Button
              type="button"
              size="sm"
              onClick={handleLogout}
              className="rounded-full bg-red-600 px-4  font-medium text-white hover:bg-black"
            >
              Log out
            </Button>
          ) : (
            <>
              <Button
                asChild
                size="sm"
                className="hidden rounded-full border-dashed border-slate-300 bg-white px-4   font-medium text-slate-900 hover:bg-slate-50 sm:inline-flex"
              >
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-black px-4   font-medium text-white hover:bg-black"
              >
                <NavLink to="/register">Register</NavLink>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
