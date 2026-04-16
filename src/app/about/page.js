"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

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
            <div className={styles.aboutImageStack}>
              <Image
                src="/images/conference room 1.jpeg"
                alt="ARSK Conference Room"
                width={420}
                height={300}
                className={styles.aboutImg}
              />
              <Link href="/contact" className={styles.contactBtn}>
                Request a Consultation →
              </Link>
            </div>
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
          <h2 className={styles.valuesTitle}>Proven Track Record</h2>
          <p className={styles.valuesSubtitle}>Demonstrating consistent excellence across all practice areas</p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueCardImage}>
                <Image src="/images/office-1.jpeg" alt="Complex Structuring" fill className={styles.valueCardImg} />
              </div>
              <h3>Complex Structuring</h3>
              <p>Successfully handled multi-billion rupee restructuring with regulatory compliance across SEBI, RBI, and tax authorities.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueCardImage}>
                <Image src="/images/conference room 2.jpeg" alt="Litigation Excellence" fill className={styles.valueCardImg} />
              </div>
              <h3>Litigation Excellence</h3>
              <p>100% success rate in concluded tax matters with no prosecutions imposed.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueCardImage}>
                <Image src="/images/client lobby.jpeg" alt="Cross-Border Expertise" fill className={styles.valueCardImg} />
              </div>
              <h3>Cross-Border Expertise</h3>
              <p>Multi-jurisdictional experience spanning Asia, Europe, and Middle East.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
