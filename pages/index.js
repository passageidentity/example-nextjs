import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {

  useEffect(()=>{
    require('@passageidentity/passage-auth');
  }, []);

  const appId = process.env.PASSAGE_APP_ID;

  return (
    <div>
      <div className='bg-poly'></div>
      <div className='header'>
        build amazing things
        <br />
        with <strong>Passage.</strong>
      </div>

      <div className={styles['form-container']}>
        <passage-auth
          app-id={appId}
        />
      </div>

      <div className='footer'>
        Implement awesome authentication with two lines of code.
        <br />
        <Link href="https://passage.id" passHref>
          <button className='btn btn-lg'>Request Early Access</button>
        </Link>
      </div>
    </div>
  );
}
