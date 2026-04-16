"use client";

import Link from "next/link";
import { caseStudiesData } from "./data";
import styles from "./page.module.css";

export default function CaseStudiesOverview() {
  const caseStudies = Object.entries(caseStudiesData);

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <Link href="/knowledge" className={styles.backLink}>← Back to Knowledge Center</Link>
          <h1 className={styles.pageTitle}>Case Studies</h1>
          <p className={styles.pageSubtitle}>Real-world solutions across complex corporate, tax, and regulatory challenges.</p>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {caseStudies.map(([slug, study]) => (
              <Link key={slug} href={`/knowledge/case-studies/${slug}`} className={styles.card}>
                <span className={styles.cardNum}>0{caseStudies.indexOf([slug, study]) + 1}</span>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardDesc}>{study.description}</p>
                <span className={styles.link}>View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}