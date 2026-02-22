import Navbar from "./Navbar"
import Footer from "./Footer"
import { motion } from "framer-motion"

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

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
}

const Docs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased">
      <Navbar
        items={[
          { path: "/", label: "Home" },
          { path: "/docs", label: "Docs" },
        ]}
      />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">

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

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <ScrollArea className="h-[75vh] pr-4">
                <nav className="space-y-3 text-sm">
                  <p className="font-semibold text-slate-900 mb-4">
                    Getting Started
                  </p>

                  {["overview", "hierarchy", "boards", "workflow"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`#${item}`}
                        className="block rounded-md px-3 py-2 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-black hover:translate-x-1"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    )
                  )}
                </nav>
              </ScrollArea>
            </aside>

            {/* Content */}
            <motion.section
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="space-y-14"
            >

              {/* Header */}
              <motion.header
                variants={fadeUp}
                id="overview"
                className="space-y-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white p-10 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <Badge className="border border-dashed border-slate-200 bg-amber-50 text-amber-700">
                  HiveSpace Docs
                </Badge>

                <h1 className="text-4xl font-extrabold tracking-tight">
                  HiveSpace Documentation
                </h1>

                <p className="max-w-3xl text-slate-600 text-lg leading-relaxed">
                  HiveSpace is a structured project management platform inspired
                  by Jira and Linear, designed to keep teams aligned without
                  process overload.
                </p>
              </motion.header>

              <Separator />

              {/* Alert */}
              <motion.div variants={fadeUp}>
                <Alert className="border-slate-200 bg-white shadow-sm">
                  <AlertTitle>Design philosophy</AlertTitle>
                  <AlertDescription>
                    HiveSpace enforces structure by default so teams spend less
                    time configuring workflows and more time shipping.
                  </AlertDescription>
                </Alert>
              </motion.div>

              {/* Tabs */}
              <motion.div variants={fadeUp}>
                <Tabs defaultValue="concepts" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="concepts">
                      Concepts
                    </TabsTrigger>
                    <TabsTrigger value="example">
                      Example
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="concepts"
                    className="transition-all duration-300"
                  >
                    <Card
                      id="hierarchy"
                      className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <CardHeader>
                        <CardTitle>Hierarchy model</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm text-slate-700">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>
                            <strong>Organization</strong> – Company or client
                          </li>
                          <li>
                            <strong>Workspace</strong> – Department or domain
                          </li>
                          <li>
                            <strong>Project</strong> – Initiative
                          </li>
                          <li>
                            <strong>Team</strong> – Execution unit
                          </li>
                          <li>
                            <strong>Employee</strong> – Team member or part of team
                          </li>
                        </ol>
                        <p>
                          Every task belongs to exactly one team, ensuring
                          accountability and clean reporting. Teams can have multiple employees
                          who collaborate on tasks and projects.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent
                    value="example"
                    className="transition-all duration-300"
                  >
                    <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle>Product company setup</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-700 space-y-2">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Organization: Acme Inc.</li>
                          <li>Workspace: Engineering</li>
                          <li>Projects: Web, Mobile</li>
                          <li>Teams: Core, Platform</li>
                          <li>Employees: Team members assigned to each team</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* Boards */}
              <motion.section id="boards" variants={fadeUp}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>Boards & statuses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple">
                      <AccordionItem value="status">
                        <AccordionTrigger>
                          Status system
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-slate-700 space-y-2">
                          <ul className="pl-5 list-disc space-y-1">
                            <li><code>To do</code> – Approved</li>
                            <li><code>Pending</code> – Blocked</li>
                            <li><code>Done</code> – Completed</li>
                            <li><code>Bug</code> – Defect</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="custom">
                        <AccordionTrigger>
                          Custom columns
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-slate-700">
                          Teams can customize board columns without affecting
                          global reporting metrics.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Workflow */}
              <motion.section id="workflow" variants={fadeUp}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>Getting started workflow</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Create organization</li>
                      <li>Create workspace</li>
                      <li>Create project</li>
                      <li>Add teams</li>
                      <li>Add employees to teams</li>
                      <li>Create and track tasks</li>
                    </ol>
                  </CardContent>
                </Card>
              </motion.section>

            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Docs