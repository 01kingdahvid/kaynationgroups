"use client";

import styles from "@/styles/pages/ContactPage.module.css";
import LocationBlock from "../LocationBlock/LocationBlock";
import ContactForm from "../ContactForm/ContactForm";


export default function ContactPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* INTRO */}
        <div className={styles.intro}>
          <p>
            Study Now is committed to providing every prospective student with the best advice and the most helpful support. Whatever your international education ambitions might be, we would love to give you a helping hand on your journey.
            <br /><br />
            Let’s get talking. Contact Study Now today by giving us a call or visiting our team in person.
          </p>
        </div>

        {/* LOCATION */}
        <LocationBlock />

        {/* CONTACT FORM */}
        <ContactForm />

      </div>
    </section>
  );
}
