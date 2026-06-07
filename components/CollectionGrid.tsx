"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AdaptivePhoto } from "./AdaptivePhoto";
import type { PhotoGroup } from "@/lib/types";

export function CollectionGrid({ groups }: { groups: PhotoGroup[] }) {
  return (
    <section className="collection-grid-section">
      <motion.h2
        className="title-section collection-grid-section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Beautifully Frozen Stories
      </motion.h2>

      <div className="collection-grid">
        {groups.map((group, i) => {
          const cover = group.photos[0];
          if (!cover) return null;
          return (
            <motion.article
              key={group.slug}
              className="collection-grid__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 4) * 0.08 }}
            >
              <Link href={`/stories#${group.slug}`} className="collection-grid__link">
                <AdaptivePhoto
                  src={cover.url}
                  alt={`${group.title} — photography by Lov'Ceylon, Sri Lanka`}
                  framed
                />
                <div className="collection-grid__overlay">
                  <h3>{group.title}</h3>
                  <span>{group.photos.length} photographs</span>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
