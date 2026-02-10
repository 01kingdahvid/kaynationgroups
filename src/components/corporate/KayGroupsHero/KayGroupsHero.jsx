"use client";

import { useRef, useEffect } from "react";
import styles from "./KayGroupsHero.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
  XOutlined,
  YoutubeFilled
} from "@ant-design/icons";

export default function KayGroupsHero() {
  const heroRef = useRef(null);

  // Cursor Glow Interaction
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <section ref={heroRef} className={styles.heroWrapper}>

        {/* LEFT SOCIAL PANEL */}
        <div className={styles.socialPanel}>


          <div className={styles.socialIcons}>
            <a href="#"><FacebookFilled /></a>
            <a href="#"><InstagramFilled /></a>
            <a href="#"><LinkedinFilled /></a>
            <a href="#"><XOutlined /></a>
            <a href="#"><WhatsAppOutlined /></a>
            <a href="#"><YoutubeFilled/></a>
          </div>

          <div className={styles.verticalText}>CONTACT US</div>
        </div>

        {/* HERO CONTENT */}
        <div className={styles.heroContent}>
          <div className={styles.cursorGlow}></div>
          <div className={styles.overlay}></div>

          <Image
            src="/images/shared/hero-section-bg1.jpg"
            alt="Hero"
            fill
            priority
            className={styles.bgImage}
          />

          <div className={styles.heroInner}>
            <h1>
              The world needs you to decide
            </h1>

            <p>
              Join a growing community of international students who are building better futures through education.
              <br />Apply to the university that fits your goals.
            </p>

            <Link href="/programs/apply" className={styles.ctaBtn}>
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>

      {/* REAL SVG WAVEFORM */}
      <div className={styles.waveSection}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path className={styles.wave1}
            d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1440,100 L1440,200 L0,200 Z" />
          <path className={styles.wave2}
            d="M0,120 C200,20 400,200 700,120 C1000,40 1200,200 1440,120 L1440,200 L0,200 Z" />
          <path className={styles.wave3}
            d="M0,140 C180,60 380,220 680,140 C980,60 1200,220 1440,140 L1440,200 L0,200 Z" />
        </svg>
      </div>
    </>
  );
}
