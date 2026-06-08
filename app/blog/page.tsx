import type { Metadata } from "next";
import Header from "@/app/components/Header";
import BlogList from "@/app/components/BlogList";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { getAllBlogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates, deep dives, and engineering notes from the BuildVault team. Engineering, design systems, infrastructure, and more.",
  openGraph: {
    title: "Blog — BuildVault",
    description:
      "Updates, deep dives, and engineering notes from the BuildVault team. Engineering, design systems, infrastructure, and more.",
    url: `${siteConfig.url}/blog`,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BuildVault Blog",
    description:
      "Updates, deep dives, and engineering notes from the BuildVault team.",
    url: `${siteConfig.url}/blog`,
    blogPosts: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <Header />
      <main className="flex-1">
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  );
}
