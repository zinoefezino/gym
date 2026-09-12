import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

const plans = [
  {
    name: "Day Pass",
    price: "$15",
    period: "per day",
    description: "For a first session, a focused lift, or a day in town.",
    features: [
      "Full gym floor access",
      "Locker room access",
      "One class credit",
    ],
  },
  {
    name: "Standard",
    price: "$59",
    period: "per month",
    description: "For a reliable training rhythm with room to make progress.",
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
    description: "For people ready to make coaching part of the plan.",
    features: [
      "Unlimited gym floor access",
      "Unlimited classes",
      "Monthly coaching check-in",
      "Priority class booking",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-offwhite text-charcoal">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:px-10 lg:py-28">
        <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
          Pick the commitment that makes showing up easier.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-charcoal/65 lg:justify-self-end">
          Start with a single day or build training into your routine. There is
          no complicated ladder to climb.
        </p>
      </section>

      <section className="bg-charcoal px-6 py-20 text-offwhite lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-offwhite/20 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col p-8 sm:p-10 ${
                  plan.featured ? "bg-red" : "bg-charcoal"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 bg-offwhite px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal">
                    Most chosen
                  </span>
                )}
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p
                  className={`mt-4 min-h-14 leading-relaxed ${plan.featured ? "text-offwhite/80" : "text-offwhite/60"}`}
                >
                  {plan.description}
                </p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span
                    className={plan.featured ? "text-offwhite/80" : "text-gray"}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-10 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        size={18}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-red"
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-offwhite/90"
                            : "text-offwhite/70"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-10 flex h-12 items-center justify-center text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-charcoal text-offwhite hover:bg-charcoal/80"
                      : "bg-offwhite text-charcoal hover:bg-offwhite/85"
                  }`}
                >
                  {plan.featured ? "Start your membership" : "Choose this plan"}
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-offwhite/55">
            Every membership starts with a quick conversation so we can point
            you toward the right place to begin.
          </p>
        </div>
      </section>
    </main>
  );
}
