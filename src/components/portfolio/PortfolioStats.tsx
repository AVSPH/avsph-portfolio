import { portfolioStats } from "./portfolio-data";

export default function PortfolioStats() {
  return (
    <section className="section bg-[var(--background)]">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioStats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center rounded-2xl border border-[var(--border-light)] bg-white p-8 text-center shadow-sm"
            >
              <p className="text-5xl font-black tracking-tight text-[var(--primary)] md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-light)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
