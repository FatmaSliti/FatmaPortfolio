import styles from '../Card/Card.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Card = ({ imageSrc, title, items }) => {
    return (
        <div className={styles.cardWrapper}>
            <img className={styles.cardImage} src={imageSrc} alt="" />
            <h3 className={styles.cardTitle}>{title}</h3>
            <ul className={styles.serviceUl}>
                {items.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        <MdKeyboardDoubleArrowRight />
                        <span className={styles.cardItem}>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Card
