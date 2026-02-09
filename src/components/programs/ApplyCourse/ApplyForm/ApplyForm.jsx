"use client";

import { useState } from "react";
import styles from "./ApplyForm.module.css";

export default function ApplyForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    university: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form} noValidate>
      {/* Row 1 */}
      <div className={styles.field}>
        <span className={styles.label}>First Name *</span>
        <input name="firstName" value={form.firstName} onChange={handleChange} />
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Last Name *</span>
        <input name="lastName" value={form.lastName} onChange={handleChange} />
      </div>

      {/* Row 2 */}
      <div className={styles.field}>
        <span className={styles.label}>Email Address *</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <span className={`${styles.label} ${styles.phoneLabel}`}>
          Phone Number *
        </span>
        <div className={styles.phoneInput}>
          <span className={styles.flag}>🇳🇬</span>
          <span className={styles.code}>+234</span>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            aria-label="Phone number"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className={styles.field}>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          aria-label="Country of Residence"
        >
          <option value="">Country of Residence *</option>
          <option>Nigeria</option>
          <option>Ghana</option>
          <option>Kenya</option>
        </select>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Course *</span>
        <input name="course" value={form.course} onChange={handleChange} />
      </div>

      {/* Row 4 */}
      <div className={styles.field}>
        <select
          name="university"
          value={form.university}
          onChange={handleChange}
          aria-label="Select university"
        >
          <option value="">Select university</option>
        </select>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Study Destination *</span>
        <input
          name="destination"
          value={form.destination}
          onChange={handleChange}
        />
      </div>

      {/* Row 5 */}
      <div className={`${styles.field} ${styles.full}`}>
        <span className={styles.label}>Message</span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
