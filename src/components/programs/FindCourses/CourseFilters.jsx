"use client";

import { useState } from "react";
import styles from "@/styles/FilterSidebar.module.css";

const studyLevels = [
  "Foundation Programmes",
  "Undergraduate Programmes",
  "Postgraduate Programmes",
  "Top Up Programmes"
];

const destinations = ["United Kingdom"];
const studyModes = ["On site"];

const cities = [
  "High Wycombe",
  "Leeds",
  "London",
  "Portsmouth",
  "Southampton",
  "Sunderland",
  "Manchester",
  "Birmingham"
];

const institutions = [
  "Buckinghamshire New University",
  "Edge Hill University",
  "Leeds Trinity University",
  "Solent University",
  "University of East London",
  "University of Kent",
  "University of Essex"
];

export default function CourseFilters({ filters, setFilters }) {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);

  const toggle = (group, value) => {
    const arr = filters[group];
    const exists = arr.includes(value);

    setFilters({
      ...filters,
      [group]: exists ? arr.filter(v => v !== value) : [...arr, value]
    });
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>FILTER COURSES</h2>

      {/* Study Level */}
      <section className={styles.group}>
        <h4>Study Level</h4>
        {studyLevels.map(item => (
          <label key={item} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.studyLevel.includes(item)}
              onChange={() => toggle("studyLevel", item)}
            />
            {item}
          </label>
        ))}
      </section>

      {/* Destinations */}
      <section className={styles.group}>
        <h4>Study Destinations</h4>
        {destinations.map(item => (
          <label key={item} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.destination.includes(item)}
              onChange={() => toggle("destination", item)}
            />
            🇬🇧 {item}
          </label>
        ))}
      </section>

      {/* Study Mode */}
      <section className={styles.group}>
        <h4>Study Mode</h4>
        {studyModes.map(item => (
          <label key={item} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.studyMode.includes(item)}
              onChange={() => toggle("studyMode", item)}
            />
            {item}
          </label>
        ))}
      </section>

      {/* City */}
      <section className={styles.group}>
        <h4>City</h4>
        {(showAllCities ? cities : cities.slice(0, 6)).map(item => (
          <label key={item} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.city.includes(item)}
              onChange={() => toggle("city", item)}
            />
            {item}
          </label>
        ))}

        <button
          className={styles.showAll}
          onClick={() => setShowAllCities(!showAllCities)}
        >
          {showAllCities ? "Show less ▲" : "Show all ▼"}
        </button>
      </section>

      {/* Institution */}
      <section className={styles.group}>
        <h4>Institution</h4>
        {(showAllInstitutions
          ? institutions
          : institutions.slice(0, 5)
        ).map(item => (
          <label key={item} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.institution.includes(item)}
              onChange={() => toggle("institution", item)}
            />
            {item}
          </label>
        ))}

        <button
          className={styles.showAll}
          onClick={() => setShowAllInstitutions(!showAllInstitutions)}
        >
          {showAllInstitutions ? "Show less ▲" : "Show all ▼"}
        </button>
      </section>

      {/* Tuition */}
      <section className={styles.group}>
        <h4>Tuition Fees</h4>

        <input
          type="range"
          min="7000"
          max="23500"
          value={filters.tuitionMin}
          onChange={e =>
            setFilters({ ...filters, tuitionMin: Number(e.target.value) })
          }
        />

        <input
          type="range"
          min="7000"
          max="23500"
          value={filters.tuitionMax}
          onChange={e =>
            setFilters({ ...filters, tuitionMax: Number(e.target.value) })
          }
        />

        <div className={styles.rangeLabel}>
          £{filters.tuitionMin.toLocaleString()} – £
          {filters.tuitionMax.toLocaleString()}
        </div>
      </section>
    </aside>
  );
}
