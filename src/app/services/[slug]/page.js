"use client";

import { use } from 'react';
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data";
import styles from "../page.module.css";
import { notFound } from "next/navigation";

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
            <div className={styles.cta}>
              <Link href="/contact" className={styles.contactBtn}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
