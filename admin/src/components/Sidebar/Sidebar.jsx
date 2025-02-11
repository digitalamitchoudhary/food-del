import React from 'react'
import styles from './Sidebar.module.css'
import {assets} from '../../assets/assets'
import {   NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarOptions}>
        <NavLink to="add" className={styles.sidebarOption}>
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>

        <NavLink  to="list"className={styles.sidebarOption}>
          <img src={assets.order_icon} alt="" />
          <p>List Item</p>
        </NavLink>
        <NavLink  to="orders" className={styles.sidebarOption}>
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar
