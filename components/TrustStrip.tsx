import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserGroupIcon,
  Dumbbell01Icon,
  Certificate01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

const stats = [
  { icon: UserGroupIcon, value: "500+", label: "Active members" },
  { icon: Dumbbell01Icon, value: "20+", label: "Classes each week" },
  { icon: Certificate01Icon, value: "100%", label: "Certified coaches" },
  { icon: Clock01Icon, value: "5am to 11pm", label: "Open every day" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-gray/15 bg-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <HugeiconsIcon
              icon={stat.icon}
              size={28}
              strokeWidth={1.75}
              className="text-red"
            />
            <div className="mt-3 text-2xl font-bold text-charcoal">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
