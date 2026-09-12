import Image from "next/image";
import Link from "next/link";

const trainers = [
  {
    name: "Marcus Reid",
    role: "Strength & Conditioning",
    detail:
      "Barbell strength, movement quality, and the steady work that makes big lifts feel inevitable.",
    years: "12 years coaching",
    image: "/img4.avif",
  },
  {
    name: "Dara Chen",
    role: "Head Coach, Powerlifting",
    detail:
      "Technical powerlifting sessions for athletes who want to train hard and lift with intent.",
    years: "9 years coaching",
    image: "/img6.avif",
  },
  {
    name: "Lucy Kent",
    role: "Conditioning & Endurance",
    detail:
      "Conditioning that leaves you capable, not crushed, with progress you can actually feel.",
    years: "7 years coaching",
    image: "/img3.jpg",
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-offwhite text-charcoal">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:px-10 lg:py-28">
        <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
          The people behind your best work.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-charcoal/65 lg:justify-self-end">
          Good coaching is part programming, part attention. Our team meets you
          where you are and keeps the next step clear.
        </p>
      </section>

      <section className="bg-charcoal px-6 py-20 text-offwhite lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-0 md:grid-cols-3">
            {trainers.map((trainer) => (
              <article
                key={trainer.name}
                className="group relative flex min-h-[34rem] flex-col justify-end overflow-hidden p-7 sm:p-10"
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    {trainer.name}
                  </h2>
                  <p className="mt-2 text-sm text-offwhite/70">
                    {trainer.role}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-offwhite/90">
                    {trainer.detail}
                  </p>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-wide text-offwhite/70">
                    {trainer.years}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-24">
        <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
          Bring us the goal. We will help build the route.
        </h2>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center bg-red px-7 text-sm font-semibold text-offwhite transition-colors hover:bg-red-dim"
        >
          Talk to a coach
        </Link>
      </section>
    </main>
  );
}
