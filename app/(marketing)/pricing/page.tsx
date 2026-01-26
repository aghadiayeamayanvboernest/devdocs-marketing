import { PricingCard } from "@/components/marketing/pricing-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - DevDocs AI",
  description:
    "Choose the perfect plan for your needs. Start free with 50 documentation questions and 10 code generations per month.",
};

const plans = [
  {
    name: "Free",
    description: "Perfect for individual developers",
    price: "$0",
    period: "forever",
    features: [
      "100 documentation questions/month",
      "25 code generations/month",
      "All 7 frameworks",
      "Source citations included",
      "Conversation history",
    ],
    cta: "Get Started Free",
    href: "/sign-up",
  },
  {
    name: "Pro",
    description: "For power users",
    price: "$9",
    period: "month",
    badge: "Beta Pricing",
    features: [
      "Unlimited documentation questions",
      "Unlimited code generation",
      "All frameworks",
      "Priority response times",
      "Export conversations",
      "Early access to new features",
    ],
    cta: "Upgrade to Pro",
    href: "/sign-up",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams and startups",
    price: "$29",
    period: "month",
    features: [
      "Everything in Pro",
      "5 team members included",
      "Shared conversation history",
      "Team usage analytics",
      "Priority support",
      "Custom framework requests",
    ],
    cta: "Start Team Trial",
    href: "/sign-up",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that works best for you. All plans include access to
            our AI-powered documentation assistant and code generator.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Can I cancel my subscription anytime?
              </dt>
              <dd className="mt-2 text-gray-600">
                Yes! You can cancel your Pro subscription at any time from your
                dashboard. You'll continue to have Pro access until the end of
                your billing period, then automatically downgrade to Free.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                What payment methods do you accept?
              </dt>
              <dd className="mt-2 text-gray-600">
                We accept all major credit cards (Visa, Mastercard, American
                Express) through Stripe. Enterprise customers can also pay via
                invoice.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Do you offer student discounts?
              </dt>
              <dd className="mt-2 text-gray-600">
                Yes! We offer 50% off Pro for students with a valid .edu email.
                We also provide free Pro accounts for maintainers of popular
                open-source projects (1,000+ stars).
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                What happens if I exceed my Free plan limits?
              </dt>
              <dd className="mt-2 text-gray-600">
                When you reach your monthly limit, you'll be prompted to upgrade
                to Pro for unlimited usage. Your limits reset on the first day of
                each month.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
