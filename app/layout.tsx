import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevDocs AI - Your AI-Powered Documentation Assistant",
  description:
    "Get instant answers from official documentation and generate production-ready code with AI. Support for React, Next.js, Django, FastAPI, and more.",
  keywords: [
    "AI",
    "documentation",
    "code generation",
    "developer tools",
    "React",
    "Next.js",
    "Django",
    "FastAPI",
  ],
  authors: [{ name: "DevDocs AI" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon',
  },
  openGraph: {
    title: "DevDocs AI - Your AI-Powered Documentation Assistant",
    description:
      "Get instant answers from official documentation and generate production-ready code with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
