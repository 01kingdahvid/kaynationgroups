import styles from "@/styles/pages/ContactPage.module.css";
import { FaPhoneAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function LocationBlock() {
    return (
        <div className={styles.locationWrap}>

            {/* IMAGE SIDE */}
            <div className={styles.imageWrap}>
                <div className={styles.amoeba1}></div>
                <div className={styles.amoeba2}></div>

                <img
                    src="/images/shared/hero-section-bg1.jpg"
                    alt="London Office"
                />
            </div>

            {/* CONTENT SIDE */}
            <div className={styles.locationContent}>
                <h1>
                    Kaynation Edu Services - Headquarters
                    <span className={styles.wave}></span>
                </h1>

                <p>
                    6th Floor, First Central 200, 2 Lakeside Drive, First Central 200
                    <br />
                    London, NW10 7FQ,
                    <br />
                    United Kingdom
                </p>

                <ul>
                    <li>
                        <FaPhoneAlt /> +44 7500897303
                    </li>
                    <li>
                        <FaPhone /> +44 2034337700
                    </li>
                    <li>
                        <FaEnvelope /> international@studynow.org.uk
                    </li>
                </ul>

                {/* MAP */}
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps?q=6th+Floor+First+Central+200+2+Lakeside+Drive+London&output=embed"
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    );
}
