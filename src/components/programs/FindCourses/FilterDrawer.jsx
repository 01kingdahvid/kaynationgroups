"use client";

import styles from "@/styles/FilterDrawer.module.css";
import DrawerFilters from "./DrawerFilters";

export default function FilterDrawer({ open, onClose, filters, setFilters }) {
  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.show : ""}`}
        onClick={onClose}
      />

      <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <div className={styles.header}>
          <h3>Filters</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <DrawerFilters filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
}
