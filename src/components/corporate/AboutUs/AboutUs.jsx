import Image from "next/image";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
    return (
        <>
            <section className={styles.aboutSection}>
                <div className={styles.container}>

                    {/* LEFT IMAGE AMOEBA */}
                    <div className={styles.imageWrap}>
                        <div className={styles.amoeba}>
                            <Image
                                src="/images/shared/hero-section-bg1.jpg"
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
                            Study Now is a global education consultancy headquartered in London, UK, with a solid presence in Nigeria, Ghana, Kenya, and Qatar. We are also rapidly expanding to other regions.   <br /> <br />
                            We offer expert consultation to potential students from different backgrounds to help them achieve their goal of studying Abroad. We partner with a large number of accredited universities in the UK, USA, Canada and Europe. We are meticulous in the admissions planning and execution process, from consultation to university and visa application.  <br /> <br /> <br />
                            We firmly believe that our collaborative effort in the Study Now team bridges the gap between students and the life-changing study opportunities they seek. Our services are student-centric, and we pride ourselves on being proactive in communications, problem-solving, and helping our students make well-informed decisions.
                            <br /><br /> <br />
                            Our expert academic counsellors make the route to global education not only achievable but also exciting.
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

            {/* REAL SVG WAVEFORM */}
            <div className={styles.waveSection}>
                <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
                    <path className={styles.wave3}
                        d="M0,140 C180,60 380,220 680,140 C980,60 1200,220 1440,140 L1440,200 L0,200 Z" />
                </svg>
            </div>
        </>
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
