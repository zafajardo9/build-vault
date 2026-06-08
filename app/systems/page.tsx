import type { Metadata } from "next";
import Header from "@/app/components/Header";
import SystemList from "@/app/components/SystemList";
import Footer from "@/app/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Explore a portfolio of carefully engineered systems — from cloud infrastructure and full-stack applications to DevOps tooling and educational platforms.",
  openGraph: {
    title: "Systems — BuildVault",
    description:
      "Explore a portfolio of carefully engineered systems — from cloud infrastructure and full-stack applications to DevOps tooling and educational platforms.",
    url: `${siteConfig.url}/systems`,
  },
  alternates: {
    canonical: `${siteConfig.url}/systems`,
  },
};

export default function SystemsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SystemList />
      </main>
      <Footer />
    </>
  );
}
