import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import reputationaire from './reputationaire-logo.png'


function Navbar() {
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
          <nav className={`${styles.header} ${styles.active} ${navbar ? 'navbar active' : 'navbar'}`}>
              <div className={styles.container}>
                  <div className={`${styles.row} ${styles.justifyContent}`}>
                 <div className={styles.logo}>
                  <Link to='/'className={`${styles.guide} ${styles.rep}`}>
                  <img src={reputationaire} alt="Reputationaire" 
                       className={styles.repute} />
                  </Link>
                  <Link to='/' className={styles.guide}>Individuals</Link>
                  <Link to='/' className={styles.guide}>Tech Employers 
                          </Link>
                  <Link to='/' className={styles.guide}>Property Managers</Link>
                  <Link to='/' className={styles.guide}>Gig Economies</Link>
                  <Link to='/' className={styles.guide}>Social Media Check</Link>
                  <Link to='/' className={styles.guide}>How It Works</Link>
                  <Link to='/' className={styles.guide}>About</Link>
                  <Link to='/' className={styles.guide}>Contact</Link>
                 </div>
                  <div className={styles.ham}>
                     <Link to='/' className={styles.guide}>Get Started</Link>
                     <button type={"submit"} className={`${styles.guide} ${styles.free}`}>Get Free Demo</button>
                     <span></span>
                  </div>
                  </div>
              </div>
              
          </nav>
          
        </>
    );
}

export default Navbar