"use client";

import Link from "next/link";
import styles from "./page.module.css";

const reasons = [
  {
    title: "1. Four decades of continuity",
    desc: "The firm was established in 1984. Our founding partners have been in practice since the mid-1980s. That continuity means we have seen Indian business through multiple regulatory regimes, economic cycles, and structural shifts — and our advice is informed by that depth."
  },
  {
    title: "2. Senior attention, not junior throughput",
    desc: "We are a partner-led firm. The partner assigned to your engagement is accountable for the quality of the advice and the outcome of the matter. We do not operate on a model where a senior takes the brief, and a junior delivers the work without oversight."
  },
  {
    title: "3. Breadth that holds together",
    desc: "Most CA firms specialise in one or two areas. ARSK handles statutory audit, direct and indirect tax, international taxation, corporate law, FEMA, NCLT matters, valuations, and M&A support — with named specialists for each. When your matters intersect, we manage that intersection."
  },
  {
    title: "4. Genuine India expertise",
    desc: "We are an Indian firm, advising on Indian law, for clients operating in India. We understand the Indian regulatory personality — the practical realities of assessment proceedings, the texture of SEBI and RBI interactions, the dynamics of appellate litigation."
  },
  {
    title: "5. Two cities, one firm",
    desc: "Our Kolkata headquarters and Mumbai branch operate as one firm, not as franchises. Clients with interests in both cities — or with counterparties in either — get consistent advice and coordinated service."
  },
  {
    title: "6. No false promises",
    desc: "We will tell you what we can do. We will be honest about what we cannot. We will not overcommit on outcomes in tax disputes or regulatory matters. The value we add is in preparation, representation, and judgement."
  }
];

export default function WhyChooseARSK() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.pageTitle}>Why Choose ARSK</h1>
          <p className={styles.pageSubtitle}>
            We will not pretend this is a simple choice. Choosing a CA firm is a long-term decision. 
            You are not just selecting a service provider — you are selecting an advisor who will be present 
            at important moments in your business: a tax demand, an acquisition, a restructuring, an inheritance dispute.
          </p>
          <p className={styles.emphasis}>We take that seriously.</p>
        </div>
      </section>

      <section className={`section ${styles.reasonsSection}`}>
        <div className="container">
          <div className={styles.reasonsGrid}>
            {reasons.map((reason, idx) => (
              <div key={idx} className={styles.reasonCard}>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDesc}>{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <Link href="/contact" className={styles.ctaBtn}>Talk to a Partner About Your Situation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
