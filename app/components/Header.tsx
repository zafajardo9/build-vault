"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change / resize past breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* ───────── Desktop: Floating Pill Nav ───────── */}
      <header className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <nav className="flex items-center gap-6 rounded-full border border-bv-border bg-bv-surface-elevated/80 px-6 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl">
          <Link
            href="/"
            className="text-label-sm font-semibold tracking-tight text-bv-on-surface transition-colors hover:text-bv-primary"
          >
            {siteConfig.name}
          </Link>

          <div className="h-4 w-px bg-bv-border" />

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

          <div className="h-4 w-px bg-bv-border" />

          <ThemeToggle />
        </nav>
      </header>

      {/* ───────── Mobile: Hamburger Button ───────── */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border border-bv-border bg-bv-surface-elevated/80 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors hover:bg-bv-surface-elevated"
        >
          <div className="relative flex size-5 items-center justify-center">
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-bv-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-bv-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded-full bg-bv-on-surface transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* ───────── Mobile: Full-Screen Overlay Menu ───────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bv-surface/95 backdrop-blur-2xl md:hidden"
          >
            {/* Site name at top of overlay */}
            <Link
              href="/"
              onClick={closeMenu}
              className="absolute top-6 left-6 text-headline-xs font-semibold tracking-tight text-bv-on-surface"
            >
              {siteConfig.name}
            </Link>

            {/* Theme toggle in top right of overlay */}
            <div className="absolute top-6 right-6" onClick={closeMenu}>
              <ThemeToggle />
            </div>

            {/* Nav links — stacked vertically */}
            <nav className="flex flex-col items-center gap-6">
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                  className="text-headline-sm font-medium text-bv-on-surface transition-colors hover:text-bv-secondary"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
