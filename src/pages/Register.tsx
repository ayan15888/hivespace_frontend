import { Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { colors } from "../constants/color"

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
        ]}
        buttons={[{ label: "Login", path: "/login" }]}
      />

      <main
        style={{
          background: `radial-gradient(circle at top left, ${colors.accentSoft}66 0, transparent 55%), radial-gradient(circle at bottom right, ${colors.accentSoft}80 0, transparent 60%)`,
        }}
        className="flex-1 bg-white text-slate-900"
      >
        <div className="mx-auto flex max-w-6xl flex-1 items-center justify-center px-6 py-10 sm:px-10">
          <div className="grid w-full gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <Sparkles className="h-3 w-3 text-amber-400" />
                Create your HiveSpace
              </span>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Register once, ship often.
              </h1>
              <p className="max-w-md text-sm text-slate-600 sm:text-base">
                Set up your workspace and start organizing issues in a comic-light board that stays out of the way.
              </p>
            </div>

            <Card className="w-full max-w-md justify-self-end border-dashed border-slate-200 bg-white shadow-lg backdrop-blur">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl text-slate-900">Create an account</CardTitle>
                <CardDescription className="text-slate-500">
                  Enter your details to spin up your first space.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-slate-800">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ada Lovelace"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-slate-800">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@team.com"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-slate-800">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="org" className="text-slate-800">
                      Organization name
                    </Label>
                    <Input
                      id="org"
                      type="text"
                      placeholder="Your org or team name"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <Button type="submit" className="mt-2 w-full rounded-full bg-slate-900 text-white hover:bg-black">
                    Register
                  </Button>

                  <p className="pt-2 text-center text-xs text-slate-500">
                    Already have an account?{" "}
                    <a href="/login" className="font-medium text-slate-900 underline-offset-4 hover:underline">
                      Log in
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Register
