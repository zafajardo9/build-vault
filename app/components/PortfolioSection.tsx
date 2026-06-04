"use client";

import { portfolioItems } from "@/lib/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioSection() {
  // Show only the first 3 items as a preview on the homepage
  const previewItems = portfolioItems.slice(0, 3);

  return (
    <section
      id="systems"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display-alt text-headline-md text-bv-on-surface">
          Featured systems
        </h2>
        <p className="mt-2 text-body-md text-bv-secondary">
          A selection of engineered systems we have built.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewItems.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="group relative flex flex-col rounded-bv-xl border border-bv-border bg-bv-surface-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-bv-secondary hover:shadow-[0_0_0_1px_var(--color-bv-secondary)]"
          >
            {/* Category label */}
            <div className="flex items-center gap-3 px-6 pt-5">
              <span className="inline-flex items-center rounded-bv-full bg-bv-tertiary px-3 py-1 text-label-sm font-medium text-bv-secondary">
                {item.category}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
              <h3 className="text-headline-sm font-medium text-bv-on-surface transition-colors group-hover:text-bv-primary">
                {item.title}
              </h3>

              <p className="mt-2 flex-1 text-body-sm leading-relaxed text-bv-secondary">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-bv-md border border-bv-border bg-bv-surface px-2 py-0.5 text-label-sm text-bv-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {item.href && (
                <a
                  href={item.href}
                  className="mt-5 inline-flex h-9 w-fit items-center gap-1.5 rounded-bv-md border border-bv-border bg-transparent px-3.5 text-label-sm font-medium text-bv-on-surface transition-all duration-200 hover:bg-bv-primary hover:text-bv-primary-contrast hover:border-bv-primary"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <Link
          href="/systems"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-bv-md bg-bv-primary px-6 text-label-lg font-medium text-bv-primary-contrast transition-all duration-200 hover:opacity-90"
        >
          View all systems
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
