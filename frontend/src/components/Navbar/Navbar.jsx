import React, { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
 function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount}=useContext(StoreContext);
   
 
  return (
    <div className={styles.navbar}>
      <Link to='/'><img src={assets.logo} alt="Logo" className={styles.logo} /></Link>
      <ul className={styles.navbar_menu}>
          <a href='#tab'
            onClick={() => setMenu('home')}
            className={menu === 'home' ? styles.active : ''}
            aria-current={menu === 'home' ? 'page' : undefined}
          >
            Home
          </a>
        <a href='#explore-menu'
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? styles.active : ''}
          aria-current={menu === 'menu' ? 'page' : undefined}
        >
          Menu
        </a>
        <a href='#appDownload'
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? styles.active : ''}
          aria-current={menu === 'mobile-app' ? 'page' : undefined}
        >
          Mobile-App
        </a>
       <a href='#footer'
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? styles.active : ''}
          aria-current={menu === 'contact-us' ? 'page' : undefined}
        >
          Contact us
        </a>
      </ul>
      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="Search Icon" />
        <div className={styles.navbar_basket}>
         <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link> 
         <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
         </div>
        <button onClick={()=>setShowLogin(true)} className={styles.signin_button}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
