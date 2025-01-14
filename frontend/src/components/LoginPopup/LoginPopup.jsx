import React, { useState } from 'react'
import styles from './LoginPopup.module.css'
import { assets } from '../../assets/assets'
function LoginPopup({setShowLogin}) {
 

  const [currState,setCurrState]=useState("Login")

  return (
    <div className={styles.loginPopup}> 
    <form  className={styles.loginPopupContainer}> 
      <div className={styles.loginPopupTitle}>
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
      </div>
      <div className={styles.loginPopupinputs}>
      {currState==="Login"?<></>:<input name='name'  type='text' placeholder='Your Name' required/>}  
      <input type="email" placeholder='Your email' id="" required/>
        <input type="password" placeholder='Password' id="" required/> 
      </div>
       
      <button type='submit'>{currState==="Sign-Up"?"Create Account":"Login"}</button>

      <div className={styles.loginPopupCondition}>
            <input type='checkbox' required></input>
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
           </div>
           {currState==="Login"
                ?<p>Create a new account?<span onClick={()=>setCurrState("Sign-Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                
            }
    </form>
    </div>
  )
}

export default LoginPopup
