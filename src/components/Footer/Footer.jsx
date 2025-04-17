import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          className={styles.socialLink}
          href="https://github.com/KoshJR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/valentynkoshmanyuk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer