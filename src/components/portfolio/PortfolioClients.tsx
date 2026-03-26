import { portfolioClients } from "./portfolio-data";

export default function PortfolioClients() {
  return (
    <section className="border-y border-[var(--border-light)] bg-white py-10">
      <div className="container">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Trusted by businesses across industries
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {portfolioClients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--background-alt)] px-5 py-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-sm font-semibold text-[var(--primary)]">
                {client.name}
              </span>
              <span className="text-xs text-[var(--muted)]">
                · {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
