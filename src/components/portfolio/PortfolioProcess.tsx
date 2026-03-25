import { portfolioSteps } from "./portfolio-data";

export default function PortfolioProcess() {
  return (
    <section className="section bg-[var(--background-alt)]">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-bold uppercase tracking-wider text-[var(--accent)]">
            Process
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)] md:text-5xl">
            A repeatable workflow behind every asset
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            We move from audit to optimization with a clear, consistent system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-[var(--border-light)] bg-white p-6 shadow-sm"
            >
              <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white shadow-lg">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold text-[var(--primary)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--foreground-light)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

