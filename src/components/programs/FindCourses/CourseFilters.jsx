import styles from "@/styles/FindCourses.module.css";

const levels = [
  "Foundation Programmes",
  "Undergraduate Programmes",
  "Postgraduate Programmes",
  "Top Up Programmes"
];

const cities = [
  "London",
  "Leeds",
  "York",
  "Sunderland",
  "Southampton",
  "Wolverhampton",
  "High Wycombe",
  "Ormskirk"
];

export default function CourseFilters({ filters, setFilters }) {
  const toggle = (group, value) => {
    const arr = filters[group];
    const exists = arr.includes(value);

    setFilters({
      ...filters,
      [group]: exists ? arr.filter(v => v !== value) : [...arr, value]
    });
  };

  return (
    <aside className={styles.filters}>
      <h3>FILTER COURSES</h3>

      <div className={styles.filterGroup}>
        <label>Study Level</label>
        {levels.map(l => (
          <label key={l}>
            <input
              type="checkbox"
              checked={filters.studyLevel.includes(l)}
              onChange={() => toggle("studyLevel", l)}
            />
            {l}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <label>City</label>
        <div className={styles.cityGrid}>
          {cities.map(c => (
            <label key={c}>
              <input
                type="checkbox"
                checked={filters.city.includes(c)}
                onChange={() => toggle("city", c)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label>Tuition Fees</label>
        <input
          type="range"
          min="7000"
          max="22000"
          value={filters.tuitionMax}
          onChange={e =>
            setFilters({ ...filters, tuitionMax: Number(e.target.value) })
          }
        />
        <div className={styles.rangeLabels}>
          £{filters.tuitionMin} — £{filters.tuitionMax}
        </div>
      </div>
    </aside>
  );
}
