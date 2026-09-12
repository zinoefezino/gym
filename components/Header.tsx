"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray/20 bg-charcoal">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-2xl font-bold tracking-tight text-offwhite">
            Gym
            <span className="text-red">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-offwhite/80 transition-colors hover:text-offwhite"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center bg-red px-6 text-sm font-semibold text-offwhite transition-colors hover:bg-red-dim"
          >
            Join now
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-offwhite lg:hidden"
        >
          <HugeiconsIcon
            icon={open ? Cancel01Icon : Menu01Icon}
            size={28}
            strokeWidth={1.75}
          />
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-t border-gray/20 bg-charcoal px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-offwhite/80 transition-colors hover:text-offwhite"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 w-full items-center justify-center bg-red text-sm font-semibold text-offwhite transition-colors hover:bg-red-dim"
          >
            Join now
          </Link>
        </nav>
      )}
    </header>
  );
}
