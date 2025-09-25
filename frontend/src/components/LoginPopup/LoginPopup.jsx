import React, { useContext, useEffect,useState } from 'react';
import styles from './LoginPopup.module.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
import CryptoJS from "crypto-js";


function LoginPopup({ setShowLogin }) {

  const {url,setToken}=useContext(StoreContext)

  const [currState, setCurrState] = useState('Sign-Up');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //  console.log(data);
   
  // }, [data])
  
const secretKey = "mySecretKey";

const onLogin = async (event) => {
  event.preventDefault();
  let newUrl = url;
  if (currState === "Login") {
    newUrl += "/api/user/login";
  } else {
    newUrl += "/api/user/register";
  }

  // 🔒 Password Encrypt Karo
  const encryptedPassword = CryptoJS.AES.encrypt(data.password, secretKey).toString();

     // ✅ Encrypt email before sending
     const encryptedEmail = CryptoJS.AES.encrypt(data.email, secretKey).toString();
    //  console.log("Encrypted Email:", encryptedEmail); // Debugging

  // const secureData = {
  //   ...data,
  //   email: encryptedEmail,
  //   password: encryptedPassword, // 🛠 Encrypt password send kar rahe hain
  // };

let secureData;
if (currState === "Login") {
  secureData = {
    email: encryptedEmail,
    password: encryptedPassword,
  };
} else {
  // Sign-Up
  secureData = {
    name: data.name,
    email: encryptedEmail,
    password: encryptedPassword, // 🛠 Encrypt password send kar rahe hain
  };
}


  const response = await axios.post(newUrl, secureData);

  if (response.data.success) {
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token);
    setShowLogin(false);
  } else {
    alert(response.data.message);
  }
};

  return (
    <div className={styles.loginPopup}>
      <form onSubmit={onLogin} className={styles.loginPopupContainer}>
        <div className={styles.loginPopupTitle}>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          ></img>
        </div>
        <div className={styles.loginPopupinputs}>
          {currState === 'Login' ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
            autoComplete="username"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required 
            autoComplete="current-password"
          />
        </div>

        <button type="submit">
          {currState === 'Sign-Up' ? 'Create Account' : 'Login'}
        </button>

        <div className={styles.loginPopupCondition}>
          <input type="checkbox" required></input>
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState('Sign-Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
