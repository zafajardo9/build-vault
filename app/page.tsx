import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import BlogSection from "@/app/components/BlogSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import { getAllBlogPosts } from "@/lib/blogs";

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <BlogSection posts={posts} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
