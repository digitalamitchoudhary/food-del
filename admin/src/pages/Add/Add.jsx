import React, {useState,
  // useEffect
 } from 'react'
import styles from './Add.module.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

function Add() {

  const url = "http://localhost:4000";
  const [image,setImage]=useState(false);

  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
})

const onChangeHandler=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setData(data=>({...data,[name]:value}))

}
// useEffect(() => {
//  console.log(data);
 
// }, [data])


  const onSubmitHandler = async(event) =>{
    event.preventDefault();
    console.log('submit');
    const formData= new FormData();
            formData.append("name",data.name)
            formData.append("description",data.description)
            formData.append("price",Number(data.price))
            formData.append("category",data.category)
            formData.append("image",image)
            const response=await axios.post(`${url}/api/food/add`,formData)
            if(response.data.success){
              setData({
                  name:"",
                  description:"",
                  price:"",
                  category:"Salad"
              })
              setImage(false)
              toast.success(response.data.message)
          }
          else{
              toast.error(response.data.message)
          }
  }


  return (
    <div className={styles.add}>
      <form className={`${styles.f} ${styles.flexCol}`} onSubmit={onSubmitHandler}>
        <div className={`${styles.addImgUpload} ${styles.flexCol}`}>

          <p>Upload Image</p>
          <label htmlFor="image">

            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" hidden required id="image" />
        </div>

        <div className={`${styles.addProductName} ${styles.flexCol}`}>

          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' />
        </div>

        <div className={`${styles.addProductDescription} ${styles.flexCol}`}>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content Here' required></textarea>
        </div>
        <div className={styles.addCategoryPrice}>

          <div className={`${styles.addCategory} ${styles.flexCol}`}>

            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
            </select>


          </div>
          <div className={`${styles.addPrice} ${styles.flexCol}`}>
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹20' />
          </div>
        </div>

        <button type='submit' className={styles.addBtn}>Add</button>


      </form>
    </div>
  )
}

export default Add
