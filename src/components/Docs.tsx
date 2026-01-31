import Navbar from "./Navbar"
import Footer from "./Footer"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "../components/ui/separator"
import { ScrollArea } from "../components/ui/scroll-area"

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

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Documentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <ScrollArea className="h-[75vh] pr-4">
                <nav className="space-y-3 text-sm">
                  <p className="font-semibold text-slate-900">Getting Started</p>
                  <a href="#overview" className="block text-slate-600 hover:text-black">Overview</a>
                  <a href="#hierarchy" className="block text-slate-600 hover:text-black">Hierarchy</a>
                  <a href="#boards" className="block text-slate-600 hover:text-black">Boards</a>
                  <a href="#workflow" className="block text-slate-600 hover:text-black">Workflow</a>
                </nav>
              </ScrollArea>
            </aside>

            {/* Content */}
            <section className="space-y-12">

              {/* Header */}
              <header id="overview" className="space-y-4">
                <Badge className="border border-dashed border-slate-200 bg-amber-50 text-amber-700">
                  HiveSpace Docs
                </Badge>

                <h1 className="text-4xl font-extrabold tracking-tight">
                  HiveSpace Documentation
                </h1>

                <p className="max-w-3xl text-slate-600">
                  HiveSpace is a structured project management platform inspired
                  by Jira and Linear, designed to keep teams aligned without
                  process overload.
                </p>
              </header>

              <Separator />

              {/* Alert */}
              <Alert>
                <AlertTitle>Design philosophy</AlertTitle>
                <AlertDescription>
                  HiveSpace enforces structure by default so teams spend less
                  time configuring workflows and more time shipping.
                </AlertDescription>
              </Alert>

              {/* Tabs */}
              <Tabs defaultValue="concepts">
                <TabsList>
                  <TabsTrigger value="concepts">Concepts</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="concepts">
                  <Card id="hierarchy">
                    <CardHeader>
                      <CardTitle>Hierarchy model</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-slate-700">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li><strong>Organization</strong> – Company or client</li>
                        <li><strong>Workspace</strong> – Department or domain</li>
                        <li><strong>Project</strong> – Initiative</li>
                        <li><strong>Team</strong> – Execution unit</li>
                      </ol>
                      <p>
                        Every task belongs to exactly one team, ensuring
                        accountability and clean reporting.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="example">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product company setup</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-700 space-y-2">
                      <ul className="list-disc pl-5">
                        <li>Organization: Acme Inc.</li>
                        <li>Workspace: Engineering</li>
                        <li>Projects: Web, Mobile</li>
                        <li>Teams: Core, Platform</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Accordion */}
              <section id="boards">
                <Card>
                  <CardHeader>
                    <CardTitle>Boards & statuses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple">
                      <AccordionItem value="status">
                        <AccordionTrigger>Status system</AccordionTrigger>
                        <AccordionContent className="text-sm text-slate-700 space-y-2">
                          <ul className="pl-5 list-disc">
                            <li><code>To do</code> – Approved</li>
                            <li><code>Pending</code> – Blocked</li>
                            <li><code>Done</code> – Completed</li>
                            <li><code>Bug</code> – Defect</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="custom">
                        <AccordionTrigger>Custom columns</AccordionTrigger>
                        <AccordionContent className="text-sm text-slate-700">
                          Teams can customize board columns without affecting
                          global reporting metrics.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </section>

              {/* Workflow */}
              <section id="workflow">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting started workflow</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Create organization</li>
                      <li>Create workspace</li>
                      <li>Create project</li>
                      <li>Add teams</li>
                      <li>Create and track tasks</li>
                    </ol>
                  </CardContent>
                </Card>
              </section>

            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Docs
