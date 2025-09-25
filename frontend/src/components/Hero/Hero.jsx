import React   from 'react';
import styles from './Hero.module.css';
// import { assets } from '../../assets/assets';

function Hero() {

  return (
<div className={styles.hero} id="tab" >

<div className={styles.header_contents}>
  <h2>Order your favourite food
  </h2>
  <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.

</p>
<button>View Menu</button>
</div>
  
</div> 
  );  
}

export default Hero;
