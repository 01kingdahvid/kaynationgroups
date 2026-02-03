"use client";

import styles from "./Footer.module.css";
import {
  MailOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
  MessageFilled,
  WhatsAppOutlined,
  XOutlined,
  NumberOutlined
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>

      {/* TOP NAV */}
      <nav className={styles.topNav} aria-label="Footer navigation">
        {[
          "Study Now Blog",
          "Our Offices",
          "Frequently Asked Questions",
          "Home",
          "Privacy Policy",
          "Sitemap",
          "Terms and Conditions",
          "UK Life",
          "Access",
          "Anti-Slavery Policy Statement"
        ].map((item, i) => (
          <a key={i} href="#" className={styles.navLink}>
            {item}
          </a>
        ))}
      </nav>

      <div className={styles.divider}></div>

      {/* MIDDLE */}
      <div className={styles.middle}>

        {/* LEFT ADDRESS */}
        <div className={styles.addressBlock}>
          <EnvironmentOutlined className={styles.iconLarge} aria-hidden />
          <div>
            <p>
              6th Floor, First Central 200, 2 Lakeside Drive,
              <br />
              First Central 200 London, NW10 7FQ,
              <br />
              United Kingdom
            </p>

            <a href="#" className={styles.visitLink}>
              Visit Us
            </a>
          </div>
        </div>

        {/* RIGHT CONTACT */}
        <div className={styles.contactBlock}>
          <div className={styles.emailRow}>
            <MailOutlined className={styles.iconMedium} />
            <div>
              <p className={styles.email}>info@studynow.org.uk</p>
              <span>Email Us</span>
            </div>
          </div>

          <div className={styles.dividerSmall}></div>

          <div className={styles.emailRow}>
            <NumberOutlined className={styles.iconMedium} />

            <div>
              <div className={styles.socialRow}>
                <FacebookFilled aria-label="Facebook" />
                <LinkedinFilled aria-label="LinkedIn" />
                <WhatsAppOutlined aria-label="WhatsApp" />
                <XOutlined aria-label="LinkedIn" />
                <InstagramFilled aria-label="Instagram" />
                <YoutubeFilled aria-label="YouTube" />
              </div>
              <div>
                <p className={styles.connectText}>Connect with us</p>
              </div>
            </div>
          </div>

          {/* <div className={styles.socialBlock}>
            <div className={styles.hash}>#</div>
            <p className={styles.connectText}>Connect with us</p>

            <div className={styles.socialRow}>
              <FacebookFilled aria-label="Facebook" />
              <LinkedinFilled aria-label="LinkedIn" />
              <WhatsAppOutlined aria-label="WhatsApp" />
              <XOutlined aria-label="LinkedIn" />
              <InstagramFilled aria-label="Instagram" />
              <YoutubeFilled aria-label="YouTube" />
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>Copyright 2026 © Kaynation Groups. All Rights Reserved</p>
        <p>
          Website designed and developed by{" "}
          <span className={styles.brand}>King Devid Tech Solution</span>
        </p>
      </div>
    </footer>
  );
}
