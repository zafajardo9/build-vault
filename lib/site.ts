export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  navLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  name: "BuildVault",
  tagline: "We build systems that scale.",
  description:
    "BuildVault is a portfolio of carefully engineered systems — from cloud infrastructure to full-stack applications. Every project is built with precision, performance, and clean architecture in mind.",
  url: "https://buildvault.live",
  ogImage: "/og.png",
  navLinks: [
    { label: "Systems", href: "/systems" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
