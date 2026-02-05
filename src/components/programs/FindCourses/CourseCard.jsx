import styles from "@/styles/FindCourses.module.css";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <article className={styles.card}>
      <h3>{course.title}</h3>
      <span className={styles.university}>{course.university}</span>

      <div className={styles.goldLine} />

      <div className={styles.infoRow}>
        <FaGraduationCap />
        <span>{course.studyLevel}</span>
      </div>

      <div className={styles.infoRow}>
        <FaMapMarkerAlt />
        <span>{course.location}</span>
      </div>

      <div className={styles.infoRow}>
        <FaCalendarAlt />
        <span>{course.intake}</span>
      </div>

      <div className={styles.infoRow}>
        <FaCheckCircle />
        <span>{course.entryRequirement}</span>
      </div>

      <div className={styles.price}>£ {course.tuition.toLocaleString()}</div>
      <div className="" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button className={styles.detailsBtn}>VIEW DETAILS</button>
      </div>

    </article>
  );
}
