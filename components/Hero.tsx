import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-end overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Gym floor with weight racks and open training space"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/70 to-charcoal/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
            Show up. Get stronger. Repeat.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-offwhite/70">
            Forge is built around real coaching, honest programming, and a floor
            that pushes you further every single session.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center bg-red px-7 text-sm font-semibold text-offwhite transition-colors hover:bg-red-dim"
            >
              Book a free session
            </Link>
            <Link
              href="/classes"
              className="inline-flex h-12 items-center border border-offwhite/30 px-7 text-sm font-semibold text-offwhite transition-colors hover:border-offwhite"
            >
              See the classes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
