"use client";

import type { BlogPostMeta } from "@/lib/blogs";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogSectionProps {
  posts: BlogPostMeta[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  // Show only the first 2 posts as preview on the homepage
  const previewPosts = posts.slice(0, 2);

  if (posts.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display-alt text-headline-md text-bv-on-surface">
            Blog
          </h2>
          <p className="mt-2 text-body-md text-bv-secondary">
            We&apos;re crafting the best engineering stories just for you. Check
            back soon.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display-alt text-headline-md text-bv-on-surface">
          Latest from the blog
        </h2>
        <p className="mt-2 text-body-md text-bv-secondary">
          Updates, deep dives, and engineering notes.
        </p>
      </motion.div>

      <div className="mt-10 space-y-4">
        {previewPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between gap-4 rounded-bv-lg border border-bv-border bg-bv-surface-elevated px-5 py-4 transition-colors hover:border-bv-secondary"
            >
              <div className="min-w-0 flex-1">
                <span className="text-label-sm font-medium text-bv-secondary">
                  {post.category}
                </span>
                <h3 className="mt-0.5 truncate text-headline-sm text-bv-on-surface transition-colors group-hover:text-bv-primary">
                  {post.title}
                </h3>
              </div>
              <time className="shrink-0 text-label-sm text-bv-secondary">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </Link>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8"
      >
        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-bv-md border border-bv-border bg-transparent px-5 text-label-lg font-medium text-bv-on-surface transition-colors hover:bg-bv-tertiary"
        >
          View all posts
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
