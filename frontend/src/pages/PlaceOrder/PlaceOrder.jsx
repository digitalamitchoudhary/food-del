import React, { useContext } from 'react'
import styles from './PlaceOrder.module.css';
import { StoreContext } from '../../context/StoreContext';


function PlaceOrder() {

    const {  getTotalCartAmount } = useContext(StoreContext);
  
  return (
    <form className={styles.placeOrder}>

    <div className={styles.placeOrderLeft}>
    
    <p className={styles.title} >
      Delivery Information </p>
      
    <div className={styles.multiFields}>
      <input type="text" placeholder='First Name' />
      <input type="text" placeholder='Last Name' />
 </div>
 <input type="email" placeholder='Email address' />
 <input type="text" placeholder='Street' />

 <div className={styles.multiFields}>
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
 </div>
 <div className={styles.multiFields}>
      <input type="text" placeholder='Zip Code' />
      <input type="text" placeholder='Country' />
 </div>
 <input type="text" placeholder='Phone' />

    </div>

    <div className={styles.placeOrderRight}>

      <div className={styles.cartTotal}>
                <h2>Cart Total</h2>
                <div>
                  <div className={styles.cartTotalDetails}>
                    <p>Subtotal</p>
                    <p>₹ {getTotalCartAmount()}</p>
                     </div>
                  <hr />
                  <div className={styles.cartTotalDetails}>
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0:2}</p>  
                    </div>
                  <hr />
                  <div className={styles.cartTotalDetails}>
                    <b>Total</b>
                    <b> ₹ {getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
                  </div>
                </div>
                <button >
                   Place Order
                  </button>
              </div>
      </div>
  




    </form>
  )
}

export default PlaceOrder
