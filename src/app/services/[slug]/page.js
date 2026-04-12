"use client";

import { use } from 'react';
import Link from "next/link";
import { servicesData } from "../data";
import styles from "../page.module.css";
import { notFound } from "next/navigation";

export default function ServiceDetail({ params }) {
  // Fix for Next 15 specific unwrapping
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.pageTitle}>{service.title}</h1>
          <Link href="/services" className={styles.backLink}>← Back to Services</Link>
        </div>
      </section>

      <section className={`section ${styles.detailSection}`}>
        <div className="container">
           <div className={styles.content}>
              <h2 className={styles.detailSubtitle}>Service Overview</h2>
              <p className={styles.detailDesc}>{service.description}</p>
              <div className={styles.detailBody}>
                 <p>{service.content}</p>
              </div>
              <div className={styles.cta}>
                 <Link href="/contact" className={styles.contactBtn}>Request Consultation</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
