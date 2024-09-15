import styles from '../Statistics/Statistics.module.css'
import StatisticPart from './StatisticPart/StatisticPart'


const Statistics = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statsWrapper}>
                <StatisticPart imageSrc='counterup-icon-1.png' stats='258+' description='Happy Clients' />
                <StatisticPart imageSrc='counterup-icon-2.png' stats='590K' description='Project Complete' />
                <StatisticPart imageSrc='counterup-icon-3.png' stats='28+' description='Years of Experience' />
            </div>
        </div>
    )
}

export default Statistics
