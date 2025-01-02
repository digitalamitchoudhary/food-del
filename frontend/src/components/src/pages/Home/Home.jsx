import React, { useState } from 'react'
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

function Home() {
  
    const [category, setCategory] = useState("All")


  return (
    <div className={styles.back}>

      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
