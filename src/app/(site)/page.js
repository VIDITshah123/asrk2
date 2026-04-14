"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";
import AboutPage from "../about/page";
import ServicesPage from "../services/page";
import TeamPage from "../team/page";
import KnowledgePage from "../knowledge/page";
import ContactPage from "../contact/page";

const quotes = [
  {
    id: 1,
    title: "Depth Without Complexity",
    text: "We handle direct tax, indirect tax, international tax, audit, corporate law, valuations, and transaction advisory — all under one roof. You do not need to coordinate five different advisors. We handle the full picture.",
    image: "/images/Ravindra 2.jpeg"
  },
  {
    id: 2,
    title: "Partner-Level Attention",
    text: "Every engagement at ARSK is led by a qualified partner, not delegated down. With seven partners across disciplines and offices in Kolkata and Mumbai, you get senior judgment on your matters — not junior execution with partner sign-off.",
    image: "/images/suresh kabra 2.jpeg"
  },
  {
    id: 3,
    title: "Built for Indian Business Reality",
    text: "From manufacturing enterprises in Kolkata to multinationals entering India, we understand the complexity of the Indian regulatory environment — GST, FEMA, transfer pricing, NCLT, SEBI — and we represent clients across all of these arenas.",
    image: "/images/ajoy mohta 2.jpeg"
  }
];

const galleryImages = [
  "/images/conference room 1.jpeg",
  "/images/library.jpeg",
  "/images/reception.jpeg",
  "/images/office-1.jpeg",
  "/images/client lobby.jpeg",
  "/images/office 2.jpeg"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -500) {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    } else if (swipe > 500) {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    }
  };

  return (
    <div className={styles.main}>
      {/* Quote Carousel */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className={styles.carouselCard}
            >
              <div className={styles.carouselImageBox}>
                <Image
                  src={quotes[currentIndex].image}
                  alt={quotes[currentIndex].title}
                  fill
                  className={styles.carouselImage}
                  priority
                />
              </div>
              <div className={styles.carouselText}>
                <h2 className={styles.panelTitle}>{quotes[currentIndex].title}</h2>
                <p className={styles.panelText}>{quotes[currentIndex].text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.carouselDots}>
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
      <section className={styles.overviewSection}>
        <div className={styles.overviewBgWrap}>
          <Image
            src="/images/office-1.jpeg"
            alt="Office"
            fill
            className={styles.overviewBgImage}
            priority
          />
          <div className={styles.overviewImageOverlay} />
        </div>
        <div className={`container ${styles.overviewContainer}`}>
          <FadeIn>
            <h2 className={styles.sectionTitle}>Precision in Every Detail</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.overviewBody}>
              <p>
                <strong>Forty years of practice. One firm that handles all of it.</strong>
              </p>
              <p>
                ARSK & Associates is a Chartered Accountant firm established in 1984. We work with founders, promoters, family businesses, and multinationals navigating India's complex regulatory and commercial landscape — from day-to-day compliance to high-stakes transactions and disputes.
              </p>
              <p>
                With partner-led teams in Kolkata and Mumbai, and seven qualified partners across audit, taxation, corporate law, and advisory, we bring the breadth of a large firm with the accountability of a practice where your partner picks up the phone.
              </p>
              <Link href="/about" className={styles.linkArrow}>
                Discover Our Heritage →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.galleryTitle}>Our World</h2>
          </FadeIn>
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={styles.galleryItem}>
                  <Image
                    src={img}
                    alt={`Office ${idx + 1}`}
                    fill
                    className={styles.galleryImg}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Single Page Application Sections */}
      <div id="about"><AboutPage /></div>
      <div id="services"><ServicesPage /></div>
      <div id="team"><TeamPage /></div>
      <div id="knowledge"><KnowledgePage /></div>
      <div id="contact"><ContactPage /></div>
    </div>
  );
}
