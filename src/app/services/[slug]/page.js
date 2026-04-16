"use client";

import { use } from 'react';
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data";
import styles from "../page.module.css";
import { notFound } from "next/navigation";

const serviceImages = {
  "audit":           ["/images/conference room 1.jpeg", "/images/library.jpeg", "/images/office-1.jpeg"],
  "direct-tax":      ["/images/library.jpeg", "/images/conference room 2.jpeg", "/images/office 2.jpeg"],
  "indirect-tax":    ["/images/office-1.jpeg", "/images/client lobby.jpeg", "/images/conference room 1.jpeg"],
  "advisory":        ["/images/office 2.jpeg", "/images/conference room 2.jpeg", "/images/client lobby 2.jpeg"],
  "outsourced-cfo":  ["/images/conference room 2.jpeg", "/images/office 3.jpeg", "/images/library.jpeg"],
  "nri-advisory":    ["/images/client lobby.jpeg", "/images/library.jpeg", "/images/office-1.jpeg"],
  "management-audit":["/images/library.jpeg", "/images/conference room 1.jpeg", "/images/office 3.jpeg"],
};

function parseContent(content) {
  const sections = [];
  const lines = content.split('\n');
  let currentSection = null;
  let currentContent = [];

  lines.forEach(line => {
    if (line.startsWith('VALUE PROPOSITION') || line.startsWith('CLIENT PAIN POINTS') || line.startsWith('HOW WE HELP') || line.startsWith('OUTCOMES')) {
      if (currentSection) {
        currentSection.content = currentContent.join('\n').trim();
        sections.push(currentSection);
      }
      currentSection = { title: line.replace(/^[#•]/g, '').trim(), items: [] };
      currentContent = [];
    } else if (line.trim()) {
      if (!currentSection) {
        currentSection = { title: '', items: [] };
      }
      currentContent.push(line);
    }
  });

  if (currentSection) {
    currentSection.content = currentContent.join('\n').trim();
    sections.push(currentSection);
  }

  return sections;
}

export default function ServiceDetail({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const serviceSections = parseContent(service.content);
  const images = serviceImages[slug] || ["/images/office-1.jpeg", "/images/conference room 1.jpeg", "/images/library.jpeg"];

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>← Back to Services</Link>
          <h1 className={styles.pageTitle}>{service.title}</h1>
          <p className={styles.pageSubtitle}>{service.description}</p>
        </div>
      </section>

      {service.image && (
        <section className={styles.heroImage}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={styles.heroImg}
            priority
          />
          <div className={styles.heroOverlay} />
        </section>
      )}

      <section className={`section ${styles.detailSection}`}>
        <div className="container">
          <div className={styles.content}>
            {serviceSections.map((section, idx) => (
              <div key={idx} className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.sectionBody}>
                  {section.content.split('\n').map((line, lineIdx) => {
                    if (line.startsWith('•')) {
                      return <li key={lineIdx} className={styles.bulletItem}>{line.replace('•', '').trim()}</li>;
                    }
                    return line.trim() ? <p key={lineIdx}>{line}</p> : null;
                  })}
                </div>
              </div>
            ))}
            
            <div className={styles.gallerySection}>
              <h2 className={styles.sectionTitle}>Our Workspace</h2>
              <div className={styles.galleryGrid}>
                {images.map((img, idx) => (
                  <div key={idx} className={styles.galleryItem}>
                    <Image
                      src={img}
                      alt={`Office ${idx + 1}`}
                      fill
                      className={styles.galleryImg}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cta}>
              <Link href="/contact" className={styles.contactBtn}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
