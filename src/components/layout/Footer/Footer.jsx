// src/components/layout/Footer/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            STUDY NOW.
          </div>
          
          <div className={styles.footerMenu}>
            <Link href="/find-course" className={styles.footerLink}>Find Course</Link>
            <Link href="/events" className={styles.footerLink}>Events</Link>
            <Link href="/scholarships" className={styles.footerLink}>Scholarships</Link>
            <Link href="/about" className={styles.footerLink}>About Us</Link>
          </div>
        </div>
        
        {/* Middle Section - Contact Info */}
        <div className={styles.footerMiddle}>
          <div className={styles.address}>
            <h3 className={styles.sectionTitle}>Visit Us</h3>
            <p>6th Floor, First Central 200</p>
            <p>2 Lakeside Drive, First Central 200</p>
            <p>London, NW10 7FQ, United Kingdom</p>
          </div>
          
          <div className={styles.contact}>
            <h3 className={styles.sectionTitle}>Email Us</h3>
            <a href="mailto:info@studynow.org.uk" className={styles.emailLink}>
              info@studynow.org.uk
            </a>
          </div>
          
          <div className={styles.social}>
            <h3 className={styles.sectionTitle}>Connect with us</h3>
            <div className={styles.socialLinks}>
              <span className={styles.hashtag}>#</span>
              <span className={styles.socialText}>Follow our journey</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} StudyNow. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <Link href="/cookies" className={styles.legalLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}