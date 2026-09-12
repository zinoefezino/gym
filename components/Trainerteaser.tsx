import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const trainers = [
  {
    name: "Marcus Reid",
    role: "Strength & Conditioning",
    image: "/img4.avif",

    detail:
      "Barbell strength, movement quality, and the steady work that makes big lifts feel inevitable.",
    years: "12 yrs coaching",
  },
  {
    name: "Dara Chen",
    role: "Head Coach, Powerlifting",
    image: "/img6.avif",

    detail:
      "Technical powerlifting sessions for athletes who want to train hard and lift with intent.",
    years: "9 yrs coaching",
  },
  {
    name: "Lucy Kent",
    role: "Conditioning & Endurance",
    image: "/img3.jpg",

    detail:
      "Conditioning that leaves you capable, not crushed, with progress you can actually feel.",
    years: "7 yrs coaching",
  },
];

export default function TrainersTeaser() {
  return (
    <section className="bg-offwhite px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[0.98] tracking-tight text-charcoal sm:text-5xl">
              You bring the goal. We bring the plan.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-charcoal/65 lg:pb-1">
            No clipboard coaching. Our team learns how you move, what you are
            working toward, and when to ask for one more rep.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Link
            href="/trainers"
            className="group relative flex min-h-[34rem] flex-col justify-end overflow-hidden bg-charcoal p-7 sm:p-10"
          >
            <Image
              src={trainers[0].image}
              alt={trainers[0].name}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/45 to-transparent" />
            <div className="relative z-10 max-w-xl">
              <h3 className="mt-3 text-3xl font-bold text-offwhite sm:text-4xl">
                {trainers[0].name}
              </h3>
              <p className="mt-2 text-sm text-offwhite/70">
                {trainers[0].role}
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-offwhite/90">
                “{trainers[0].detail}”
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-offwhite/80">
                <span className="border border-offwhite/25 px-3 py-2">
                  {trainers[0].years}
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {trainers.slice(1).map((trainer) => (
              <Link
                key={trainer.name}
                href="/trainers"
                className="group grid min-h-64 grid-cols-[0.8fr_1.2fr] overflow-hidden bg-charcoal sm:min-h-72 lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    loading="lazy"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <h3 className="mt-3 text-xl font-bold text-offwhite">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-offwhite/60">
                      {trainer.role}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-offwhite/75">
                      {trainer.detail}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-charcoal/15 pt-6">
          <p className="max-w-xl text-sm leading-relaxed text-charcoal/60">
            Every new member starts with a movement screen and a conversation,
            not a sales pitch.
          </p>
          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 text-sm font-bold text-charcoal transition-colors hover:text-red"
          >
            Meet the full team
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
