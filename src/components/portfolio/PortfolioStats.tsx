import { portfolioStats } from "./portfolio-data";

export default function PortfolioStats() {
  return (
    <section className="section bg-[var(--background)]">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioStats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[var(--border-light)] bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-[var(--primary)]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--foreground-light)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

