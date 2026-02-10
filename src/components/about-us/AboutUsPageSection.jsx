"use client";
import styles from "./AboutUsPageSection.module.css";

export default function AboutUsPageSection() {
    return (
        <>
            <section className={styles.aboutSection}>
                {/* ===== TOP GRADIENT CARD ===== */}
                <div className={styles.topCard}>
                    <div className={styles.tabRow}>
                        <span className={styles.tabPrimary}>About KNES</span>
                        <span className={styles.tabHighlight}>Core Values</span>
                        <span className={styles.tabPrimary}>Our Approach</span>
                    </div>

                    <div className={styles.topContent}>
                        <h1>A global partner in international education</h1>
                        <p>
                            Kaynation Educational Services is an international education consultancy supporting students and
                            families to access high-quality education opportunities worldwide.
                            Headquartered in Oxford, UK, we operate across key global markets,
                            combining local insight with structured guidance so students can make
                            informed decisions with confidence.
                        </p>

                        <div className={styles.badgeRow}>
                            <span>Offices: Lagos, Abuja, Port Harcourt.</span>
                            <span>Tech-enabled and student-first</span>
                        </div>
                    </div>
                </div>

                {/* ===== INTRO CARDS ===== */}
                <div className={styles.introGrid}>
                    <div className={styles.whoCard}>
                        <h1>Who we are</h1>
                        <p>
                            Founded by experienced professionals from across the education and
                            recruitment sector, Kaynation Educational Services was built on collaboration, deep market knowledge, and a commitment to doing things properly. We are not simply an application service. We are a long-term partner for students and families navigating international education pathways.
                        </p>
                    </div>

                    <div className={styles.diffCard}>
                        <h4>What makes us different</h4>
                        <ul>
                            <li>Transparent guidance and clear next steps</li>
                            <li>Tech-enabled support for a smoother journey</li>
                            <li>Holistic planning for outcomes, not volume</li>
                        </ul>
                    </div>
                </div>

                {/* ===== VISION MISSION ===== */}
                <div className={styles.vmGrid}>
                    <div className={styles.vmCard}>
                        <h4>VISION</h4>
                        <h2>Expand the reach of international education</h2>
                        <p>
                            To expand the reach of international education by making it more
                            accessible and transparent for every student.
                        </p>
                    </div>

                    <div className={styles.vmCard}>
                        <h4>MISSION</h4>
                        <h2>Transparent, tech-enabled, holistic support</h2>
                        <p>
                            We provide transparent, tech-enabled, and holistic support to students
                            and their families, empowering them to realise their goals through
                            international education.
                        </p>
                    </div>
                </div>

                {/* ===== CORE VALUES ===== */}
                <div className={styles.coreValuesSection}>
                    <div className={styles.coreHeader}>
                        <div>
                            <h4>CORE VALUES</h4>
                            <h2>How we show up, every day</h2>
                        </div>
                        <h5>Students-first. Outcomes-focused.</h5>
                    </div>

                    <div className={styles.coreGrid}>
                        <div className={styles.coreCard}>
                            <h3>Transparency</h3>
                            <p>
                                We communicate openly, provide accurate information, and ensure
                                students and partners always understand their options and next steps.
                            </p>
                        </div>

                        <div className={styles.coreCard}>
                            <h3>Advocacy</h3>
                            <p>
                                We champion our students’ ambitions, guiding and supporting them
                                through every stage of their international education journey.
                            </p>
                        </div>

                        <div className={styles.coreCard}>
                            <h3>Excellence</h3>
                            <p>
                                We deliver high-quality guidance, dependable service, and continuous
                                improvement in everything we do.
                            </p>
                        </div>

                        <div className={styles.coreCard}>
                            <h3>Equity & Respect</h3>
                            <p>
                                We treat every student, colleague, and partner with fairness, cultural
                                sensitivity, and professionalism.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Do */}
                <div className={styles.vmGrid}>
                    <div className={styles.vmCard}>
                        <h2>School opportunities</h2>
                        <p>
                            Our team has extensive experience supporting school-age students and their families to access international schooling and pre-university programmes. Over the years, we have successfully guided thousands of students into boarding schools, sixth-form colleges, foundation programmes, and other preparatory pathways across the UK, USA, Canada, and Europe.
                        </p>
                    </div>

                    <div className={styles.vmCard}>
                        <h2>University opportunities</h2>
                        <p>
                            Kaynation Educational Services works closely with a wide network of universities and pathway providers worldwide, with particular strength in the UK higher education market. Our experience spans foundation programmes, undergraduate degrees, postgraduate study, and specialist academic routes.

                            From course selection and application strategy to documentation, deadlines, and enrolment, our consultants support students through every stage with clear communication and professional care.
                        </p>
                    </div>
                </div>

                {/* ===== BOTTOM CTA GRADIENT CARD ===== */}
                <div className={styles.bottomCard}>
                    <h2>Our approach</h2>
                    <p>
                        At KNES, success is not measured by volume alone, but by outcomes.
                        We believe in honest advice, structured processes, and building trust
                        with students, families, and partners alike.
                    </p>

                    <div className={styles.bottomTabs}>
                        <span className={styles.tabPrimary}>Don’t Study Later, Study Now!</span>
                        <span className={styles.tabHighlight}>
                            Transparent. Tech-enabled. Holistic.
                        </span>
                    </div>
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
