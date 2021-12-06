import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Link from 'next/link'
import Layout from '../components/layout';

export default function Home({appId}) {

  useEffect(()=>{
    require('@passageidentity/passage-auth');
    const hasLoggedIn = localStorage.getItem('has_logged_in')
    if(hasLoggedIn !== "true"){
      document.querySelector('passage-auth').shadowRoot.querySelector('a').click()
    }
  }, []);

  return (
    <Layout bodyClass={styles.bodyClass}>
      <div className={styles.mainContainer}>
      <div className={styles.earlyAccessContainer}>
        <div className={styles.title}>Experience the Passage Difference.</div>
        <div className={styles.spacer}></div>
        <div className={styles.bodyText}>Implement risk-free authentication with two lines of code.</div>
        <Link class={styles.link} href="https://passage.id/#features" passHref><button className={` ${styles.link} button secondary`}>Request Early Access</button></Link>
      </div>
      <div className={styles.authContainer}>
        <passage-auth app-id={appId}></passage-auth>
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticProps(){
  return {
    props: {
      appId: process.env.PASSAGE_APP_ID
    }
  }
}
