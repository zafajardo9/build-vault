import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/app/components/Header"
import BlogPostContent from "@/app/components/BlogPostContent"
import Footer from "@/app/components/Footer"
import { getBlogPost, getAllBlogPosts } from "@/lib/blogs"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} — BuildVault`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </>
  )
}
