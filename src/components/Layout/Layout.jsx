import React from 'react'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <header>
        <div>
          <p className={styles.name}>Valentyn Koshmanyuk</p>
          <h1 className={styles.title}>Full-Stack Developer</h1>
        </div>
         <div>
                  <Navigation/>
        </div>
      </header>
          <main>{children}</main>
        <Footer/>
    </>
  );
}

export default Layout