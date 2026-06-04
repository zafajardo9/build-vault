import type { Metadata } from "next";
import Header from "@/app/components/Header";
import BlogList from "@/app/components/BlogList";
import Footer from "@/app/components/Footer";
import { getAllBlogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog — BuildVault",
  description:
    "Updates, deep dives, and engineering notes from the BuildVault team.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  );
}
