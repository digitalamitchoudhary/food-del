import React, { useState } from 'react'
import styles from './LoginPopup.module.css'
function LoginPopup() {
 

  const [currState,setCurrState]=useState("Sign-Up")

  return (
    <div className={styles.loginPopup}> 
    <form  className={styles.loginPopupContainer}> 
      <div className={styles.loginPopupTitle}>
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
      </div>

      





      
    </form>
    </div>
  )
}

export default LoginPopup
