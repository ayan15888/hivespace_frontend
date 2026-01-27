import { NavLink } from "react-router-dom"
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
  buttons?: ButtonItem[] // multiple buttons
}

const Navbar = ({ items, buttons }: NavbarProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-lg font-bold color text-black">Hivespace</h1>

      <nav className="flex items-center gap-6">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-primary text-gray-700"
            }
          >
            {item.label}
          </NavLink>
        ))}

        {buttons &&
          buttons.map((btn) => (
            <Button key={btn.path} asChild>
              <NavLink to={btn.path}>{btn.label}</NavLink>
            </Button>
          ))}
      </nav>
    </header>
  )
}

export default Navbar
