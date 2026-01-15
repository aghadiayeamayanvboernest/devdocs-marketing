import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary-100 text-primary-800 font-semibold">
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get Started with <span className="text-primary-600">DevDocs AI</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know to start using DevDocs AI effectively
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="sticky top-8 space-y-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              {[
                { name: "Getting Started", href: "#getting-started" },
                { name: "Documentation Mode", href: "#doc-mode" },
                { name: "Code Generation Mode", href: "#code-mode" },
                { name: "Supported Frameworks", href: "#frameworks" },
                { name: "Best Practices", href: "#best-practices" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Getting Started */}
            <section id="getting-started">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Started
              </h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  DevDocs AI is designed to be intuitive and easy to use. Follow
                  these steps to get started in minutes.
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {[
                    {
                      step: "1",
                      title: "Create Your Account",
                      desc: "Sign up for free using your email or Google/GitHub account. No credit card required.",
                    },
                    {
                      step: "2",
                      title: "Choose Your Mode",
                      desc: "Select Documentation Q&A for quick answers or Code Generation for building complete applications.",
                    },
                    {
                      step: "3",
                      title: "Select Frameworks",
                      desc: "Pick the frameworks you're working with (React, Next.js, Django, etc.) for targeted responses.",
                    },
                    {
                      step: "4",
                      title: "Start Asking",
                      desc: "Type your question or describe what you want to build. DevDocs AI handles the rest!",
                    },
                  ].map((item) => (
                    <Card key={item.step} className="border-l-4 border-l-primary-600">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Documentation Mode */}
            <section id="doc-mode">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Documentation Q&A Mode
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Perfect for quick answers, debugging, and learning specific
                concepts from official documentation.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">How to Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      1. Select Frameworks
                    </h4>
                    <p className="text-gray-600">
                      Choose which frameworks you want to search. You can select
                      multiple (e.g., React + Next.js + TypeScript).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      2. Ask Your Question
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Type your question naturally, as you would ask a colleague:
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Good examples:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                        <li>"How do I use React hooks with TypeScript?"</li>
                        <li>"What's the best way to handle forms in Next.js 14?"</li>
                        <li>"How do I set up middleware in FastAPI?"</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      3. Review Answer & Sources
                    </h4>
                    <p className="text-gray-600">
                      Get your answer in seconds with inline citations [1], [2]
                      that link to official docs. Click citations to dive deeper.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pro Tip
                </h4>
                <p className="text-sm text-gray-700">
                  Be specific about your use case. Instead of "How do I use React?",
                  ask "How do I create a controlled form component in React?"
                </p>
              </div>
            </section>

            {/* Code Generation Mode */}
            <section id="code-mode">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Code Generation Mode
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Generate complete, production-ready applications from natural
                language descriptions.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">How to Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      1. Describe Your Project
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Be detailed about what you want to build:
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Example prompt:</strong>
                      </p>
                      <p className="text-sm text-gray-600">
                        "Build a Next.js 14 app with a todo list. Use TypeScript,
                        Tailwind CSS for styling, and include CRUD operations. Add
                        local storage persistence and a clean UI with dark mode
                        toggle."
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      2. Review Generated Code
                    </h4>
                    <p className="text-gray-600">
                      Claude generates all necessary files with proper folder
                      structure, including components, utilities, and
                      configuration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      3. Copy & Run
                    </h4>
                    <p className="text-gray-600">
                      Each file includes a copy button. Follow the setup
                      instructions to run your new app locally.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">
                  What Gets Generated
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Complete file structure (components, pages, utilities)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    TypeScript types and interfaces
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Configuration files (tailwind.config, tsconfig, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Setup and installation instructions
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Error handling and edge cases
                  </li>
                </ul>
              </div>
            </section>

            {/* Supported Frameworks */}
            <section id="frameworks">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Supported Frameworks
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                DevDocs AI includes comprehensive documentation for these popular
                frameworks and libraries:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "React",
                    desc: "Official React documentation including hooks, components, and best practices",
                    color: "bg-blue-500",
                  },
                  {
                    name: "Next.js",
                    desc: "Complete Next.js 14 docs with App Router, routing, and data fetching",
                    color: "bg-black",
                  },
                  {
                    name: "TypeScript",
                    desc: "TypeScript handbook with type system, interfaces, and advanced features",
                    color: "bg-blue-600",
                  },
                  {
                    name: "Tailwind CSS",
                    desc: "Full Tailwind utility classes, configuration, and responsive design",
                    color: "bg-cyan-500",
                  },
                  {
                    name: "FastAPI",
                    desc: "FastAPI Python framework for building APIs with automatic docs",
                    color: "bg-teal-600",
                  },
                  {
                    name: "Django",
                    desc: "Django web framework including ORM, views, and authentication",
                    color: "bg-green-700",
                  },
                  {
                    name: "PostgreSQL",
                    desc: "PostgreSQL database documentation with SQL queries and functions",
                    color: "bg-blue-700",
                  },
                ].map((framework) => (
                  <Card key={framework.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 h-10 w-10 rounded-lg ${framework.color} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {framework.name[0]}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {framework.name}
                          </h3>
                          <p className="text-sm text-gray-600">{framework.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Best Practices
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Be Specific",
                    desc: "Include version numbers, specific APIs, or exact error messages in your questions.",
                  },
                  {
                    title: "Use Multiple Frameworks",
                    desc: "Select all relevant frameworks (e.g., React + Next.js + TypeScript) for comprehensive answers.",
                  },
                  {
                    title: "Verify Sources",
                    desc: "Always click the citation links to read the full context from official docs.",
                  },
                  {
                    title: "Start Simple",
                    desc: "For code generation, start with a basic app then add features incrementally.",
                  },
                  {
                    title: "Review Generated Code",
                    desc: "Always review and test generated code before using in production.",
                  },
                ].map((practice, i) => (
                  <Card key={i} className="border-l-4 border-l-accent-600">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-gray-600">{practice.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How accurate are the answers?",
                    a: "Very accurate! We use RAG (Retrieval-Augmented Generation) to ensure answers come directly from official documentation. Every response includes source citations for verification.",
                  },
                  {
                    q: "Can I use DevDocs AI for free?",
                    a: "Yes! Free tier includes 50 documentation questions and 10 code generations per month. Perfect for individual developers and learning.",
                  },
                  {
                    q: "What's the difference between GPT-4o and Claude?",
                    a: "GPT-4o is used for fast documentation Q&A. Claude Sonnet 4.5 specializes in generating complete, production-ready applications with multiple files.",
                  },
                  {
                    q: "Is my conversation history saved?",
                    a: "Pro users get unlimited conversation history. Free users' conversations are not persisted after the session ends.",
                  },
                  {
                    q: "Can I use the generated code in production?",
                    a: "Yes! All generated code is yours to use however you like. We recommend reviewing and testing before deploying to production.",
                  },
                  {
                    q: "Which documentation versions are included?",
                    a: "We regularly update our documentation indexes to include the latest stable versions of all supported frameworks.",
                  },
                ].map((faq, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">
                        {faq.q}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-primary-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're here to help! Reach out and we'll get back to you as soon
                    as possible.
                  </p>
                  <Link
                    href="mailto:support@devdocs.ai"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                  >
                    support@devdocs.ai
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
