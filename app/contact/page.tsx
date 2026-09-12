import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-charcoal text-offwhite">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Come see what training here feels like.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-offwhite/65">
              Tell us what you are working toward. We will show you the floor,
              introduce you to a coach, and help you choose a good first step.
            </p>
            <div className="mt-12 space-y-6 border-t border-offwhite/15 pt-8 text-sm text-offwhite/75">
              <div>
                <p className="font-semibold text-offwhite">Find us</p>
                <p className="mt-2">123 Fitness Avenue</p>
              </div>
              <div>
                <p className="font-semibold text-offwhite">Call or write</p>
                <p className="mt-2">(000) 123 4567 · hello@gymfitness.com</p>
              </div>
              <div>
                <p className="font-semibold text-offwhite">Open every day</p>
                <p className="mt-2">
                  Weekdays 5am to 11pm · Weekends 7am to 9pm
                </p>
              </div>
            </div>
          </div>

          <form className="bg-offwhite p-7 text-charcoal sm:p-10">
            <h2 className="text-3xl font-bold">Start the conversation.</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-charcoal/60">
              Leave your details and a coach will get back to you with a useful
              next step.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Name
                <input
                  className="mt-2 h-12 w-full border-b border-charcoal/25 bg-transparent px-0 outline-none transition-colors focus:border-red"
                  type="text"
                  name="name"
                />
              </label>
              <label className="text-sm font-semibold">
                Email
                <input
                  className="mt-2 h-12 w-full border-b border-charcoal/25 bg-transparent px-0 outline-none transition-colors focus:border-red"
                  type="email"
                  name="email"
                />
              </label>
            </div>
            <label className="mt-6 block text-sm font-semibold">
              What are you looking for?
              <select
                className="mt-2 h-12 w-full border-b border-charcoal/25 bg-transparent outline-none focus:border-red"
                name="interest"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="trial">A first session</option>
                <option value="classes">Classes</option>
                <option value="membership">Membership</option>
                <option value="coaching">Coaching</option>
              </select>
            </label>
            <label className="mt-6 block text-sm font-semibold">
              Message
              <textarea
                className="mt-2 min-h-32 w-full resize-y border-b border-charcoal/25 bg-transparent px-0 py-3 outline-none transition-colors focus:border-red"
                name="message"
              />
            </label>
            <button
              type="submit"
              className="mt-8 h-12 bg-red px-7 text-sm font-semibold text-offwhite transition-colors hover:bg-red-dim"
            >
              Send your note
            </button>
          </form>
        </div>
      </section>
      <div className="border-t border-offwhite/15 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-offwhite/55">
          <span>Prefer to explore first?</span>
          <Link
            href="/classes"
            className="font-semibold text-offwhite transition-colors hover:text-red"
          >
            See the classes -&gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
