"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Drawer, Button } from "antd";
import {
  MenuOutlined,
  MailOutlined,
  DownOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
  XOutlined,
  YoutubeFilled,
  PushpinOutlined,
  NumberOutlined
} from "@ant-design/icons";


export default function Navbar() {

  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const drawerRef = useRef(null);
  const dragStartY = useRef(0);
  const dragCurrentY = useRef(0);

  // PAGE READING PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;
      const progressPercent = (scrollPosition / totalHeight) * 100;

      setProgress(progressPercent);
      setIsScrolled(scrollPosition > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MOUSE TRACKING FOR PARALLAX
  useEffect(() => {
    if (!open) return;

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [open]);

  // DRAWER CLOSE HANDLER
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 800);
  };

  // DRAG TO CLOSE
  const handleTouchStart = (e) => {
    dragStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    dragCurrentY.current = e.touches[0].clientY;
    const delta = dragCurrentY.current - dragStartY.current;

    if (delta > 0 && drawerRef.current) {
      drawerRef.current.style.transform = `translateX(${delta * 0.5}px)`;
    }
  };

  const handleTouchEnd = () => {
    const delta = dragCurrentY.current - dragStartY.current;

    if (delta > 100) {
      handleClose();
    } else if (drawerRef.current) {
      drawerRef.current.style.transform = 'translateX(0)';
    }

    dragStartY.current = 0;
    dragCurrentY.current = 0;
  };

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoWrap}>
            KNES
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/our-services">Our Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.mailSection}>
          <div className={styles.mailIcon}>
            <MailOutlined />
          </div>

          <div className={styles.mailText}>
            <span>info@studynow.org.uk</span>
            <small>Email Us</small>
          </div>
        </div>

        <Button
          className={styles.mobileMenuBtn}
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />

        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </header>

      {/* PREMIUM WATER DRAWER */}
      <Drawer
        placement="right"
        open={open}
        onClose={handleClose}
        rootClassName={`${styles.waterDrawer} ${isClosing ? styles.closing : ''}`}
        styles={{
          body: { padding: 0 },
          content: { width: "100%" }
        }}
        closeIcon={<div className={styles.drawerCloseBtn}>×</div>}
      >
        <div
          className={styles.drawerInner}
          ref={drawerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* WATER LAYERS WITH WAVE MASK */}
          <div className={`${styles.waterRise} ${isClosing ? styles.drain : ''}`}>
            {/* Wave mask overlay */}
            <div className={styles.waveMask}></div>

            {/* Parallax water surface */}
            <div
              className={styles.waterSurface}
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 10}px)`
              }}
            ></div>

            {/* Ripple effects */}
            <div className={styles.rippleContainer}>
              <div className={styles.ripple} style={{ animationDelay: '0s' }}></div>
              <div className={styles.ripple} style={{ animationDelay: '0.5s' }}></div>
              <div className={styles.ripple} style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Glass blur overlay */}
            <div className={styles.glassOverlay}></div>
          </div>

          {/* CONTENT */}
          <div className={styles.drawerContent}>
            {/* NAV SECTION WITH STAGGERED REVEAL */}
            <div className={styles.drawerNav}>
              {['Home', 'About Us', 'Programs', 'Our Services', 'Contact'].map((item, index) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={styles.navLink}
                  style={{
                    animationDelay: `${0.8 + index * 0.1}s`,
                    '--hover-x': '0px',
                    '--hover-y': '0px'
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--hover-x', `${e.clientX - rect.left - rect.width / 2}px`);
                    e.currentTarget.style.setProperty('--hover-y', `${e.clientY - rect.top - rect.height / 2}px`);
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* FOOTER */}
            <div className={styles.drawerFooter}>
              <div className={styles.footerGrid}>
                <div className={styles.footerCol} style={{ animationDelay: '1.3s' }}>
                  <span><PushpinOutlined /></span>
                  <div className={styles.footerRow}>
                    <p>
                      6th Floor, First Central 200,<br />
                      2 Lakeside Drive,<br />
                      First Central 200 London,<br />
                      NW10 7FQ, United Kingdom
                    </p>
                    <small>Visit Us</small>
                  </div>
                </div>

                <div className={styles.footerCol} style={{ animationDelay: '1.4s' }}>
                  <span><MailOutlined /></span>
                  <div className={styles.footerRow}>
                    <p>info@studynow.org.uk</p>
                    <small>Email Us</small>
                  </div>
                </div>

                <div className={styles.footerCol} style={{ animationDelay: '1.5s' }}>
                  <span> <NumberOutlined /></span>
                  <div className={styles.footerRow}>
                    <div className={styles.drawerFooterSocialIcons}>
                      <a href="#" className={styles.socialIcon}><FacebookFilled /></a>
                      <a href="#" className={styles.socialIcon}><InstagramFilled /></a>
                      <a href="#" className={styles.socialIcon}><XOutlined /></a>
                      <a href="#" className={styles.socialIcon}><WhatsAppOutlined /></a>
                      <a href="#" className={styles.socialIcon}><YoutubeFilled /></a>
                      <a href="#" className={styles.socialIcon}><LinkedinFilled /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}