"use client";

import { portfolioItems } from "@/lib/portfolio";
import { motion } from "framer-motion";

export default function SystemList() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-headline-display text-bv-on-surface">
          Systems
        </h1>
        <p className="mt-3 max-w-lg text-body-lg text-bv-secondary">
          A portfolio of carefully engineered systems — from cloud
          infrastructure to full-stack applications.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
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
              <h2 className="text-headline-sm font-medium text-bv-on-surface transition-colors group-hover:text-bv-primary">
                {item.title}
              </h2>

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
    </section>
  );
}
