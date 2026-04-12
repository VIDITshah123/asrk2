"use client";

import Image from "next/image";
import styles from "./page.module.css";

const leadership = [
  {
    name: "Ajoy Kumar Mohta",
    title: "Partner, Direct & International Taxation",
    credentials: "LLB, FCA, AICWA | In practice since 1985",
    description: "Ajoy leads ARSK's direct taxation practice, covering income tax advisory, international tax, transfer pricing, and the full spectrum of tax financial planning.",
    image: "/images/people/ajoymohta.jpeg"
  },
  {
    name: "Suresh Kumar Kabra",
    title: "Partner, Audit & Financial Advisory",
    credentials: "FCA | In practice since 1984",
    description: "Suresh brings expertise across accounting, auditing, financial engineering, and business planning. He works closely with management teams on sustainable business model design.",
    image: "/images/people/sureshkumarkabra.jpeg"
  },
  {
    name: "Ravindra Khandelwal",
    title: "Partner, Indirect Taxation & Business Advisory",
    credentials: "FCA | In practice since 1989",
    description: "Ravindra heads ARSK's indirect taxation practice and is also extensively engaged in business advisory work — valuations, acquisitions and takeovers, negotiations, and international assignments.",
    image: "/images/people/ravindra khandelwal.jpeg"
  }
];

const partners = [
  {
    name: "Kalyan Mukherjee",
    title: "Partner, Direct Taxation",
    credentials: "FCA | In practice since 1999",
    description: "Kalyan has deep domain knowledge in direct tax, having successfully handled complex issues at assessment and appellate levels.",
    image: "/images/people/kalyanmukherjee.jpeg"
  },
  {
    name: "Chetan Gutgutia",
    title: "Partner, Audit & Attestation",
    credentials: "FCA | post-qualification experience: 8+ years",
    description: "Chetan manages the audit and attestation functions of the firm. He brings strong technical knowledge of reporting and regulatory requirements applicable to corporates.",
    image: "/images/people/chetangutgutia.jpeg"
  },
  {
    name: "Amrit Kabra",
    title: "Partner, Mngmt. Consultancy | Head, Mumbai Office",
    credentials: "FCA, ISA | post-qualification experience: 5+ years",
    description: "Amrit leads the management consultancy division and heads the firm's Mumbai office. His focus areas include equity valuations, and corporate restructuring.",
    image: "/images/people/amritkabra.JPEG"
  },
  {
    name: "Prakher Raj Kapoor",
    title: "Partner, Audit & Assurance",
    credentials: "ACA",
    description: "Prakher independently manages the audit and assurance division, bringing current knowledge of the accounting and auditing standards applicable to corporates.",
    image: "/images/people/prakharrajkapoor.jpeg"
  }
];

const professionals = [
  { name: "Tanisha Gourisaria (ACS)", role: "Manager, Corporate Law Division: Company law, RBI, FEMA, and SEBI advisory." },
  { name: "Mohit Khemka (ACA)", role: "Indirect Tax, including periodic returns, departmental audits, adjudications, and appeals." },
  { name: "Nidhi Kyal (FCA)", role: "Manager, Direct Taxation: Returns, assessments, and appeals." },
  { name: "Keyur Mehta (ACS)", role: "Assistant Manager, Accounts and Compliance / Virtual CFO Division." },
  { name: "Isha Beriwal (ACS)", role: "Corporate Law: SEBI, RBI, NBFC matters, due diligence." },
  { name: "Vandita Acharya (ACS)", role: "Company Law: Mergers, demergers, due diligence, litigation support." }
];

export default function Team() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Team</h1>
          <p className={styles.pageSubtitle}>Three Leaders. Seven partners. One firm. Your matter in senior hands.</p>
        </div>
      </section>

      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Leadership</h2>
          <div className={styles.grid}>
            {leadership.map((person, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={person.image} alt={person.name} fill className={styles.image} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{person.name}</h3>
                  <p className={styles.title}>{person.title}</p>
                  <p className={styles.credentials}>{person.credentials}</p>
                  <p className={styles.desc}>{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Partners</h2>
          <div className={styles.grid}>
            {partners.map((person, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={person.image} alt={person.name} fill className={styles.image} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{person.name}</h3>
                  <p className={styles.title}>{person.title}</p>
                  <p className={styles.credentials}>{person.credentials}</p>
                  <p className={styles.desc}>{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.profSection}`}>
        <div className="container">
           <h2 className={styles.sectionTitle}>Professional Team</h2>
           <p className={styles.profSubtitle}>Our partners are supported by a strong team of Chartered Accountants, Company Secretaries, and specialists across all divisions.</p>
           
           <div className={styles.profGrid}>
              {professionals.map((prof, idx) => (
                <div key={idx} className={styles.profItem}>
                  <h4 className={styles.profName}>{prof.name}</h4>
                  <p className={styles.profRole}>{prof.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
