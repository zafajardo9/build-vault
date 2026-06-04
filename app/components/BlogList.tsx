"use client";

import type { BlogPostMeta } from "@/lib/blogs";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogListProps {
  posts: BlogPostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-headline-display text-bv-on-surface">
            Blog
          </h1>
          <p className="mt-3 max-w-lg text-body-lg text-bv-secondary">
            We&apos;re crafting the best engineering stories just for you. Check
            back soon for deep dives, case studies, and system breakdowns.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-headline-display text-bv-on-surface">
          Blog
        </h1>
        <p className="mt-3 max-w-lg text-body-lg text-bv-secondary">
          Updates, deep dives, and engineering notes from the BuildVault team.
        </p>
      </motion.div>

      <div className="mt-14 space-y-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-bv-lg border border-bv-border bg-bv-surface-elevated p-6 transition-colors hover:border-bv-secondary sm:p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <span className="text-label-sm font-medium text-bv-secondary">
                    {post.category}
                  </span>
                  <h2 className="mt-1.5 text-headline-sm text-bv-on-surface transition-colors group-hover:text-bv-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-body-md text-bv-secondary">
                    {post.excerpt}
                  </p>
                </div>
                <time className="shrink-0 text-label-sm text-bv-secondary sm:text-right">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
