"use client";

import { useMemo, useState } from "react";

import PortfolioMediaBadge from "./PortfolioMediaBadge";
import PortfolioMediaFrame from "./PortfolioMediaFrame";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioGallery() {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(portfolioItems.map((item) => item.category))
    );
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="section bg-[var(--background)]">
      <div className="container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-bold uppercase tracking-wider text-[var(--accent)]">
              Full Library
            </span>
            <h2 className="mb-3 text-3xl font-extrabold text-[var(--primary)] md:text-5xl">
              Browse by category, format, or campaign goal
            </h2>
            <p className="max-w-2xl text-lg text-[var(--foreground-light)]">
              The grid below is built for fast scanning. Drop in new images or
              PDFs as they are ready.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? "border-transparent bg-[var(--primary)] text-white"
                      : "border-[var(--border-light)] bg-white text-[var(--primary)] hover:-translate-y-0.5 hover:shadow-sm"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative p-4">
                <PortfolioMediaFrame
                  title={item.title}
                  type={item.type}
                  preview={item.preview}
                  className="h-44"
                />
                <div className="absolute left-6 top-6">
                  <PortfolioMediaBadge type={item.type} />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--foreground-light)]">
                  {item.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-light)] bg-[var(--background-alt)] px-3 py-1 text-[11px] font-semibold text-[var(--primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
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

