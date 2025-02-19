import React, { useEffect, useState } from 'react'
import styles from './List.module.css'
import axios from "axios";
import {toast} from 'react-toastify'
const List = ({url}) => {

  // const url = "http://localhost:4000"
    const [list, setList] = useState([])


    const fetchList = async()=>{
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      
      if (response.data.success){
        setList(response.data.data)
      }else{
        toast.error("Error")
      }

      

    }


    const removeFood= async (foodId)=>{
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message);
      }
      else{
        toast.error("Error");
      }
    }
  
    useEffect(() => {
      fetchList()
    }, [])
    

    return (


      <div className={`${styles.list} ${styles.add} ${styles.flexCol}`}>

        <p>All Foods List</p>
        <div className={styles.listTable}>
        <div className={`${styles.listTableFormat} ${styles.title}`}>
        <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return(
              <div key={index} className={styles.listTableFormat}>
                <img src={`${url}/images/`+item.image}alt=''/>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>₹{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className={styles.cursor}  >X</p>
                </div>
            )
          })}
        </div>
  
      </div>
    )
}

export default List
