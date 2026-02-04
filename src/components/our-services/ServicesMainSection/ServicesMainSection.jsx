"use client";

import { useState } from "react";
import styles from "./ServicesMainSection.module.css";
import { FiChevronRight } from "react-icons/fi";

export default function ServicesMainSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What services does Study Now provide?",
    "Is Study Now a UK-based education consultancy?",
    "Does Study Now help with visas and university applications?",
    "Which countries does Study Now support students from?",
    "Does Study Now provide support after enrolment?"
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h1>Our Services</h1>
          <p>
            Study Now is a UK-based international education consultancy providing
            transparent, tech-enabled, and holistic support for students and families
            pursuing global study opportunities.
          </p>
        </div>

        {/* TOP 2 FULL WIDTH CARDS */}
        <div className={styles.topCards}>
          <div className={styles.whiteCard}>
            <h2>Who We Are & What We Do</h2>
            <p>
              Study Now supports students and families through every stage of the
              international education journey. Headquartered in the United Kingdom,
              we operate across Nigeria, Ghana, Kenya, and Türkiye.
            </p>
            <p>
              We guide students from consultation and course selection through
              applications, visa processing, and enrolment.
            </p>
            <p>
              We work with accredited universities across the UK, USA, Canada,
              and Europe.
            </p>
          </div>

          <div className={styles.whiteCard}>
            <h2>Our Approach to Student Support</h2>
            <p>
              International education can be complex. We simplify the process by
              combining expert guidance, compliance-focused admissions support,
              and personalised planning.
            </p>
          </div>
        </div>

        {/* 4 SUB CARDS */}
        <div className={styles.subCards}>
          <div className={styles.subCard}>
            <h3>Student Consultation</h3>
            <p>
              A structured three-stage support model providing clarity and continuity.
            </p>
            <ul>
              <li>Initial engagement and study options</li>
              <li>Academic counselling and pathway alignment</li>
              <li>Admissions and visa compliance support</li>
            </ul>
          </div>

          <div className={styles.subCard}>
            <h3>Accommodation Assistance</h3>
            <p>
              We help students secure safe, comfortable, and affordable accommodation
              through trusted housing providers.
            </p>
          </div>

          <div className={styles.subCard}>
            <h3>Partner University Services</h3>
            <p>
              We support admissions coordination, student readiness, and integration
              with partner universities and providers.
            </p>
          </div>

          <div className={styles.subCard}>
            <h3>Ongoing Student Support</h3>
            <p>
              Support continues beyond enrolment including transitions,
              academic queries, and progression opportunities.
            </p>
          </div>
        </div>

        {/* EDUCATION PATHWAYS CARD */}
        <div className={styles.pathwaysCard}>
          <div className={styles.pathwaysLeft}>
            <h2>Education Pathways</h2>

            <h4>University Opportunities</h4>
            <p>
              We support students pursuing undergraduate, postgraduate,
              and pathway programmes worldwide.
            </p>
          </div>

          <div className={styles.pathwaysRight}>
            <h4>School Opportunities</h4>
            <p>
              We assist families seeking international school and preparatory
              programmes with strong UK education expertise.
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqButton}
                  onClick={() => toggleFAQ(index)}
                >
                  <FiChevronRight
                    className={`${styles.arrow} ${
                      openIndex === index ? styles.rotate : ""
                    }`}
                  />
                  {faq}
                </button>

                {openIndex === index && (
                  <div className={styles.faqContent}>
                    <p>
                      Please contact Study Now for detailed guidance tailored to your
                      academic background and study goals.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
