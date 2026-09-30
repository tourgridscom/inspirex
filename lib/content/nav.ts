import { SOLUTIONS } from "./solutions";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; hint?: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who we are", href: "/about#who-we-are", hint: "Consulting, staffing and solutions" },
      { label: "Our mission", href: "/about#mission", hint: "Problems as opportunities" },
      { label: "Our vision", href: "/about#vision", hint: "Peace of mind through technology" },
      { label: "Our culture", href: "/about#culture", hint: "Listen first, ask questions second" },
      { label: "Business licenses", href: "/about#licenses", hint: "CAGE and small business registration" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: SOLUTIONS.map((s) => ({
      label: s.title,
      href: `/solutions/${s.slug}`,
      hint: s.summary,
    })),
  },
  { label: "Why InspireX", href: "/why-inspirex" },
  { label: "Our team", href: "/team" },
  { label: "Careers", href: "/careers" },
];

export const FOOTER_NAV = {
  Solutions: SOLUTIONS.map((s) => ({ label: s.short, href: `/solutions/${s.slug}` })),
  Company: [
    { label: "About InspireX", href: "/about" },
    { label: "Our mission", href: "/about#mission" },
    { label: "Our culture", href: "/about#culture" },
    { label: "Business licenses", href: "/about#licenses" },
    { label: "Why InspireX", href: "/why-inspirex" },
    { label: "Our team", href: "/team" },
  ],
  Connect: [
    { label: "Careers", href: "/careers" },
    { label: "Contact us", href: "/contact" },
    { label: "All solutions", href: "/solutions" },
  ],
};
