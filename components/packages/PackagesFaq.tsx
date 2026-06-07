import { PACKAGES_FAQ } from "@/lib/seo";

export function PackagesFaq() {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-inner">
        <p className="label-ultra" style={{ textAlign: "center" }}>
          Questions
        </p>
        <h2 id="faq-heading" className="title-section" style={{ textAlign: "center" }}>
          Frequently Asked
        </h2>

        <div className="faq-list">
          {PACKAGES_FAQ.map((item) => (
            <details key={item.question} className="faq-item">
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
