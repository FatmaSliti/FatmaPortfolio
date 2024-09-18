import styles from '../Section/Section.module.css'

const Section = ({ sectionTag, title, children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.sectionWrapper}>
                <h2 className={`${styles.sectionTag}`}>
                    {sectionTag}
                </h2>
                <h2 className={`${styles.sectionTitle}`}>
                    {title}
                </h2>
                    {children}
            </div>
        </div>
    )
}

export default Section
