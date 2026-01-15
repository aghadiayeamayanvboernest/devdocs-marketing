import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroSlider } from "./hero-slider";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Hero Slider at the top */}
      <div className="relative">
        <HeroSlider />

        {/* Overlay content on the slider */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Badge className="mb-6 bg-white/90 text-primary-800 font-semibold backdrop-blur-sm border-none shadow-lg">
              Powered by GPT-4o & Claude Sonnet 4.5
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl">
              Your AI-Powered{" "}
              <span className="text-white">Documentation Assistant</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/95 sm:text-xl drop-shadow-lg font-medium">
              Get instant answers from official documentation with citations.
              Generate production-ready code in seconds. All powered by AI.
            </p>

            <div className="mt-8 flex items-center justify-center gap-x-6 flex-wrap">
              <Link href="/sign-up">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 shadow-2xl">
                  Start Free
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_CHATBOT_URL || "http://localhost:3006"} target="_blank">
                <Button variant="outline" size="lg" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary-600 shadow-2xl backdrop-blur-sm">
                  Try Demo
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-white font-semibold drop-shadow-lg">
              No credit card required • Unlimited & free forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
