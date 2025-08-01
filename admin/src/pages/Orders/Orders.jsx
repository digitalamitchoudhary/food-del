import React, { useEffect, useState } from 'react';
import styles from './Orders.module.css'; // CSS Module import
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error('Error');
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + '/api/order/status', {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className={`${styles.order} ${styles.add}`}>
      <h3>Order Page</h3>
      <div className={styles.orderList}>
        {orders.map((order, index) => (
          <div key={index} className={styles.orderItem}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className={styles.orderItemFood}>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity;
                  } else {
                    return item.name + ' x ' + item.quantity + ', ';
                  }
                })}
              </p>
              <p className={styles.orderItemName}>
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className={styles.orderItemAddress}>
                <p>{order.address.street + ','}</p>
                <p> 
                  {order.address.city +
                    ', ' +
                    order.address.state +
                    ', ' +
                    order.address.country +
                    ', ' +
                    order.address.zipcode}
                </p>
              </div>
              <p className={styles.orderItemPhone}>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹ {order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
