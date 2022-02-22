import '../styles/globals.css';

import Banner from '../components/banner';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner></Banner>
      <div className={styles.mainContainer}>
        <Component {...pageProps} />
      </div>
      <div className={styles.footer}>
        Learn more with our <u><a href="https://docs.passage.id">Documentation</a></u> and <u><a href="https://github.com/passageidentity">Github</a></u>.
      </div>
    </>
  );
}

export default MyApp;