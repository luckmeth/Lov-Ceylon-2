import { SITE } from "./site";
import { PACKAGE_CATEGORIES, PACKAGES } from "./packages";

/**
 * Site-wide business identity. Helps Google connect the brand to searches
 * like "Lov'Ceylon photography", "wedding photographer Colombo", etc.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: ["Lov Ceylon", "Love Ceylon Photography"],
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  logo: `${SITE.url}/icon.svg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phoneTel,
  priceRange: "LKR 25,000 – 290,000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  knowsAbout: [
    "Wedding photography",
    "Homecoming photography",
    "Pre-shoot photography",
    "Portrait photography",
  ],
  slogan: SITE.tagline,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.legalName,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#business` },
  inLanguage: "en",
};

/**
 * Offer catalog of every package across categories — surfaces real prices to
 * search engines for queries like "Sri Lankan photography packages price".
 */
export const packagesJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Lov'Ceylon Photography Packages",
  url: `${SITE.url}/packages`,
  provider: { "@id": `${SITE.url}/#business` },
  itemListElement: PACKAGE_CATEGORIES.map((category) => ({
    "@type": "OfferCatalog",
    name: `${category.label} Photography Packages`,
    itemListElement: PACKAGES[category.id].map((tier) => ({
      "@type": "Offer",
      name: `${tier.name} — ${category.label} Package`,
      description: tier.tagline,
      price: tier.price,
      priceCurrency: tier.currency,
      url: `${SITE.url}/packages`,
      availability: "https://schema.org/InStock",
      category: `${category.label} Photography`,
    })),
  })),
};

/**
 * Customer questions targeting real searches ("how much does wedding
 * photography cost in Sri Lanka"). Rendered visibly on /packages AND emitted
 * as FAQPage schema — the two MUST stay in sync, so both read from here.
 */
export const PACKAGES_FAQ: { question: string; answer: string }[] = [
  {
    question: "How much does wedding photography cost in Sri Lanka?",
    answer:
      "Lov'Ceylon wedding photography packages start at LKR 100,000 and go up to LKR 290,000, depending on coverage hours, albums and add-ons such as pre-shoots and highlight videos. Homecoming packages start at LKR 50,000 and pre-casual (pre-shoot) sessions from LKR 25,000.",
  },
  {
    question: "What is included in a Lov'Ceylon wedding photography package?",
    answer:
      "Every wedding package includes up to 10–12 hours of coverage, the bride and groom getting ready, the main photo session, ceremony and reception, all unedited raw images and a set of professionally edited high-resolution photographs. Higher tiers add wedding albums, enlargements, family albums and a cinematic highlight video.",
  },
  {
    question: "Do you offer homecoming and pre-shoot photography?",
    answer:
      "Yes. Alongside weddings we offer dedicated homecoming packages and pre-casual (pre-shoot) sessions at your preferred location. Several wedding collections also bundle a pre-shoot or homecoming session.",
  },
  {
    question: "Which areas of Sri Lanka do you cover?",
    answer:
      "We are based in Colombo and photograph weddings and shoots across Sri Lanka. Travel to your preferred venue can be arranged — message us with your location for details.",
  },
  {
    question: "How do I book Lov'Ceylon photography?",
    answer:
      "Tap “Enquire on WhatsApp” on any package to start a chat with your chosen package pre-filled, or reach us by phone or email on the contact page. We typically reply within 24 hours.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PACKAGES_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function breadcrumbJsonLd(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

/** Small helper to render a JSON-LD <script> tag. */
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
