import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SubscriptionCardProps {
  plan: "FREE" | "PRO" | "ENTERPRISE";
}

export function SubscriptionCard({ plan }: SubscriptionCardProps) {
  const planDetails = {
    FREE: {
      name: "Free",
      color: "bg-gray-100 text-gray-800",
      features: [
        "50 documentation questions/month",
        "10 code generations/month",
        "Community support",
      ],
      cta: "Upgrade to Pro",
      ctaHref: "/pricing",
    },
    PRO: {
      name: "Pro",
      color: "bg-primary-600 text-white",
      features: [
        "Unlimited questions & generations",
        "Conversation history",
        "Priority support",
        "API access",
      ],
      cta: "Manage Subscription",
      ctaHref: "/dashboard/settings#subscription",
    },
    ENTERPRISE: {
      name: "Enterprise",
      color: "bg-accent-600 text-white",
      features: [
        "Custom usage volumes",
        "Private deployment",
        "Dedicated support",
        "Team workspaces",
      ],
      cta: "Contact Support",
      ctaHref: "mailto:support@devdocs.ai",
    },
  };

  const details = planDetails[plan];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Current Plan</CardTitle>
          <Badge className={details.color}>{details.name}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {details.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
              <svg
                className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5"
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
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={details.ctaHref}>
          <Button
            variant={plan === "FREE" ? "default" : "outline"}
            className="w-full"
          >
            {details.cta}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
