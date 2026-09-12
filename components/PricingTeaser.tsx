import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

const plans = [
  {
    name: "Day Pass",
    price: "$15",
    period: "per day",
    description: "For your first session, a focused lift, or a day in town.",
    features: [
      "Full gym floor access",
      "Locker room access",
      "One class credit",
    ],
    featured: false,
    action: "Book a day pass",
  },
  {
    name: "Standard",
    price: "$59",
    period: "per month",
    description: "For members who want a reliable place to train every week.",
    features: [
      "Unlimited gym floor access",
      "8 classes a month",
      "One guest pass a month",
    ],
    featured: true,
    action: "Start your membership",
  },
  {
    name: "All Access",
    price: "$99",
    period: "per month",
    description: "For people ready to make coaching part of the plan.",
    features: [
      "Unlimited gym floor access",
      "Unlimited classes",
      "Monthly coaching check in",
      "Priority class booking",
    ],
    featured: false,
    action: "Train with coaching",
  },
];

export default function PricingTeaser() {
  return (
    <section className="bg-offwhite px-6 py-24 text-charcoal lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              A membership with a reason to show up.
            </h2>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 lg:pb-1">
            <p className="max-w-md text-base leading-relaxed text-charcoal/65">
              Start with one session or make Gym part of your week. Choose the
              level of support that will keep you coming back.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-charcoal/15 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-7 sm:p-9 ${
                plan.featured
                  ? "bg-red text-offwhite"
                  : "bg-offwhite text-charcoal"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 bg-charcoal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-offwhite">
                  Most chosen
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p
                className={`mt-3 min-h-12 text-sm leading-relaxed ${
                  plan.featured ? "text-offwhite/80" : "text-charcoal/60"
                }`}
              >
                {plan.description}
              </p>
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
                        plan.featured ? "text-offwhite/90" : "text-charcoal/70"
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
                {plan.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
