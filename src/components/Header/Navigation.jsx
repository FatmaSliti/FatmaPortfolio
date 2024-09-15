import styles from '../Header/Navigation.module.css'

const Navigation = () => {
    return (
        <>
            <ul className={`${styles.navigation} `}>
                <li >
                    <a className={styles.a} href="">Home</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="">Service</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="">Blog</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="">Pages</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="">Contact</a>
                </li>
            </ul>
        </>
    )
}

export default Navigation
