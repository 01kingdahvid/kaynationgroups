"use client";

import { Row, Col } from "antd";
import styles from "./ProgramHero.module.css";

export default function ProgramHero({
  title,
  university,
  location,
  heroImage,
  logoImage
}) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.inner}>
        <Row align="middle">
          {/* LEFT CONTENT */}
          <Col xs={24} md={14} lg={12}>
            <div className={styles.leftContent}>
              <div className={styles.titleRow}>
                <span className={styles.accentLine}></span>

                <div>
                  <h1 className={styles.title}>{title}</h1>
                  <p className={styles.university}>
                    <span>At {university}</span>
                  </p>
                </div>
              </div>

              
            </div>
          </Col>

          {/* RIGHT SPACE (empty but keeps grid balance) */}
          <Col xs={0} md={10} lg={12}></Col>
        </Row>
      </div>

      {/* LOGO BADGE */}
      <div className={styles.logoBadge}>
        <div className={styles.logoDot}></div>
        <div className={styles.logoCircle}>
          <img src={logoImage} alt={university} />
        </div>
      </div>
    </section>
  );
}
