"use client";

import { useState } from "react";
import {
  PACKAGE_CATEGORIES,
  PACKAGES,
  type PackageCategory,
} from "@/lib/packages";
import { SITE } from "@/lib/site";

function formatPrice(n: number) {
  return n.toLocaleString("en-LK");
}

export function PackagesView({ backdropLabel }: { backdropLabel?: string }) {
  const [category, setCategory] = useState<PackageCategory>("wedding");
  const tiers = PACKAGES[category];

  return (
    <section className="packages-page">
      <div className="packages-page__hero">
        <p className="label-ultra">Investment</p>
        <h1 className="title-ultra">Packages</h1>
        {backdropLabel && (
          <p className="packages-page__sub">{backdropLabel}</p>
        )}
      </div>

      <div className="packages-tabs">
        {PACKAGE_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={category === c.id ? "is-active" : ""}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="packages-grid">
        {tiers.map((tier) => (
          <article
            key={tier.id}
            className={`package-card ${tier.popular ? "package-card--popular" : ""}`}
          >
            {tier.popular && <span className="package-card__badge">Most Popular</span>}
            <p className="package-card__name">{tier.name}</p>
            <p className="package-card__price">
              <span>{tier.currency}</span> {formatPrice(tier.price)}
            </p>
            <p className="package-card__tagline">{tier.tagline}</p>
            <ul className="package-card__features">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`package-card__cta ${tier.popular ? "package-card__cta--fill" : ""}`}
            >
              Enquire on WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
