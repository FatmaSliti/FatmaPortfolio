import Section from '../Section/Section'
import styles from '../Subscribe/Subscribe.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Subscribe = () => {
    return (
        <Section sectionTag='Get Latest Updates' title='Subscribe For Newsletter' className={styles.section}>
            <div className={styles.contact}>
                <input type="text" name="" id="" placeholder='demo@example.com' />
                <button className={styles.submitButton}>Subscribe Now</button>
            </div>
            <div className={styles.subscribeFooter}>
                <span className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                        <FaPhoneAlt className={styles.icon} color='white' />
                    </div>
                    <span className={styles.text}>+21695017336</span>
                </span>
                <span className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                        <MdEmail className={styles.icon} color='white' />
                    </div>
                    <span className={styles.text}>fatmasliti289@gmail.com</span>
                </span>
                <span className={styles.iconWrapper}>
                    <div className={styles.iconContainerEnd}>
                        <FaFacebookF className={styles.icon} />
                    </div>
                    <div className={styles.iconContainerEnd}>
                        <IoBasketballOutline className={styles.icon} />
                    </div>
                    <div className={styles.iconContainerEnd}>
                        <FaLinkedin className={styles.icon} />
                    </div>
                </span>

            </div>
        </Section>
    )
}

export default Subscribe
