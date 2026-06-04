"use client";

import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl font-display text-[clamp(2.5rem,8vw,5.25rem)] font-medium leading-[1.1] tracking-[-0.05em] text-bv-on-surface"
      >
        {siteConfig.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        className="mt-1 text-label-sm italic text-bv-secondary font-sans font-normal tracking-normal"
      >
        by Zack
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-4 max-w-2xl text-body-lg text-bv-secondary"
      >
        {siteConfig.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        className="mt-3 max-w-xl text-body-md text-bv-secondary"
      >
        {siteConfig.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#systems"
          className="inline-flex h-10 items-center justify-center rounded-bv-md bg-bv-primary px-4 text-label-lg font-medium text-bv-primary-contrast transition-opacity hover:opacity-90"
        >
          View Systems
        </a>
        <a
          href="#blog"
          className="inline-flex h-10 items-center justify-center rounded-bv-md border border-bv-border bg-transparent px-4 text-label-lg font-medium text-bv-on-surface transition-colors hover:bg-bv-tertiary"
        >
          Read Blog
        </a>
      </motion.div>
    </section>
  );
}
