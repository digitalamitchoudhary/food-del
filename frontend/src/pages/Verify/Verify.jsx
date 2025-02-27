import React, { useEffect } from 'react'
import style from "./Verify.module.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';


const Verify = () => {


    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(success,orderId);
    

    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success){
            navigate("/myorders");
        }
        else {
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
  return (
    <div className={style.verify}>
        <div className={style.spinner}></div>
    </div>
  )
}

export default Verify