export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  href?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ponko-form",
    title: "Ponko Form",
    description:
      "A all rounder form that will handle transactions, payments, and form submissions.",
    category: "Payment, Forms",
    tags: ["Vite", "Postgresql", "Neon", "Tailwind", "Tanstack"],
    href: "https://ponko.buildvault.live/",
  },
  {
    id: "marketing-seo",
    title: "Marketing & SEO",
    description:
      "System for managing marketing content and SEO optimization across multiple platforms.",
    category: "Internal Systems",
    tags: ["Next.js", "Postgresql", "Tailwind", "Gemini AI", "Firecrawl"],
    href: "https://marketing.buildvault.live/",
  },
  {
    id: "time-track",
    title: "Time Tracker",
    description:
      "Time tracking and project management tool for teams and organizations.",
    category: "Organizational Systems",
    tags: [
      "Vite",
      "Tanstack",
      "Google AI",
      "Postgresql",
      "Neon",
      "BetterAuth",
      "Tailwind",
    ],
    href: "https://time-tracker-trkv4.ondigitalocean.app/",
  },

  {
    id: "lms-studio",
    title: "LMS Educate",
    description:
      "System for managing educational content and learning management.",
    category: "Educational Systems",
    tags: [
      "Nextjs",
      "Google AI",
      "Postgresql",
      "Neon",
      "BetterAuth",
      "Tailwind",
    ],
    href: "https://lms-educate.buildvault.live/",
  },
];
