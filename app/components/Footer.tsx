"use client";

import { footerConfig } from "@/lib/footer";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-bv-border bg-bv-neutral">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="text-label-lg font-medium tracking-tight text-bv-on-surface transition-colors hover:text-bv-primary"
            >
              {siteConfig.name}
            </a>
            <span className="mt-1 block text-body-sm italic text-bv-secondary">
              by Zack
            </span>
            <p className="mt-3 text-body-sm text-bv-secondary">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link sections */}
          {footerConfig.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-label-sm font-medium text-bv-on-surface">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm text-bv-secondary transition-colors hover:text-bv-on-surface"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 border-t border-bv-border pt-6 text-center text-label-sm text-bv-secondary">
          {footerConfig.copyright}
        </div>
      </div>
    </footer>
  );
}
