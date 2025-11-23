import { Check } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      features: [
        "5,000 words/mo",
        "Basic templates",
        "1 User seat",
        "Community support",
      ],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: [
        "Unlimited words",
        "Advanced SEO mode",
        "5 User seats",
        "Priority support",
        "Plagiarism checker",
      ],
      cta: "Get Pro",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Custom AI models",
        "SSO & Security",
        "Unlimited seats",
        "Dedicated account manager",
        "API Access",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div>
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border ${plan.highlight ? "border-indigo-600 shadow-2xl scale-105 z-10 bg-white" : "border-gray-200 bg-gray-50"}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-500 text-sm">
                    /{plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-gray-600">
                      <Check
                        className={`h-5 w-5 mr-3 ${plan.highlight ? "text-indigo-600" : "text-gray-400"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-xl font-bold transition ${plan.highlight ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
