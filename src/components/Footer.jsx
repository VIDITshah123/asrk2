import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3 className={styles.logo}>ARSK & Associates</h3>
          <p className={styles.description}>
            A leading Chartered Accountants firm delivering absolute professional rigor
            and high-status exclusivity.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Core Services</h4>
          <Link href="/services/audit">Audit & Assurance</Link>
          <Link href="/services/direct-tax">Direct & International Tax</Link>
          <Link href="/services/indirect-tax">Indirect Tax (GST)</Link>
          <Link href="/services/advisory">Corporate Advisory</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Firm</h4>
          <Link href="/about">About Us</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/why-choose-arsk">Why Choose ARSK</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Locations</h4>
          <p>Kolkata (HQ)</p>
          <p>Mumbai</p>
        </div>
      </div>
      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {new Date().getFullYear()} ARSK & Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
