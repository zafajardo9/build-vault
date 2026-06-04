"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-bv-xl border border-bv-border bg-bv-surface-elevated px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        {/* Decorative accent — subtle geometric line */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full border border-bv-border/30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full border border-bv-border/20"
        />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display-alt text-headline-md text-bv-on-surface sm:text-headline-lg"
        >
          Have a system in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-4 max-w-xl text-body-md text-bv-secondary"
        >
          Every project starts with a conversation. Tell us about the system you
          need — whether it&apos;s a prototype, a full platform, or something in
          between — and we&apos;ll figure out the rest together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-bv-md bg-bv-primary px-6 text-label-lg font-medium text-bv-primary-contrast transition-opacity hover:opacity-90"
          >
            Start the conversation
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
      </motion.div>
    </section>
  )
}
