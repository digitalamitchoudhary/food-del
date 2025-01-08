import React, { useContext} from 'react';
import styles from './FoodItem.module.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
function FoodItem({ id, name, price, description, image }) {

  // const [itemCount, setItemCount] = useState(0) 
 

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className={styles.foodItem}> 


      {/* <div className={styles.foodItemImgContainer}>
        <img src={image} alt="food Image" className={styles.foodItemImage} />

        {!itemCount ?<img className={styles.add} onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=""/> 
              :<div className={styles.foodItemCounter}>
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''/>
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=''/> 
              </div>  
              } 
      </div> */}
 <div className={styles.foodItemImgContainer}>
        <img src={image} alt="food Image" className={styles.foodItemImage} />

        {!cartItems[id]
        ?<img className={styles.add} onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/> 
              :<div className={styles.foodItemCounter}>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
               <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/> 
              </div>  
              } 
      </div>


      <div className={styles.foodItemInfo}>
        <div className={styles.foodItemNameRating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className={styles.foodItemDescription}>{description}</p>
        <p className={styles.foodItemPrice}>₹{price}</p>
      </div>
    </div>
  );  
}

export default FoodItem;
