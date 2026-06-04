"use client";

import { siteConfig } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-bv-border bg-bv-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <a
          href="/"
          className="text-label-lg font-medium tracking-tight text-bv-on-surface transition-colors hover:text-bv-primary"
        >
          {siteConfig.name}
        </a>

        <nav className="flex items-center gap-6">
          {siteConfig.navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
              className="text-label-sm text-bv-secondary transition-colors hover:text-bv-on-surface"
            >
              {link.label}
            </motion.a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
