import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';

function Navbar() {
  const [menu, setMenu] = useState('home');

  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navbar_menu}>
        <li
          onClick={() => setMenu('home')}
          className={menu === 'home' ? styles.active : ''}
          aria-current={menu === 'home' ? 'page' : undefined}
        >
          home
        </li>
        <li
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? styles.active : ''}
          aria-current={menu === 'menu' ? 'page' : undefined}
        >
          menu
        </li>
        <li
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? styles.active : ''}
          aria-current={menu === 'mobile-app' ? 'page' : undefined}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? styles.active : ''}
          aria-current={menu === 'contact-us' ? 'page' : undefined}
        >
          contact us
        </li>
      </ul>
      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="Search Icon" />
        <div className={styles.navbar_basket}>
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className={styles.dot}></div>
        </div>
        <button className={styles.signin_button}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
