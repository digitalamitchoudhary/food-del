import React from 'react'
import styles from './Navbar.module.css'
import {assets} from '../../assets/assets'

function Navbar() {
  return (
     <div className={styles.navbar} st>
          <img  className={styles.logo} src={assets.logo} alt="" />
          <img  className={styles.profile} src={assets.profile_image} alt="" />
        </div>
  )
}

export default Navbar
