import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UsageStatsProps {
  plan: "FREE" | "PRO" | "ENTERPRISE";
  documentationQueries: number;
  codeGenerations: number;
}

export function UsageStats({
  plan,
  documentationQueries,
  codeGenerations,
}: UsageStatsProps) {
  const limits = {
    FREE: { docs: 50, code: 10 },
    PRO: { docs: Infinity, code: Infinity },
    ENTERPRISE: { docs: Infinity, code: Infinity },
  };

  const limit = limits[plan];
  const isUnlimited = plan !== "FREE";

  const docsPercentage = isUnlimited
    ? 0
    : Math.min((documentationQueries / limit.docs) * 100, 100);
  const codePercentage = isUnlimited
    ? 0
    : Math.min((codeGenerations / limit.code) * 100, 100);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Documentation Queries */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Documentation Queries
          </CardTitle>
          <svg
            className="h-4 w-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{documentationQueries}</div>
          <p className="text-xs text-gray-600 mt-1">
            {isUnlimited ? "Unlimited" : `of ${limit.docs} this month`}
          </p>
          {!isUnlimited && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">
                  {docsPercentage.toFixed(0)}%
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-600 rounded-full transition-all"
                  style={{ width: `${docsPercentage}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Code Generations */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Code Generations
          </CardTitle>
          <svg
            className="h-4 w-4 text-gray-600"
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
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{codeGenerations}</div>
          <p className="text-xs text-gray-600 mt-1">
            {isUnlimited ? "Unlimited" : `of ${limit.code} this month`}
          </p>
          {!isUnlimited && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">
                  {codePercentage.toFixed(0)}%
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-600 rounded-full transition-all"
                  style={{ width: `${codePercentage}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
