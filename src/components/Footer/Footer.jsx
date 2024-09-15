import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles['footer-copyright']}>
                <span >© <span className={styles.gray}>2024</span> Lendex <span className={styles.gray}>Made with</span> 🤍 <span className={styles.gray}>by</span> HasThemes</span>
                <div>
                    <img src="logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
