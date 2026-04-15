"use client";

import { useState } from "react";
import styles from "./page.module.css";
// import { motion } from "framer-motion"; // Un-comment once framer-motion is fully used across the site

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    // <div className={styles.main}>
    //   <section className={styles.header}>
    //     <div className="container">
    //       <h1 className={styles.pageTitle}>Private Consultation</h1>
    //       <p className={styles.pageSubtitle}>For matters requiring senior attention and strict confidentiality.</p>
    //     </div>
    //   </section>

      <section className={`section ${styles.contactSection}`}>
        <div className={`container ${styles.twoColumn}`}>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h3>Kolkata (HQ)</h3>
              <p>Unimark Asian, 16th Floor, 52/1</p>
              <p>Shakespeare Sarani, Kolkata 700017</p>
              <p>+91 33 4095 2000</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>Mumbai</h3>
              <p>Naman Midtown, B-206, 2nd Floor</p>
              <p>Senapati Bapat Marg, Elphinstone, Mumbai 400013</p>
              <p>+91 22 4455 2377</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>Direct Inquiries</h3>
              <p>info@arsk.in</p>
            </div>
          </div>
          
          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Professional Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company / Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Nature of Inquiry</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitBtn} ${status === 'loading' ? styles.loading : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Request Call Back'}
              </button>
              
              {status === 'success' && (
                <p className={styles.successMsg}>Your inquiry has been received. A partner will be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>There was an error submitting your request. Please try again or email us directly.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    // </div>
  );
}
