"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";

const images = [
  "/images/reception.jpeg",
  "/images/client lobby 2.jpeg",
  "/images/client lobby.jpeg",
  "/images/office-1.jpeg",
  "/images/office 2.jpeg",
  "/images/office 3.jpeg",
  "/images/library.jpeg",
  "/images/conference room 1.jpeg",
  "/images/conference room 2.jpeg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroBackground}>
           {images.map((imgSrc, idx) => (
             <Image 
               key={idx}
               src={imgSrc} 
               fill 
               priority={idx === 0}
               alt={`ARSK Corporate Office ${idx + 1}`}
               className={`${styles.heroImage} ${idx === currentImageIndex ? styles.active : styles.inactive}`} 
             />
           ))}
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Absolute.</span>
            <span className={styles.titleLine}>Professional.</span>
            <span className={styles.titleLine}>Rigor.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A legacy of excellence. High-status exclusivity in chartered accountancy, advisory, and taxation.
          </p>
          <div className={styles.heroActions}>
            <Link href="/services" className={styles.primaryBtn}>Explore Our Expertise</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Private Consultation</Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Strip */}
      <section className={styles.trustSignals}>
        <div className="container">
          <FadeIn>
            <div className={styles.logosWrap}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>25+</span>
                <span className={styles.trustLabel}>Years of Legacy</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>Tier 1</span>
                <span className={styles.trustLabel}>Bank Empanelments</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>Pan-India</span>
                <span className={styles.trustLabel}>Service Reach</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>100+</span>
                <span className={styles.trustLabel}>Corporate Clients</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brief Overview Section */}
      <section className={`section ${styles.overviewSection}`}>
        <div className={`container ${styles.overviewContainer}`}>
          <FadeIn>
            <h2 className={styles.sectionTitle}>Precision in Every Detail</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.overviewBody}>
              <p>
                At ARSK & Associates, we understand that true wealth and corporate resilience are constructed on foundations of irrefutable precision. Our firm caters to an exclusive echelon of enterprises, offering bespoke audit, tax, and strategic advisory services.
              </p>
              <p>
                Operating from our headquarters in Kolkata with an expanding presence in Mumbai, our mandate is simple: uncompromised quality and unmatched discretion.
              </p>
              <Link href="/about" className={styles.linkArrow}>
                Discover Our Heritage →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
