import Image from "next/image";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE AMOEBA */}
        <div className={styles.imageWrap}>
          <div className={styles.amoeba}>
            <Image
              src="/images/about.jpg"
              alt="About us"
              fill
              className={styles.amoebaImg}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          
          {/* H1 + BORDER + PARTICLES */}
          <div className={styles.headingRow}>
            <div className={styles.headingBorder}>
              <h1>WHO ARE WE!</h1>
            </div>

            {/* SVG PARTICLES */}
            <svg
              className={styles.particles}
              width="140"
              height="80"
              viewBox="0 0 140 80"
            >
              {[...Array(25)].map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 140}
                  cy={Math.random() * 80}
                  r={Math.random() * 2 + 0.5}
                />
              ))}
            </svg>
          </div>

          {/* PARAGRAPH */}
          <p className={styles.desc}>
            We are committed to building world-class educational pathways <br />
            connecting students with global opportunities and trusted <br />
            partner institutions across multiple continents.
            <br /><br />
            Our mission is simple — empower dreams, simplify processes, <br />
            and ensure successful international transitions for students.
          </p>

        </div>
      </div>

      {/* STATS */}
      <div className={styles.stats}>
        <Stat number="3000" label="Students Enrolled" />
        <Stat number="150" label="Partner Universities" />
        <Stat number="99%" label="Visa Success Rate" />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.circleBg}>
        <div className={styles.circleBgInner}></div>
        <div className={styles.circleContent}>
          <h2>{number}</h2>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
}
