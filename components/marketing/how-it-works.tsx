const steps = [
  {
    step: "01",
    name: "Select Frameworks",
    description:
      "Choose from 7 popular frameworks in the sidebar. DevDocs AI focuses on your selected frameworks for better, more relevant results.",
  },
  {
    step: "02",
    name: "Ask or Generate",
    description:
      "Switch between Documentation Q&A mode for quick answers, or Code Generation mode to build complete applications.",
  },
  {
    step: "03",
    name: "Get Results with Sources",
    description:
      "Receive accurate answers with inline citations [1], [2] linking to official docs, or get production-ready code with setup instructions.",
  },
];

export function HowItWorks() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            How it works
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Three simple steps
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started in seconds. No setup required, no credit card needed.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Flow diagram (visual separator) */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
