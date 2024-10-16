import styles from '../Statistics/Statistics.module.css'
import StatisticPart from './StatisticPart/StatisticPart'


const Statistics = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statsWrapper}>
                {/* <div>
                    <StatisticPart imageSrc='counterup-icon-1.png' stats='5+' description='Happy Clients' />
                </div> */}
                <div>
                    <StatisticPart imageSrc='counterup-icon-2.png' stats='20+' description='Projects' />
                </div>
                <div>
                    <StatisticPart imageSrc='counterup-icon-3.png' stats='1+' description='Years of Experience' />
                </div>
            </div>
        </div>
    )
}

export default Statistics
