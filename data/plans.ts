export type PricingPlan = {
  slug: "free" | "pro" | "lifetime";
  name: string;
  displayPrice: string;
  price: number;
  suffix?: string;
  description: string;
  features: string[];
  featured?: boolean;
  href: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "free",
    name: "Free",
    displayPrice: "$0",
    price: 0,
    description: "Explore the teaching style before choosing a complete path.",
    features: ["Intro lessons", "Basic exercises", "Community access"],
    href: "/register",
  },
  {
    slug: "pro",
    name: "Pro",
    displayPrice: "$149",
    price: 149,
    suffix: "/year",
    description: "Annual access to every current course and project.",
    features: ["All current courses", "Portfolio projects", "Certificates", "Progress tracking", "Community access"],
    featured: true,
    href: "/checkout/pro",
  },
  {
    slug: "lifetime",
    name: "Lifetime",
    displayPrice: "$399",
    price: 399,
    description: "Permanent access to the complete and growing library.",
    features: ["Everything in Pro", "Lifetime access", "Future courses", "Premium projects"],
    href: "/checkout/lifetime",
  },
];

export const getPlanBySlug = (slug: string) => pricingPlans.find((plan) => plan.slug === slug);
