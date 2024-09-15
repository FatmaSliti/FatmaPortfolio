import styles from '../SkillsCard/SkillsCard.module.css'

const SkillsCard = ({ skill, progress }) => {
    return (
        <div className={styles.SkillsCardWrapper}>
            <div className={styles.container}>
                <span>{skill}</span>
                <span>{progress}</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles["progress-bar"]}>
                    <span className={styles["progress-bar-fill"]} style={{ width: progress }}></span>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard
