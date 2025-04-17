import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.name}>VALENTYN KOSHMANYUK</p>
        <h1 className={styles.title}>FRONT END DEVELOPER</h1>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
