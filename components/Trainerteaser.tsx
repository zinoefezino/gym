import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const trainers = [
  {
    name: "Marcus Reid",
    role: "Strength & Conditioning",
    image: "/img4.avif",
  },
  {
    name: "Dara Chen",
    role: "Head Coach, Powerlifting",
    image: "/img6.avif",
  },
  {
    name: " Lucy Kent",
    role: "Conditioning & Endurance",
    image: "/img3.jpg",
  },
];

export default function TrainersTeaser() {
  return (
    <section className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
            Coaches who know how to push you
          </h2>
          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/70 transition-colors hover:text-charcoal"
          >
            Meet the team
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {trainers.map((trainer) => (
            <Link
              key={trainer.name}
              href="/trainers"
              className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                loading="lazy"
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-offwhite">
                  {trainer.name}
                </h3>
                <p className="text-sm text-offwhite/70">{trainer.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
