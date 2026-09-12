"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";

const testimonials = [
  {
    name: "Patrick Jane",
    role: "Member since 2023",
    quote:
      "I have tried three other gyms nearby and none of them had coaches who actually watched my form. Forge is different.",
  },
  {
    name: "Michael Torres",
    role: "Member since 2022",
    quote:
      "The classes are hard but never chaotic. Every session has a clear plan, and I have made more progress in four months than I did in two years alone.",
  },
  {
    name: "Sarah Kim",
    role: "Member since 2024",
    quote:
      "Booking classes takes ten seconds, the floor is never overcrowded, and the coaches remember your name. It feels like a real gym should.",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            What members are saying.
          </h2>
        </div>

        <div className="mt-14">
          <div className="bg-charcoal p-8 ring-1 ring-gray/20 sm:p-10 lg:p-14">
            <div className="flex items-start justify-between gap-6">
              <HugeiconsIcon
                icon={QuoteUpIcon}
                size={40}
                className="shrink-0 text-red"
              />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HugeiconsIcon
                    key={i}
                    icon={StarIcon}
                    size={18}
                    className="text-red"
                  />
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-snug text-offwhite sm:text-2xl lg:text-[1.7rem]">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-red text-sm font-semibold text-offwhite">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-offwhite">
                    {current.name}
                  </div>
                  <div className="text-sm text-gray">{current.role}</div>
                </div>
              </div>

              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-1.5 transition-all ${
                      i === active
                        ? "w-9 bg-red"
                        : "w-2.5 bg-offwhite/15 hover:bg-offwhite/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
