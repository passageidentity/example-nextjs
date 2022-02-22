import '../styles/globals.css';

import Banner from '../components/banner';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner></Banner>
      <Component {...pageProps} />
      <div className={styles.footer}>
        Simple biometric authentication <br/>
        powered by Passage       
      </div>
    </>
  );
}

export default MyApp;