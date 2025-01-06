import { assets } from '../../assets/assets.js'
import styles from './Footer.module.css'
import React from 'react'

function Footer() {
  return (
    <div    className={styles.footer}  id={styles.footer}>
      
    <div  className={styles.footerContent} >
        <div className={styles.footerContentLeft}>
            <img src={assets.logo}alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis quia quam laborum fuga error ipsa eveniet ipsum dolore ratione hic accusantium obcaecati quaerat culpa totam quibusdam, aliquid voluptatem cupiditate.</p>



             <div className={styles.footerSocialIcons}>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

             </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className={styles.footerContentCenter}>
            <h2>Company</h2>
            <ul>
            <li>Home</li>
             <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
    
            </ul>
        
        </div> 

        {/* ---------------------------------------------------------------------- */}

        <div className={styles.footerContentRight}>


        <h2> GET IN TOUCH</h2>
            <ul>
                <li>+91-1234-5678</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>



    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2024  © Tomato.com - All Right Reserved.</p>
    </div>
  )    
}

export default Footer  