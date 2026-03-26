import { Quote } from "lucide-react";

import { portfolioTestimonials } from "./portfolio-data";

export default function PortfolioTestimonials() {
  return (
    <section className="section bg-[var(--background-alt)]">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-bold uppercase tracking-wider text-[var(--accent)]">
            Client Results
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)] md:text-5xl">
            What clients say after seeing the work
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            Real feedback from business owners and marketing teams who hired us
            to build their asset stack.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-3xl border border-[var(--border-light)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Quote className="mb-5 h-8 w-8 text-[var(--accent)]/60" />

              <p className="flex-1 text-sm leading-relaxed text-[var(--foreground-light)]">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--primary)]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
