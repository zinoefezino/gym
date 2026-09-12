import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const classes = [
  {
    name: "Strength & Power",
    description:
      "Barbell work and progressive lifts that build real strength over time.",
    image: "/hero2.jpg",
  },
  {
    name: "Conditioning",
    description:
      "High output intervals that build endurance and a stronger engine.",
    image: "/hero3.jpg",
  },
  {
    name: "Mobility & Recovery",
    description:
      "Guided stretching and recovery work that keeps every joint moving well.",
    image: "/hero.jpg",
  },
];

export default function ClassPreviews() {
  return (
    <section className="bg-charcoal px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-offwhite sm:text-4xl">
            Classes for every kind of intensity
          </h2>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-offwhite/80 transition-colors hover:text-offwhite"
          >
            View all classes
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <Link
              key={item.name}
              href="/classes"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-offwhite">{item.name}</h3>
                <p className="mt-2 text-sm text-offwhite/70">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
