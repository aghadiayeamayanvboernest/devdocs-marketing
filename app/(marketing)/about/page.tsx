"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/marketing/about-hero";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="bg-white">
      {/* Animated Hero Section */}
      <AboutHero />

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mx-auto max-w-3xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
            DevDocs AI was built to solve a problem every developer faces: finding
            accurate, up-to-date information from official documentation quickly.
            We combine the power of Retrieval-Augmented Generation (RAG) with
            state-of-the-art AI models to deliver precise answers with source
            citations.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
            Our mission is to make developers more productive by eliminating the
            time spent searching through documentation, Stack Overflow, and blog
            posts. With DevDocs AI, you get instant, accurate answers directly from
            official sources, along with production-ready code generation
            capabilities.
          </motion.p>
        </motion.div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How DevDocs AI Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powered by cutting-edge AI and vector search technology
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-4">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Vector Search & RAG
                  </h3>
                  <p className="text-gray-600">
                    We use vector embeddings to index official documentation from React,
                    Next.js, Django, FastAPI, PostgreSQL, TypeScript, and Tailwind CSS.
                    When you ask a question, we retrieve the most relevant documentation
                    chunks and feed them to GPP-4o for accurate, contextual answers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600 text-white mb-4">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dual AI Models
                  </h3>
                  <p className="text-gray-600">
                    For documentation Q&A, we use OpenAI GPT-4o for speed and accuracy.
                    For code generation, we leverage Claude Sonnet 4.5, which excels at
                    generating complete, production-ready applications with proper file
                    structures and best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-4">
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
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Source Attribution
                  </h3>
                  <p className="text-gray-600">
                    Every answer includes inline citations like [1], [2] that link
                    directly to the official documentation sources. This ensures you can
                    verify information and dive deeper into topics when needed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600 text-white mb-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600">
                    Our optimized vector database and caching layer ensure you get
                    documentation answers in under 5 seconds. Code generation completes
                    in 1-3 minutes depending on project complexity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built with modern, production-grade technologies
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { name: "Next.js 14", desc: "React framework for production" },
            { name: "FastAPI", desc: "High-performance Python backend" },
            { name: "OpenAI GPT-4o", desc: "Advanced language model" },
            { name: "Claude Sonnet 4.5", desc: "Code generation specialist" },
            { name: "Qdrant", desc: "Vector database for embeddings" },
            { name: "LangChain", desc: "LLM orchestration framework" },
            { name: "PostgreSQL", desc: "Reliable data storage" },
            { name: "Tailwind CSS", desc: "Utility-first styling" },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Founder Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8"
            >
              About the Founder
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold mb-6"
                >
                  AE
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  Aghadiaye Ernest Amayanvbo
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-primary-600 font-semibold mb-6"
                >
                  Founder & Creator
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-600 leading-relaxed"
                >
                  DevDocs AI was created to bridge the gap between developers and
                  official documentation. As a developer myself, I understood the
                  frustration of searching through countless pages to find the right
                  answer. By combining RAG technology with powerful AI models, DevDocs
                  AI delivers accurate, cited answers instantly, along with the ability
                  to generate complete applications from natural language descriptions.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Ready to boost your productivity?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Join developers who are building faster with AI-powered documentation
              and code generation.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="/sign-up">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg">Get Started Free</Button>
                </motion.div>
              </Link>
              <Link href="/pricing">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
