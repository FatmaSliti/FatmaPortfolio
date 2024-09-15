import styles from '../StatisticPart/StatisticPart.module.css'


const StatisticPart = ({imageSrc, stats, description}) => {
    return (
        <div className={styles.container}>
            <div  className={styles.imageWrapper}>
                <img className={styles.image}  src={imageSrc} alt="" />
            </div>
            <div className={styles.statsWrapper}>
                <span className={styles.stats}>{stats}</span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}

export default StatisticPart
