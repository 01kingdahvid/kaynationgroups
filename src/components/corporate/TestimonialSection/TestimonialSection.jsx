"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialSection.module.css";
import { Button } from "antd";

const testimonials = [
    {
        name: "David Okoye",
        location: "Lagos, Nigeria",
        work: "Software Engineer - UK",
        image: "/images/shared/hero-section-bg1.jpg",
        text: "Study Now made my UK admission seamless. From documentation to visa preparation, everything was handled professionally."
    },
    {
        name: "Amaka Nwosu",
        location: "Abuja, Nigeria",
        work: "Nurse - Manchester",
        image: "/images/shared/hero-section-bg1.jpg",
        text: "Their guidance helped me secure admission and scholarship. The team truly cares about student success."
    },
    {
        name: "Tunde Balogun",
        location: "Ibadan, Nigeria",
        work: "Data Analyst - London",
        image: "/images/shared/hero-section-bg1.jpg",
        text: "I never imagined studying abroad could be this smooth. Study Now exceeded my expectations."
    }
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () =>
        setIndex((index - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[index];

    const particles = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            cx: (i * 37) % 200,
            cy: (i * 53) % 120,
            r: ((i % 3) + 1) * 0.8
        }));
    }, []);


    return (
        <>
            <section className={styles.section}>

                {/* HEADER */}
                <div className={styles.headerRow}>
                    <div className={styles.headerLine}></div>
                    <h3 className={styles.headerTitle}>Testimonials</h3>
                </div>


                {/* MAIN CONTENT */}
                <div className={styles.main}>

                    {/* LEFT OVERVIEW */}
                    <div className={styles.overview}>
                        <div className={styles.overviewTitle}>
                            <h1>Voices of Success: Hear From Our Students</h1>
                        </div>

                        <p>
                            At Study Now, our legacy is told through the triumphs and tales of our students.
                            Having served thousands of eager international scholars, our team has been the guiding force behind many dreams realized,
                            facilitating their journeys to prominent UK universities.
                            <br /><br />
                            Our tailored consultancy services are not just about applications; they’re about optimizing opportunities,
                            nurturing aspirations, and laying the foundation for success.
                        </p>

                        <button className={styles.cta}>SEE ALL</button>
                    </div>

                    {/* RIGHT CAROUSEL */}
                    <div className={styles.carousel}>

                        {/* PARTICLES */}
                        <svg className={styles.particles} viewBox="0 0 200 120">
                            {particles.map(p => (
                                <circle key={p.id} cx={p.cx} cy={p.cy} r={p.r} />
                            ))}
                        </svg>


                        <div className={styles.card}>

                            {/* IMAGE */}
                            <div className={styles.imageWrap}>
                                <div className={styles.circleOuter}>
                                    <div className={styles.circleInner}>
                                        <Image src={t.image} alt={t.name} fill />
                                    </div>
                                </div>
                            </div>

                            {/* INFO */}
                            <div className={styles.info}>
                                <h4>{t.name}</h4>
                                <span>{t.location}</span>
                                <span>{t.work}</span>

                                <div className={styles.separator}></div>

                                <p className={styles.quote}>{t.text}</p>
                            </div>

                        </div>

                        {/* ARROWS */}
                        <div className={styles.controls}>
                            <Button onClick={prev}>←</Button>
                            <Button onClick={next}>→</Button>
                        </div>

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
