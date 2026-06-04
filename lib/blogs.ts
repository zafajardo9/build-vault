import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const blogsDir = path.join(process.cwd(), "data", "blogs")

/** Parse a single .md file into a BlogPost */
function parseMdFile(filePath: string): BlogPost {
  const slug = path.basename(filePath, ".md")
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "2026-01-01",
    category: data.category ?? "General",
    excerpt: data.excerpt ?? "",
    content,
  }
}

/** Return all blog posts sorted by date descending */
export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogsDir)) return []

  const files = fs
    .readdirSync(blogsDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse() // alphabetical reverse ≈ newest-first if filenames are date-prefixed

  return files
    .map((f) => parseMdFile(path.join(blogsDir, f)))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _, ...meta }) => meta)
}

/** Return a single blog post by slug */
export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return parseMdFile(filePath)
}
