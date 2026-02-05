import styles from "@/styles/FindCourses.module.css";

export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={page === i + 1 ? styles.activePage : ""}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
