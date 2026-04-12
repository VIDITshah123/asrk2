"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from 'next/link';

const faqs = [
  {
    q: "Who does ARSK typically work with?",
    a: "We work with founders and promoters of growing Indian companies, family businesses managing succession or governance transitions, CFOs of mid-market enterprises, multinationals entering or operating in India, and non-resident Indians with financial and compliance obligations."
  },
  {
    q: "What is the typical engagement model?",
    a: "Most clients work with us on an ongoing retainer basis — for audit, tax compliance, or corporate law advisory. We also take on specific project engagements: a transaction requiring due diligence, a valuation assignment, or a tax dispute representation."
  },
  {
    q: "Can you help with a tax dispute that is already in progress?",
    a: "Yes. We frequently step in on matters that are already at the assessment, appeal, or tribunal stage. We will need to understand the history of the matter before we commit to a view, but we are experienced in taking over and managing live disputes."
  },
  {
    q: "We are a foreign company entering India. Can you help with entity setup, tax registration, and ongoing compliance?",
    a: "Yes. We provide end-to-end India entry advisory, covering entity structure advice, tax and FEMA considerations, company incorporation support, tax registrations, and ongoing compliance management."
  },
  {
    q: "Do you provide outsourced CFO or finance function services?",
    a: "Yes. Our virtual CFO division provides outsourced finance leadership for growing companies — covering financial planning, MIS, board reporting, regulatory compliance, and coordination with auditors and lenders."
  }
];

export default function Knowledge() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.pageTitle}>Knowledge Center</h1>
          <p className={styles.pageSubtitle}>Insights, case studies, and frequently asked questions.</p>
        </div>
      </section>

      {/* CMS Integration Placeholder */}
      <section className={`section ${styles.cmsSection}`}>
        <div className="container">
          <div className={styles.cmsNotice}>
            <h2>Insights & Case Studies</h2>
            <p>Sanity CMS integration is configured. Recent publications, market analysis, and key case studies will automatically populate here once published in the studio.</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqWrapper}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${openFaq === idx ? styles.active : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <span className={styles.faqIcon}>{openFaq === idx ? '−' : '+'}</span>
                </div>
                <div className={styles.faqBodyWrapper}>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <p>Still have questions?</p>
            <Link href="/contact" className={styles.contactBtn}>Contact us to get started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
