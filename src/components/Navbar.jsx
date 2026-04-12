"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span>ARSK & Associates</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/knowledge">Knowledge Center</Link>
          <Link href="/contact" className={styles.cta}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
