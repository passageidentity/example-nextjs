/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Authorized.module.css';
import Layout from './layout';
import Link from 'next/link';
import { useEffect } from 'react';

function Authorized({username}){
  useEffect(()=>{
    localStorage.setItem('has_logged_in', 'true')
  }, [])

  return (
    <Layout bodyClass={styles.bodyClass} authorized={true}>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.title}>Welcome!</div>
          <div className={styles.message}><b>{username}</b> successfully signed in with Passage.</div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.imgContainer}>
          <img src="/launch.png" alt="People Celebrating"/>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.subMessage}>Implement risk-free authentication with two lines of code.</div>
        <Link href="https://passage.id/#features"><button className={`${styles.buttonLink} button primary`}>Request Early Access</button></Link>
      </div>
    </Layout>
  )
}

export default Authorized;