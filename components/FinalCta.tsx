// components/FinalCta.tsx
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-red px-6 py-9 text-center shadow-[inset_0_18px_35px_-25px_var(--color-charcoal)] sm:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-offwhite sm:text-5xl">
          Stop planning. Start training.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-offwhite/85">
          Your first session is free. Come see the floor, meet a coach, and find
          out what a real training plan feels like.
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex h-12 items-center bg-offwhite px-8 text-sm font-semibold text-charcoal transition-colors hover:bg-offwhite/85"
        >
          Book your free session
        </Link>
      </div>
    </section>
  );
}
