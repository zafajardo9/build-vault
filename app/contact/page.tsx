import type { Metadata } from "next";
import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your next system. Tell us what you need and we will figure out the rest together.",
  openGraph: {
    title: "Contact - BuildVault",
    description:
      "Start a conversation about your next system. Tell us what you need and we will figure out the rest together.",
    url: `${siteConfig.url}/contact`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
