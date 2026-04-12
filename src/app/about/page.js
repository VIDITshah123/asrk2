"use client";

import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.main}>
      {/* Hero / Parallax Header */}
      <section className={styles.parallaxHeader}>
        <div className={styles.parallaxImage}></div>
        <div className={styles.parallaxContent}>
          <div className="container">
            <h1 className={styles.pageTitle}>Our Heritage</h1>
            <p className={styles.pageSubtitle}>A timeless commitment to ethical practices & fiduciary excellence.</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.twoColumn}`}>
          <div className={styles.columnLeft}>
            <h2 className={styles.sectionTitle}>Built on Trust, Sustained by Precision</h2>
          </div>
          <div className={styles.columnRight}>
            <div className={styles.prose}>
              <p>
                ARSK & Associates is a premier Chartered Accountancy firm committed to delivering comprehensive financial, advisory, and compliance solutions. Established with a vision to build enduring partnerships, we blend traditional professional values with a forward-looking approach.
              </p>
              <p>
                Our philosophy is rooted in deep ethical rigor and intellectual depth. We have consistently provided our clients—ranging from private conglomerates to institutional investors—with clarity in a complex regulatory environment.
              </p>
              <p>
                With a strong foundational presence in Kolkata and a strategic footprint in Mumbai, ARSK & Associates stands at the intersection of local expertise and national reach. Our specialized teams offer nuanced counsel across tax, audit, and strategic advisory, ensuring that our clients' ambitions are matched with robust compliance and prudent risk management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className={styles.valuesTitle}>Our Pillars of Practice</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>The cornerstone of our practice. We adhere to the highest standards of professional and moral diligence.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Exclusivity</h3>
              <p>We work with an exclusive clientele, ensuring personalized and undivided attention to complex mandates.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Precision</h3>
              <p>Absolute accuracy in execution, from statutory audits to cross-border tax structuring.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
