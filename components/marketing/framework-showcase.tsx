import { Badge } from "@/components/ui/badge";

const frameworks = [
  { name: "React", color: "text-[#61DAFB]" },
  { name: "Next.js", color: "text-black" },
  { name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { name: "TypeScript", color: "text-[#3178C6]" },
  { name: "FastAPI", color: "text-[#009688]" },
  { name: "Django", color: "text-[#092E20]" },
  { name: "PostgreSQL", color: "text-[#336791]" },
];

export function FrameworkShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Framework Support
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Built for modern web development
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive support for the most popular frameworks and technologies.
            More coming soon based on your feedback!
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-6">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-8 py-4 shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <div className={`text-4xl font-bold ${framework.color}`}>
                {framework.name.charAt(0)}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {framework.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Badge variant="secondary" className="text-base px-6 py-2">
            + More frameworks coming soon
          </Badge>
        </div>
      </div>
    </div>
  );
}
