import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Banner.module.css';

function Banner({authorized}){

  function logout(){
    document.cookie = "psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("psg_auth_token");
    window.location.href="/"
  }

  function logoutComponent(){
    const router = useRouter()
    if(router.route !== '/dashboard' || !authorized){
      return null
    }
    return(
      <>
        <div className={styles.logout} onclick={logout}>Logout</div>
      </>
    )
  }

  return(
    <div className={styles.mainHeader}>
      <Link href="https://passage.id/" passHref><div className={styles.passageLogo}></div></Link>
      <div className={styles.spacer}></div>
      <div className={styles.links}>
      {logoutComponent()}
      <Link href="https://passage.id/"><div className={styles.home}><span className={styles.text}>Go to Passage</span><div className={styles.icon}></div></div></Link>
      </div>
    </div>
  )
}

export default Banner;