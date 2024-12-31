import React from 'react'
import styles from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

function Home() {
  return (
    <div className={styles.back}>

      <Hero/>
      <ExploreMenu/>
    </div>
  )
}

export default Home
