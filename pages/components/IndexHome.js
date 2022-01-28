import React from 'react'
import Banner from './Home/Banners/Banner'
import Header from './Home/Headers/Header'
import styles from './indexHome.module.scss'

export default function IndexHome() {
    return (
        <div style={styles.Home}>
            <Header/>
            <Banner/>
        </div>
    )
}
