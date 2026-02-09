"use client";

import styles from "@/styles/pages/ContactPage.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    ).then(() => {
      alert("Message Sent Successfully");
      setForm({ name: "", email: "", message: "" });
    });
  };

  return (
    <div className={styles.formWrap}>
      
      <div className={styles.formHeader}>
        <h2>GET IN <br />TOUCH</h2>
        <div className={styles.dots}></div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />

        <textarea
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
        />

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}
