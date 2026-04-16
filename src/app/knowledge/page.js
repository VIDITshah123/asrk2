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

      {/* Case Studies */}
      <section className={`section ${styles.caseStudiesSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionSubtitle}>Real-world solutions across complex corporate, tax, and regulatory challenges.</p>
          <div className={styles.caseStudiesGrid}>
            <Link href="/knowledge/case-studies/corporate-structuring" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>01</span>
              <h3 className={styles.caseTitle}>Corporate Structuring & Reorganization</h3>
              <p className={styles.caseDesc}>Complex mergers, demergers, and corporate restructuring for listed and unlisted entities.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/insolvency-bankruptcy" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>02</span>
              <h3 className={styles.caseTitle}>Insolvency & Bankruptcy Code (IBC) Matters</h3>
              <p className={styles.caseDesc}>Resolution planning, bid preparation, and successful implementation across multiple sectors.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/regulatory-investigations" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>03</span>
              <h3 className={styles.caseTitle}>Regulatory Investigations & Compliance</h3>
              <p className={styles.caseDesc}>Successfully navigating complex regulatory scrutiny and investigation proceedings.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/taxation-dispute-resolution" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>04</span>
              <h3 className={styles.caseTitle}>Taxation & Dispute Resolution</h3>
              <p className={styles.caseDesc}>Comprehensive tax planning, compliance, and dispute resolution across direct and indirect taxes.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/international-transactions" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>05</span>
              <h3 className={styles.caseTitle}>International Transactions & Investments</h3>
              <p className={styles.caseDesc}>Cross-border structuring, FEMA compliance, and international due diligence.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/ipo-capital-markets" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>06</span>
              <h3 className={styles.caseTitle}>IPO Support & Capital Markets</h3>
              <p className={styles.caseDesc}>Pre-IPO structuring, due diligence, and regulatory compliance for public offerings.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/sebi-matters" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>07</span>
              <h3 className={styles.caseTitle}>SEBI Matters & Regulatory Compliance</h3>
              <p className={styles.caseDesc}>Specialized expertise in securities law compliance and dispute resolution.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
            <Link href="/knowledge/case-studies/specialized-advisory" className={styles.caseStudyCard}>
              <span className={styles.caseNum}>08</span>
              <h3 className={styles.caseTitle}>Specialized Advisory Services</h3>
              <p className={styles.caseDesc}>Unique expertise in niche areas requiring specialized knowledge.</p>
              <span className={styles.caseLink}>View Details →</span>
            </Link>
          </div>
          <div className={styles.viewAllWrap}>
            <Link href="/knowledge/case-studies" className={styles.viewAllBtn}>View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* CMS Integration Placeholder */}
      <section className={`section ${styles.cmsSection}`}>
        <div className="container">
          <div className={styles.cmsNotice}>
            <h2>Insights & Articles</h2>
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
            <p><Link href="/contact" >Contact us to get started</Link></p>
          </div>
        </div>
      </section>
    </div>
  );
}
