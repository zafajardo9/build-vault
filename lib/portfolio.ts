export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  href?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nexus-auth",
    title: "Nexus Auth",
    description:
      "A distributed authentication layer handling 100k+ concurrent sessions with sub-50ms latency. Built on OAuth 2.0 + WebAuthn with a hot-replicated session store.",
    category: "Infrastructure",
    tags: ["Go", "Redis", "WebAuthn", "Docker"],
    href: "#",
  },
  {
    id: "cascade-cms",
    title: "Cascade CMS",
    description:
      "Headless content management platform with real-time collaboration, versioned workflows, and a plugin architecture. Powers 200+ editorial sites.",
    category: "Full-Stack",
    tags: ["Next.js", "Postgres", "Liveblocks", "tRPC"],
    href: "#",
  },
  {
    id: "pulse-monitor",
    title: "Pulse Monitor",
    description:
      "Real-time infrastructure observability dashboard with customizable alerts, anomaly detection, and on-call scheduling. Processes 10M+ events daily.",
    category: "DevOps",
    tags: ["Rust", "ClickHouse", "Grafana", "Kafka"],
    href: "#",
  },
  {
    id: "vault-api",
    title: "Vault API Gateway",
    description:
      "Unified API gateway with rate limiting, circuit breaking, and mTLS. Handles request routing, authentication, and schema validation for a microservice mesh.",
    category: "Infrastructure",
    tags: ["TypeScript", "Fastify", "Envoy", "Postgres"],
    href: "#",
  },
  {
    id: "lumen-design",
    title: "Lumen Design System",
    description:
      "Component library and design token framework used across 12 products. Includes theming, accessibility auditing, and a Figma plugin for design–dev sync.",
    category: "Frontend",
    tags: ["React", "Tailwind", "Storybook", "Figma"],
    href: "#",
  },
  {
    id: "synth-forms",
    title: "Synth Forms",
    description:
      "Dynamic form engine that generates multi-step flows from JSON schemas. Supports conditional logic, file uploads, signature capture, and offline queueing.",
    category: "Full-Stack",
    tags: ["React", "Zod", "DynamoDB", "S3"],
    href: "#",
  },
]
