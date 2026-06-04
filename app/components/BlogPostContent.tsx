"use client"

import type { BlogPost } from "@/lib/blogs"
import { motion } from "framer-motion"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

interface BlogPostContentProps {
  post: BlogPost
}

const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1
      className="mt-12 mb-4 font-display-alt text-headline-md text-bv-on-surface first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mt-10 mb-3 font-display-alt text-headline-sm text-bv-on-surface"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-8 mb-2 text-body-lg font-semibold text-bv-on-surface"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-5 text-body-md leading-relaxed text-bv-secondary last:mb-0" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-bv-link underline underline-offset-2 transition-colors hover:opacity-80"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-5 space-y-2 pl-5 text-body-md text-bv-secondary" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-5 space-y-2 pl-5 text-body-md text-bv-secondary" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="list-disc marker:text-bv-secondary" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-bv-on-surface" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-bv-on-surface" {...props}>
      {children}
    </em>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code
          className="rounded-bv-sm bg-bv-tertiary px-1.5 py-0.5 text-label-sm text-bv-on-surface"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <div className="my-6 overflow-x-auto rounded-bv-lg border border-bv-border bg-bv-neutral">
        <code
          className={`block px-5 py-4 text-body-sm leading-relaxed text-bv-on-surface ${className ?? ""}`}
          {...props}
        >
          {children}
        </code>
      </div>
    )
  },
  pre: ({ children, ...props }) => <>{children}</>,
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-2 border-bv-primary pl-5 italic text-bv-secondary"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => (
    <hr className="my-10 border-bv-border" {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse text-body-sm text-bv-secondary"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-bv-border bg-bv-surface-elevated px-4 py-2.5 text-left text-label-sm font-medium text-bv-on-surface"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-bv-border px-4 py-2.5" {...props}>
      {children}
    </td>
  ),
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:px-8">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-label-sm text-bv-secondary transition-colors hover:text-bv-on-surface"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-label-sm font-medium text-bv-secondary">
          {post.category}
        </span>
        <h1 className="mt-2 font-display text-headline-display text-bv-on-surface">
          {post.title}
        </h1>
        <time className="mt-3 block text-body-md text-bv-secondary">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {post.content}
        </ReactMarkdown>
      </motion.div>
    </article>
  )
}
