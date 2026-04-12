"use client";

import Link from "next/link";
import { servicesData } from "./data";
import styles from "./page.module.css";

export default function ServicesOverview() {
  const services = Object.entries(servicesData);

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>Comprehensive, high-caliber solutions across tax, audit, and advisory.</p>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {services.map(([slug, service]) => (
              <div key={slug} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <Link href={`/services/${slug}`} className={styles.link}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
