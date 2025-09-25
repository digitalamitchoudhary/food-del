import React, { useState } from 'react'
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

 

function Home() {
  
    const [category, setCategory] = useState("All")


 

  return (
    <div >

      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
       
    </div>
    
  )
}

export default Home
