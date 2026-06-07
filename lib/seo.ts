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
