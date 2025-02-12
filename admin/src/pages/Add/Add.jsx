import React from 'react'
import styles from './Add.module.css'
import { assets } from '../../assets/assets'

function Add() {
  return (
    <div className={styles.add}>
      <form className={styles.flexCol}>
      <div className={`${styles.addImgUpload} ${styles.flexCol}`}>

        <p>Upload Image</p>
        <label htmlFor="image">

            <img src={assets.upload_area} alt="" />
        </label>
        <input type="file" hidden required id="image" />
      </div>

      <div className={`${styles.addProductName} ${styles.flexCol}`}>

        <p>Product name</p>
        <input type="text" name="name" placeholder='Type here' />
      </div>

      <div className={`${styles.addProductDescription} ${styles.flexCol}`}>
        <p>Product Description</p>
        <textarea name="description"  rows="6" placeholder='Write content Here' required></textarea>
      </div>
      <div className={styles.addCategoryPrice}></div>
  


      </form>
    </div>
  )
}

export default Add
