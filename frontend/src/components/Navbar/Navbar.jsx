import React, { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
 function Navbar() {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount,token,setToken,setCartItems,setShowLogin}=useContext(StoreContext);
   
  const location = useLocation();
  const ishomePage = location.pathname === "/";
     
  const navigate = useNavigate();
  const logout =()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
      setCartItems("")
  }
  return (
    <div className={styles.navbar}>
      <Link to='/'><img src={assets.logo} alt="Logo" className={styles.logo} /></Link>
     <ul className={styles.navbar_menu}>
  <li>
    {ishomePage ? (
      <a href="#tab"
         onClick={() => setMenu('home')}
         className={menu === 'home' ? styles.active : ''}>
        Home
      </a>
    ) : (
      <a href="/"
         onClick={() => setMenu('home')}
         className={menu === 'home' ? styles.active : ''}>
        Home
      </a>
    )}
  </li>

  <li>
    {ishomePage ? (
      <a href="#explore-menu"
         onClick={() => setMenu('menu')}
         className={menu === 'menu' ? styles.active : ''}>
        Menu
      </a>
    ) : (
      <a href="/"
         onClick={() => setMenu('menu')}
         className={menu === 'menu' ? styles.active : ''}>
        Menu
      </a>
    )}
  </li>

  <li>
    {ishomePage ? (
      <a href="#appDownload"
         onClick={() => setMenu('mobile-app')}
         className={menu === 'mobile-app' ? styles.active : ''}>
        Mobile-App
      </a>
    ) : (
      <a href="/"
         onClick={() => setMenu('mobile-app')}
         className={menu === 'mobile-app' ? styles.active : ''}>
        Mobile-App
      </a>
    )}
  </li>

  <li>
    {ishomePage ? (
      <a href="#footer"
         onClick={() => setMenu('contact-us')}
         className={menu === 'contact-us' ? styles.active : ''}>
        Contact Us
      </a>
    ) : (
      <a href="/"
         onClick={() => setMenu('contact-us')}
         className={menu === 'contact-us' ? styles.active : ''}>
        Contact Us
      </a>
    )}
  </li>
</ul>

      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="Search Icon" />
        <div className={styles.navbar_basket}>
         <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link> 
         <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
         </div>
        {/* <button onClick={()=>setShowLogin(true)} className={styles.signin_button}>sign in</button> */}
        {!token?<button onClick={()=>setShowLogin(true)} >Sign in</button>
            : <div className={styles.navbarProfile}>
                <img src={assets.profile_icon} alt=''></img>
                <ul className={styles.navProfileDropdown}>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>
            }
      </div>
    </div>
  );
}

export default Navbar;


