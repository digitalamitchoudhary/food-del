import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext.jsx';
import axios from 'axios';
import { assets } from '../../assets/assets';
import style from '../MyOrders/MyOrders.module.css'



const MyOrders = () => {
    const [data,setData] = useState([]);
    const {url,token} = useContext(StoreContext);
    
    
    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])

    return (
        <div className={style.myOrders}>
        <h2 >My Orders</h2>
        <div className={style.container}>
            {data.map((order,index)=>{
                return (
                    <div key={index} className={style.myOrdersOrder}>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index === order.items.length-1) {
                                return item.name+" * "+item.quantity
                            }
                            else{
                                return item.name+" * "+item.quantity+","
                            }
                        })}</p>
                        <p>₹{order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders