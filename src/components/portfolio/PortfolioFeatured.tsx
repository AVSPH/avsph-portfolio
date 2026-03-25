import PortfolioMediaBadge from "./PortfolioMediaBadge";
import PortfolioMediaFrame from "./PortfolioMediaFrame";
import { featuredWork } from "./portfolio-data";

export default function PortfolioFeatured() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-bold uppercase tracking-wider text-[var(--accent)]">
            Featured Work
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)] md:text-5xl">
            Curated highlights with clear business impact
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            Start with the strongest proof pieces, then dive into the full
            library below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <div
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--background-alt)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <PortfolioMediaFrame
                  title={item.title}
                  type={item.type}
                  preview={item.preview}
                  className="h-52"
                />
                <div className="absolute left-4 top-4">
                  <PortfolioMediaBadge type={item.type} />
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--foreground-light)]">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--primary)]">
                  {item.highlight}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-light)] bg-white px-3 py-1 text-xs font-semibold text-[var(--primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {item.format}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

