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
  "/images/conference room 2.jpeg",
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
        <div className={styles.carouselContainer}>
          <motion.div
            className={styles.carouselTrack}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {quotes.map((quote, index) => (
              <div key={quote.id} className={styles.carouselSlide}>
                <div className={styles.carouselCard}>
                  <div className={styles.carouselImageBox}>
                    <Image
                      src={quote.image}
                      alt={quote.title}
                      width={500}
                      height={600}
                      className={styles.carouselImage}
                      priority={index === 0}
                    />
                  </div>
                  <div className={styles.carouselText}>
                    <h2 className={styles.panelTitle}>{quote.title}</h2>
                    <p className={styles.panelText}>{quote.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
        <div className={`container ${styles.overviewContainer}`}>
          <div className={styles.overviewImageSide}>
            <FadeIn>
              <Image
                src="/images/office-1.jpeg"
                alt="ARSK Office"
                width={600}
                height={500}
                className={styles.staticOverviewImage}
              />
            </FadeIn>
          </div>
          <div className={styles.overviewTextSide}>
            <FadeIn delay={0.2}>
              <h2 className={styles.sectionTitle}>Precision in Every Detail</h2>
              <div className={styles.overviewBody}>
                <p>
                  ARSK & Associates was established as a partnership firm of Chartered Accountants in 1984, with a founding commitment to delivering independent, objective, and technically sound counsel to business clients.
                </p>
                <p>
                  Four decades later, the firm's core commitments have not changed — but the practice has grown significantly in both depth and scope. Today, ARSK operates from offices in Kolkata and Mumbai, with a team of seven partners and a professional staff that spans Chartered Accountants, Company Secretaries, and advisory specialists.
                </p>
                <p>
                  We serve founders and promoters of growing companies, family businesses navigating succession and governance, CFOs of mid-market enterprises who need a reliable sounding board, and multinationals entering or operating in India. Our clients come to us because they want advisors who understand their business — not just their balance sheet.
                </p>
                <Link href="/about" className={styles.linkArrow}>
                  Discover Our Heritage →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Embedded Single Page Application Sections */}
      <div id="about"><AboutPage /></div>
      <div id="team"><TeamPage /></div>
      <div id="services"><ServicesPage /></div>
      <div id="knowledge"><KnowledgePage /></div>
      {/* <div id="contact"><ContactPage /></div> */}
    </div>
  );
}
