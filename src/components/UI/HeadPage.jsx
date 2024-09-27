import styles from '../UI/HeadPage.module.css'

const HeadPage = ({label, title, samllTitle}) => {
    return (
        <section className={styles.heroSection} >
            <div>
                <h2>{title}</h2>
            </div>
            <ul>
                <li >{label}</li>
                <li>{samllTitle}</li>
            </ul>
        </section>
    )
}

export default HeadPage
