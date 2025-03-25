import React from 'react'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <header>
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