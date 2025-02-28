import React, { useContext, useEffect } from 'react';
import styles from './Cart.module.css';
 import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  
    const navigate = useNavigate();
  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className={`${styles.cartItemsTitle} ${styles.cartItemsItem}`}
                >
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className={styles.cross}>
                    x
                  </p>
                </div>
                <hr />{' '}
              </div>
            );
          }
        })}
      </div>

      <div className={styles.cartBottom}>
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
          <button onClick={() => navigate('/order')}>
              PROCEED TO CHECKOUT
            </button>
        </div>
        <div className={styles.cartPromocode}>
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className={styles.cartPromocodeInput}>
              <input type='text' placeholder='Promo-code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
