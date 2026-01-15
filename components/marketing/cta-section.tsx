import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to speed up your development?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Join developers who are building faster with AI-powered documentation
            and code generation. Start free, no credit card required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
              >
                Get Started Free
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
          <p className="mt-6 text-sm text-white font-medium">
            Unlimited documentation questions & code generations, free forever
          </p>
        </div>
      </div>
    </div>
  );
}
