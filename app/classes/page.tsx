import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    name: "Strength & Power",
    time: "Mon, Wed, Fri · 6:00 am",
    detail:
      "Build durable strength with barbell work, smart progressions, and coaches who care about the rep in front of you.",
    image: "/hero4.avif",
  },
  {
    name: "Conditioning",
    time: "Tue, Thu · 7:00 am",
    detail:
      "Intervals, carries, and engine work that make hard efforts feel more controlled each week.",
    image: "/hero5.jpg",
  },
  {
    name: "Mobility & Recovery",
    time: "Sat · 9:00 am",
    detail:
      "Move better between hard sessions with guided mobility, breathing, and recovery work.",
    image: "/hero2.jpg",
  },
];

export default function ClassesPage() {
  return (
    <main className="bg-charcoal text-offwhite">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-10 lg:py-28">
        <div>
          <h1 className="max-w-2xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            Training that gives your week a shape.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-offwhite/65">
            Every class has a clear purpose, a thoughtful plan, and a coach on
            the floor. Pick the work that meets you where you are.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex h-12 items-center bg-red px-7 text-sm font-semibold transition-colors hover:bg-red-dim"
          >
            Book your first class
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/hero5.jpg"
            alt="Athletes training together on the gym floor"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 to-transparent" />
        </div>
      </section>

      <section className="bg-offwhite px-6 py-20 text-charcoal lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Choose the work that keeps you coming back.
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-charcoal/60">
              Small groups, serious coaching, and room to train at your own
              pace.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-charcoal/15 md:grid-cols-3">
            {classes.map((item) => (
              <article key={item.name} className="group bg-offwhite">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 sm:p-9">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-red">
                    {item.time}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-charcoal/65">
                    {item.detail}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex h-11 items-center bg-charcoal px-5 text-sm font-bold text-offwhite transition-colors hover:bg-red"
                  >
                    Reserve a spot
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
