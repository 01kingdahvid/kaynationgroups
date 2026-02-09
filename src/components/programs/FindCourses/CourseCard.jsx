import styles from "@/styles/pages/FindCourses.module.css";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";


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
      
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Link href={`/programs/${course.slug}`}>
          <button className={styles.detailsBtn}>
            VIEW DETAILS
          </button>
        </Link>
      </div>


    </article>
  );
}
