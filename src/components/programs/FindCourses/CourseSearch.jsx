import styles from "@/styles/FindCourses.module.css";
import { FaSearch } from "react-icons/fa";

export default function CourseSearch({ value, onChange }) {
  return (
    <div className={styles.searchWrap}>
      <input
        placeholder="Start typing to search courses..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button aria-label="search">
        <FaSearch />
      </button>
    </div>
  );
}
