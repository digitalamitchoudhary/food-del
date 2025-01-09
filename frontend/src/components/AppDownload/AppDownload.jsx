import React from 'react'
import styles from './AppDownload.module.css'
import { assets } from '../../assets/assets'
function AppDownload() {
  return (
     <div className={styles.appDownload} id='appDownload'>
        
        <p>For Better Experince Download <br /> Tomato App</p>

        <div className={styles.appDownloadPlatforms}>

            <img src={assets.play_store}  />
            <img src={assets.app_store}  />
        </div>
    </div>
  )
}

export default AppDownload
