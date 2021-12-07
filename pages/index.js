import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home({appId}) {

  useEffect(()=>{
    require('@passageidentity/passage-auth');
  }, []);

  return (
    <Layout bodyClass={styles.bodyClass}>
      <div className={styles.mainContainer}>
      <div className={styles.earlyAccessContainer}>
        <div className={styles.title}>Experience the Passage Difference.</div>
        <div className={styles.spacer}></div>
        <div className={styles.bodyText}>Implement risk-free authentication with two lines of code.</div>
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
  };
}
