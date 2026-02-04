"use client";

import Image from "next/image";
import styles from "./PageHero.module.css";
import {
    FaFacebookF,
    FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function PageHero({
    title = "Page Title",
    subtitle = "Subtitle goes here",
    backgroundImage = "/images/hero/default.jpg",
    showShareIcons = true
}) {
    return (
        <section className={styles.hero}>
            {/* Background Image */}
            <div className={styles.imageWrap}>
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className={styles.bgImage}
                />
                <div className={styles.imageOverlay} />
            </div>

            {/* Content */}
            <div className={styles.contentContainer}>
                <div className={styles.contentInner}>

                    {/* Vertical Accent */}
                    <div className={styles.accentLine} />

                    <div className={styles.textWrap}>
                        <h1 className={styles.title}>{title}</h1>

                        {subtitle && (
                            <>
                                <p className={styles.subtitle}>{subtitle}</p>
                                <div className={styles.divider} />
                            </>
                        )}

                        {showShareIcons && (
                            <div className={styles.shareRow}>
                                <span className={styles.shareText}>
                                    Share this page:
                                </span>

                                <div className={styles.icons}>
                                    <a href="#" aria-label="Share on Facebook">
                                        <FaFacebookF />
                                    </a>

                                    <a href="#" aria-label="Share on X">
                                        <FaXTwitter />
                                    </a>

                                    <a href="#" aria-label="Share on LinkedIn">
                                        <FaLinkedinIn />
                                    </a>

                                    <a href="#" aria-label="Share via Email">
                                        <MdOutlineEmail />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
