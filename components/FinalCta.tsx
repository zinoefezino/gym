import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-charcoal px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center bg-red px-6 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-offwhite sm:text-5xl">
            Stop planning. Start training.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-offwhite/85">
            Your first session is free. Come see the floor, meet a coach, and
            find out what a real training plan feels like.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex h-12 items-center bg-offwhite px-8 text-sm font-semibold text-charcoal transition-colors hover:bg-offwhite/85"
          >
            Book your free session
          </Link>
        </div>
      </div>
    </section>
  );
}
