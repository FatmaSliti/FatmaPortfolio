import styles from '../UI/Button.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'

const Button = ({ label, icon, className, linkUrl }) => {
    return (
        <div className={className}>
            <Link to={linkUrl} className={styles.button}>
                {label}
                <div className={styles.icon}>
                    {icon}
                </div>
            </Link>
        </div>
    )
}

export default Button
