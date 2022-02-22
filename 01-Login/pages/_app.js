import '../styles/globals.css'

import Banner from '../components/banner'
import styles from '../styles/App.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner></Banner>
      <div clasName={styles.mainContainer}>
       <Component {...pageProps} />
      </div>
      <div className={styles.footer}>
       Learn more with our <a href="https://docs.passage.id">Documentation</a> and <a href="https://github.com/passageidentity">Github</a>.     
      </div>
    </>
  )
}

export default MyApp
