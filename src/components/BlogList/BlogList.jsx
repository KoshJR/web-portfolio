import React from "react";
import styles from "./BlogList.module.css";

const BlogList = () => {
  return (
    <section className={styles.blogGrid}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
          <article key={i} className={styles.card}>
              <img src="" alt="Blog post" className={styles.thumbnail} />
              <h3 className={styles.cardTitle}>Article Name</h3>
        </article>
      ))}
    </section>
  );
};

export default BlogList;
