import styles from '../Section/Section.module.css'

const Section = ({ sectionTag, title, children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.sectionWrapper}>
                <span className={`${styles.sectionTag}`}>
                    {sectionTag}
                </span>
                <h2 className={`${styles.sectionTitle}`}>
                    {title}
                </h2>
                    {children}
            </div>
        </div>
    )
}

export default Section
