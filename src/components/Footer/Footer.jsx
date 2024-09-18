import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles['footer-copyright']}>
                <span className={styles.footerText} >© <span className={styles.gray}>2024</span> <span className={styles.logoText}>FatmaPortfolio</span> <span className={styles.gray}>Made with</span> 🤍 <span className={styles.gray}>by</span> Fatma Sliti</span>
                <div className={`${styles.logoText} ${styles.logogTextEnd}`}>
                    {/* <img src="logo.png" alt="" /> */}
                    FatmaPortfolio
                </div>
            </div>
        </div>
    )
}

export default Footer
