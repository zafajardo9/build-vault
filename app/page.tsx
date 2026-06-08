import type { Metadata } from "next";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import BlogSection from "@/app/components/BlogSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import { getAllBlogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const posts = getAllBlogPosts();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
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
