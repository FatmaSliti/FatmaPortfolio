import styles from '../Cards/ClientCard.module.css'

const ClientCard = () => {
    return (
        <div className={styles.content}>
            <span className={styles.icon}>“</span>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit Quae atque!</p>
            <div className={styles.info}>
                <div className={styles.author}>
                    <h4 className={styles.name}>Fatma Sliti</h4>
                    <span className={styles.designation}>COE, Seoly</span>
                </div>
                <ul className={styles.review}>
                    <li className={styles.fill}>
                        <i className={styles['icofont-star']}></i>
                    </li>
                    <li className={styles.fill}>
                        <i className={styles['icofont-star']}></i>
                    </li>
                    <li className={styles.fill}>
                        <i className={styles['icofont-star']}></i>
                    </li>
                    <li className={styles.fill}>
                        <i className={styles['icofont-star']}></i>
                    </li>
                    <li className={styles.fill}>
                        <i className={styles['icofont-star']}></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ClientCard
