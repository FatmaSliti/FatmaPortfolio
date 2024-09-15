import styles from '../Card/CompanyCard.module.css'

const CompanyCard = ({imageSrc}) => {
    return (
        <div className={styles.image}>
            <img src={imageSrc} alt="" />
        </div>
    )
}

export default CompanyCard
