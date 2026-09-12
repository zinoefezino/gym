import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

const plans = [
  {
    name: "Day Pass",
    price: "$15",
    period: "per day",
    features: [
      "Full gym floor access",
      "Locker room access",
      "One class credit",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "$59",
    period: "per month",
    features: [
      "Unlimited gym floor access",
      "8 classes a month",
      "One guest pass a month",
    ],
    featured: true,
  },
  {
    name: "All Access",
    price: "$99",
    period: "per month",
    features: [
      "Unlimited gym floor access",
      "Unlimited classes",
      "Monthly coaching check in",
      "Priority class booking",
    ],
    featured: false,
  },
];

export default function PricingTeaser() {
  return (
    <section className="bg-charcoal px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-offwhite sm:text-4xl">
            Membership that fits how you train
          </h2>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-offwhite/80 transition-colors hover:text-offwhite"
          >
            See full pricing
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 ${
                plan.featured
                  ? "bg-red text-offwhite"
                  : "border border-gray/25 text-offwhite"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-offwhite px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={plan.featured ? "text-offwhite/80" : "text-gray"}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={18}
                      strokeWidth={2}
                      className={`mt-0.5 shrink-0 ${plan.featured ? "text-offwhite" : "text-red"}`}
                    />
                    <span
                      className={
                        plan.featured ? "text-offwhite/90" : "text-offwhite/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 flex h-12 items-center justify-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-charcoal text-offwhite hover:bg-charcoal/80"
                    : "bg-offwhite text-charcoal hover:bg-offwhite/85"
                }`}
              >
                Choose plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
