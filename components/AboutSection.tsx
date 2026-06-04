"use client";

import { motion } from "framer-motion";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={20} height={20}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={20} height={20}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={20} height={20}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const services = [
  {
    num: "01",
    icon: <HeartIcon />,
    title: "Wedding Photography",
    desc: "Complete wedding day coverage — every emotion, detail, and precious moment captured with warmth and artistry, from golden morning light to the final dance.",
    tags: ["PRE-SHOOT", "CEREMONY", "RECEPTION"],
  },
  {
    num: "02",
    icon: <CameraIcon />,
    title: "Fashion & Portrait",
    desc: "Editorial fashion and portrait sessions that highlight personality, style, and elegance with a cinematic, refined touch you can feel in every frame.",
    tags: ["FASHION", "PERSONAL", "STUDIO"],
  },
  {
    num: "03",
    icon: <CalendarIcon />,
    title: "Homecoming & Events",
    desc: "Homecoming ceremonies and special events documented with rhythm and clarity — the emotional pulse of every gathered moment preserved for generations.",
    tags: ["HOMECOMING", "CELEBRATIONS", "EVENTS"],
  },
];

const steps = [
  {
    num: "01",
    title: "Consult",
    desc: "We discuss every aspect of your event — timeline, locations, and themes — ensuring nothing is left to chance on your most important day.",
  },
  {
    num: "02",
    title: "Capture",
    desc: "On the day, we focus on every detail with professional expertise, documenting genuine emotions and crafting frames that carry real meaning.",
  },
  {
    num: "03",
    title: "Deliver",
    desc: "Professionally retouched galleries, premium albums, and highlight films delivered within 3 months — a timeless collection to treasure forever.",
  },
];

const stats = [
  { num: "10+", label: "Years of Craft" },
  { num: "380+", label: "Weddings Captured" },
  { num: "2", label: "Countries" },
];

export function AboutSection() {
  return (
    <>
      {/* ── Our Story ─────────────────────────────────────── */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <motion.p
            className="about-story-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.p>

          <motion.p
            className="about-story-script"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
        
          </motion.p>

          <motion.h2
            className="about-story-display"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
          >
            Lov&apos;Ceylon
          </motion.h2>

          <div className="about-story-rule" />

          <motion.p
            className="about-story-body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Your dedicated wedding photographer! With 10+ years of professional
            experience, we focus on every detail of your big day, ensuring
            everything is captured with care and expertise. Our team discusses
            every aspect of your event beforehand and is always ready to help,
            delivering exceptional results with a professional touch.
          </motion.p>

          <div className="about-story-rule" />

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            {stats.map(({ num, label }) => (
              <div key={label} className="about-stat">
                <span className="about-stat__num">{num}</span>
                <span className="about-stat__label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="about-services-section">
        <div className="about-services-inner">
          <div className="about-section-head">
            <motion.p
              className="about-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Offer
            </motion.p>
            <motion.h2
              className="about-section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Services
            </motion.h2>
          </div>

          <div className="about-services-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                className="about-service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="about-card-num">{svc.num}</span>
                <div className="about-card-icon">{svc.icon}</div>
                <h3 className="about-card-title">{svc.title}</h3>
                <p className="about-card-desc">{svc.desc}</p>
                <div className="about-card-tags">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="about-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────── */}
      <section className="about-process-section">
        <div className="about-process-inner">
          <motion.p
            className="about-section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="about-process-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Process
          </motion.h2>

          <div className="about-process-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="about-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14 }}
              >
                <div className="about-step-dot" />
                <span className="about-step-num">{step.num}</span>
                <h3 className="about-step-title">{step.title}</h3>
                <p className="about-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
