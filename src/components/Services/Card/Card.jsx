import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Card = ({ imageSrc, title, items, className }) => {
    return (
        <div className={`${styles.cardWrapper} ${className}`}>
            <img className={styles.cardImage} src={imageSrc} alt="" />
            <Link className={styles.a} to='/services/serviceDetails'>
                <h3 className={styles.cardTitle}>{title}</h3>
            </Link>
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
