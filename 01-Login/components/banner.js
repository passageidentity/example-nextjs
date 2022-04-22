import styles from '../styles/Banner.module.css';

export default function Banner() {
    return ( 
        <div className={styles.mainHeader}>
            <a href="https://passage.id/" ><div className={styles.passageLogo}></div></a>
            <div className={styles.headerText}>Passage + Next.js Example App</div>
            <div className={styles.spacer}></div>
            <a href="https://passage.id/" className={styles.link}>Go to Passage</a>
        </div>
    );
}
