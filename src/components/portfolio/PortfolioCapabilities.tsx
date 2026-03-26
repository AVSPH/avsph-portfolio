import { Target, Users, TrendingUp, LucideIcon } from "lucide-react";

import { portfolioCapabilities } from "./portfolio-data";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Users,
  TrendingUp,
};

export default function PortfolioCapabilities() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-bold uppercase tracking-wider text-[var(--accent)]">
            Why It Works
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)] md:text-5xl">
            Clean creative backed by operational support
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            The portfolio is only half the story. The other half is the systems
            and people who keep the funnel moving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioCapabilities.map((item) => {
            const Icon = iconMap[item.icon] ?? Target;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border-light)] bg-[var(--background-alt)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-light)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
