import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary-100 text-primary-800 font-semibold">
            Powerful Features
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Everything You Need to{" "}
            <span className="text-primary-600">Build Faster</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From quick documentation lookups to generating complete applications,
            DevDocs AI provides all the tools modern developers need.
          </p>
        </div>
      </div>

      {/* Main Features */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Feature 1: Documentation Q&A */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-6">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Documentation Q&A
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ask questions in natural language and get instant, accurate answers
              from official documentation. No more endless searching through docs or
              Stack Overflow.
            </p>
            <ul className="space-y-3">
              {[
                "Instant answers from 7 major frameworks",
                "Natural language queries - ask like you would a colleague",
                "Answers in under 5 seconds",
                "Inline citations linking to official docs",
                "Context-aware responses using RAG technology",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-primary-600"
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
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-100 p-8 border border-gray-200">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Example Question:
              </p>
              <p className="text-gray-700">
                "How do I implement server-side rendering with dynamic routes in
                Next.js 14?"
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm font-semibold text-primary-900 mb-3">
                AI Answer:
              </p>
              <p className="text-sm text-gray-700 mb-3">
                In Next.js 14 with the App Router, you can implement SSR with
                dynamic routes by creating a file in the app directory with bracket
                notation. For example, app/posts/[slug]/page.tsx. [1]
              </p>
              <p className="text-sm text-gray-700 mb-3">
                The page component can be an async function that fetches data on
                the server before rendering. [2]
              </p>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-primary-100 text-primary-700 text-xs">
                  [1] Next.js Routing
                </Badge>
                <Badge className="bg-primary-100 text-primary-700 text-xs">
                  [2] Data Fetching
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Code Generation */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mb-24">
          <div className="order-2 lg:order-1 rounded-2xl bg-gradient-to-br from-accent-50 to-cyan-100 p-8 border border-accent-200">
            <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <div className="text-gray-500 mb-2">// Generated by DevDocs AI</div>
              <div className="space-y-1">
                <div>
                  <span className="text-purple-600">import</span>{" "}
                  <span className="text-gray-900">{"{ useState }"}</span>{" "}
                  <span className="text-purple-600">from</span>{" "}
                  <span className="text-green-600">'react'</span>
                </div>
                <div className="mt-3">
                  <span className="text-purple-600">export default function</span>{" "}
                  <span className="text-blue-600">TodoApp</span>() {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-600">const</span> [tasks, setTasks]
                  = <span className="text-blue-600">useState</span>([])
                </div>
                <div className="ml-4">
                  <span className="text-purple-600">return</span> (...)
                </div>
                <div>{"}"}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Complete, production-ready code with TypeScript support
            </p>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600 text-white mb-6">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Code Generation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Describe what you want to build, and Claude Sonnet 4.5 generates a
              complete application with multiple files, proper structure, and best
              practices.
            </p>
            <ul className="space-y-3">
              {[
                "Full-stack applications from a single prompt",
                "Multiple files with proper folder structure",
                "TypeScript support out of the box",
                "Production-ready code with error handling",
                "Clear setup instructions included",
                "Follows framework best practices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-accent-600"
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
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Powerful Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for modern development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                ),
                title: "7 Framework Support",
                desc: "Built-in support for React, Next.js, Tailwind CSS, FastAPI, Django, PostgreSQL, and TypeScript. Select your stack and get targeted answers.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                ),
                title: "Source Citations",
                desc: "Every answer includes clickable citations [1], [2] that link directly to official documentation for easy verification and deeper exploration.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Conversation History",
                desc: "Pro users get unlimited conversation history saved to their account. Access your previous chats from any device, anytime.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
                title: "Lightning Fast",
                desc: "Get documentation answers in under 5 seconds. Code generation completes in 1-3 minutes. Optimized vector search ensures instant results.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                title: "Accurate & Reliable",
                desc: "RAG technology ensures answers come from official documentation, not hallucinations. Every response is grounded in verified sources.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                ),
                title: "Usage Dashboard",
                desc: "Track your API usage, manage your subscription, and view conversation history from a clean, intuitive dashboard.",
              },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-4">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DevDocs AI vs Traditional Methods
            </h2>
            <p className="text-lg text-gray-600">
              See how we compare to conventional approaches
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-primary-600">
                    DevDocs AI
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Manual Search
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Stack Overflow
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  {
                    feature: "Search Speed",
                    devdocs: "< 5 seconds",
                    manual: "5-30 minutes",
                    stackoverflow: "10-60 minutes",
                  },
                  {
                    feature: "Source Accuracy",
                    devdocs: "Official docs only",
                    manual: "Official docs",
                    stackoverflow: "Community answers (varies)",
                  },
                  {
                    feature: "Code Generation",
                    devdocs: "✓ Full apps",
                    manual: "✗ No",
                    stackoverflow: "✗ Snippets only",
                  },
                  {
                    feature: "Citations Provided",
                    devdocs: "✓ Always",
                    manual: "✗ Manual lookup",
                    stackoverflow: "✗ Sometimes",
                  },
                  {
                    feature: "Up-to-date Info",
                    devdocs: "✓ Latest docs",
                    manual: "✓ Latest docs",
                    stackoverflow: "⚠ May be outdated",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-primary-600 font-semibold">
                      {row.devdocs}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-700">
                      {row.manual}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-700">
                      {row.stackoverflow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to experience the future of development?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
              Join thousands of developers building faster with AI-powered
              documentation and code generation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
                >
                  Start Free Today
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
