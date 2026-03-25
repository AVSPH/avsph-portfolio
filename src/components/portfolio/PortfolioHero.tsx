import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Grid2X2, Layers } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background-alt)] pt-32 pb-20">
      <div className="absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[520px] w-[520px] translate-y-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border-light)] bg-white/80 px-4 py-2 shadow-sm">
              <Image
                src="/assets/logo.jpeg"
                alt="Advanced Virtual Staff logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  Advanced Virtual Staff
                </p>
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Portfolio Library
                </p>
              </div>
            </div>

            <span className="mb-4 block font-bold uppercase tracking-wider text-[var(--accent)]">
              Portfolio
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[var(--primary)] md:text-5xl lg:text-6xl">
              A clean, organized library of work that converts
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--foreground-light)] md:text-xl">
              Explore branding, ads, SEO proof, and social assets structured for
              fast browsing. Every piece is designed to support real-world
              conversion workflows.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/booking" className="btn-primary">
                Book a Free Call
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#work" className="btn-secondary">
                View the Library
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[var(--border-light)] bg-white p-6 shadow-xl md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                    Portfolio Dashboard
                  </p>
                  <h2 className="text-xl font-bold text-[var(--primary)]">
                    Preview Stack
                  </h2>
                </div>
                <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  2026 Edition
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--background-alt)] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        Featured Projects
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        High-impact case highlights
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--background)] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Grid2X2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--primary)]">
                          Category Filters
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          Fast navigation by format
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--background)] p-4">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
                      Formats
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--primary)]">
                      Images • PDFs • Proof
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      Ready for uploads
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

