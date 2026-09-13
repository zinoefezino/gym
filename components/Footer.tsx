// components/Footer.tsx
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  NewTwitterIcon,
  TiktokIcon,
  MailAtSign01Icon,
  Call02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com", icon: InstagramIcon, label: "Instagram" },
  { href: "https://twitter.com", icon: NewTwitterIcon, label: "X" },
  { href: "https://tiktok.com", icon: TiktokIcon, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-offwhite"
            >
              Gym<span className="text-red">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray">
              A gym built around real coaching, honest programming, and a floor
              that pushes you further every session.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-offwhite/70 transition-colors hover:text-offwhite"
                >
                  <HugeiconsIcon
                    icon={social.icon}
                    size={20}
                    strokeWidth={1.75}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offwhite/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite/80 transition-colors hover:text-offwhite"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offwhite/50">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/80">
              <li>Monday to Friday: 5am to 11pm</li>
              <li>Saturday and Sunday: 7am to 9pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-offwhite/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/80">
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={18}
                  strokeWidth={1.75}
                  className="shrink-0 text-red"
                />
                123 Fitness Avenue
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={18}
                  strokeWidth={1.75}
                  className="shrink-0 text-red"
                />
                (000) 123 4567
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={MailAtSign01Icon}
                  size={18}
                  strokeWidth={1.75}
                  className="shrink-0 text-red"
                />
                hello@gymfitness.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray/20 pt-8 text-sm text-gray sm:flex-row">
          <p>© {new Date().getFullYear()} Gym Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-offwhite">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-offwhite">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
