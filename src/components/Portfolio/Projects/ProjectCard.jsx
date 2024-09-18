import styles from '../Projects/ProjectCard.module.css'

const ProjectCard = ({ imageSrc, projectName, field, liveDemo }) => {
    return (
        <div className={styles.portfolioProject}>
            <div className={styles.imageWrapper}>
                <div className={styles['bg-overlay']}></div>
                <div className={styles['bg-image']}>
                    <img src={imageSrc} alt="" />
                </div>
                

                <img className={styles.image} src={imageSrc} alt="" />
                
            </div>
            {/* <div>
                <p className={styles.title}>{projectName}</p>
                <span className={styles.field}>{field}</span>
            </div> */}
            <a className={styles.a} href={liveDemo} target="_blank" rel="noopener noreferrer">
                <div>
                    <p className={styles.title}>{projectName}</p>
                    <span className={styles.field}>{field}</span>
                </div>
            </a>

        </div>
    )
}

export default ProjectCard
