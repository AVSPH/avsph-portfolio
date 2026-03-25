import { portfolioCapabilities } from "./portfolio-data";

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
          {portfolioCapabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border-light)] bg-[var(--background-alt)] p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--foreground-light)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

