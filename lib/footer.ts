export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterConfig {
  sections: FooterSection[];
  copyright: string;
}

export const footerConfig: FooterConfig = {
  sections: [
    {
      title: "Systems",
      links: [{ label: "All systems", href: "/systems" }],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "#" },
        { label: "Twitter / X", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "mailto:zafajardo9@gmail.com" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} BuildVault. All rights reserved.`,
};
