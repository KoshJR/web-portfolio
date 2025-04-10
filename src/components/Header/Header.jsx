import React from "react";
import Navigation from "../Navigation/Navigation"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <header>
      <div className={styles.headerInfo}>
        <p className={styles.name}>VALENTYN KOSHMANYUK</p>
        <h1 className={styles.title}>Front End Developer</h1>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
