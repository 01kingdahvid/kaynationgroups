"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Drawer, Button } from "antd";
import {
  MenuOutlined,
  MailOutlined,
  DownOutlined
} from "@ant-design/icons";

export default function Navbar() {

  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // PAGE READING PROGRESS
 useEffect(() => {
  const handleScroll = () => {

    // Progress
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPosition = window.scrollY;
    const progressPercent = (scrollPosition / totalHeight) * 100;

    setProgress(progressPercent);

    // Scrolled state trigger (you can tweak threshold)
    setIsScrolled(scrollPosition > 40);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  
}, []);


  // DROPDOWN MENU
  // const companyItems = [
  //   { key: "1", label: <Link href="/company/a">Company A</Link> },
  //   { key: "2", label: <Link href="/company/b">Company B</Link> },
  //   { key: "3", label: <Link href="/company/c">Company C</Link> },
  // ];

  return (
    <>
      {/* PROGRESS BAR */}


      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>


        {/* LEFT SIDE */}
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoWrap}>
            {/* <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={40}
              priority
            /> */}
            KNES
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/services">Our Services</Link>

            {/* <Dropdown
              menu={{ items: companyItems }}
              placement="bottomLeft"
            >
              <span className={styles.dropdownLink}>
                Our Companies <DownOutlined />
              </span>
            </Dropdown> */}

            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* RIGHT MAIL */}
        <div className={styles.mailSection}>
          <div className={styles.mailIcon}>
            <MailOutlined />
          </div>

          <div className={styles.mailText}>
            <span>info@studynow.org.uk</span>
            <small>Email Us</small>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
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



      {/* MOBILE DRAWER */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={styles.mobileNav}>
         <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/services">Our Services</Link>

            {/* <Dropdown
              menu={{ items: companyItems }}
              placement="bottomLeft"
            >
              <span className={styles.dropdownLink}>
                Our Companies <DownOutlined />
              </span>
            </Dropdown> */}

            <Link href="/contact">Contact</Link>
        </div>
      </Drawer>
    </>
  );
}
