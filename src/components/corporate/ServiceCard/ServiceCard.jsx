import Image from "next/image";
import styles from "./ServiceCard.module.css";

const services = [
    {
        title: "Study Now Opportunities",
        desc: "We help make your study dreams come true with amazing opportunities available! With our support, you’ll have access to the latest study opportunities and discounts",
        img: "/images/shared/hero-section-bg1.jpg",
    },
    {
        title: "Partner Institutions",
        desc: "Our close partnerships with university partners give us unique insider insights into their programmes, culture, student life, admissions processes and opportunities.",
        img: "/images/shared/hero-section-bg1.jpg",
    },
    {
        title: "Visa Application Assistance",
        desc: "We consider important factors like your budget, academic strengths, personal interests, and more; while aligning with the standards set by universities and governing bodies.",
        img: "/images/shared/hero-section-bg1.jpg",
    },
];

export default function ServiceCards() {
    return (
        <section className={styles.wrapper}>
            {services.map((service, index) => (
                <div key={index} className={styles.flowItem}>

                    {/* CARD */}
                    <div className={styles.card}>

                        <div className={styles.cardTop}>
                            <div className={styles.imageWrap}>
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.textWrap}>
                                <h1 className={styles.title}>{service.title}</h1>
                                <p className={styles.desc}>{service.desc}</p>
                                <div className="" style={{alignContent: "center", textAlign: "center"}}>
                                    <button className={styles.cta}>Find Out More</button>
                                </div>

                            </div>
                        </div>


                    </div>


                    {/* CONNECTOR */}
                    {index !== services.length - 1 && (
                        <div className={styles.connector}>

                            {/* SVG CURVE */}
                            <svg
                                className={styles.svg}
                                viewBox="0 0 200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M10 60 C 60 0, 140 120, 190 60"
                                    className={styles.svgPath}
                                />
                            </svg>

                            {/* GLASS PARTICLES */}
                            <div className={styles.glassParticles}>
                                {[...Array(1)].map((_, i) => (
                                    <span key={i} className={styles.glassDot}></span>
                                ))}
                            </div>

                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
