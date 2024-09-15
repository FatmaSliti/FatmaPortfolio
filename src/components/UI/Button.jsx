import styles from '../UI/Button.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Button = ({label, icon, className}) => {
    return (
        <div className={className}>
            <a href="" className={styles.button}>
                {label}
                <div className={styles.icon}>
                    {icon}
                </div>
            </a>
        </div>
    )
}

export default Button
