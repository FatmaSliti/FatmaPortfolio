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
                <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                        <FaPhoneAlt className={styles.icon} />
                    </div>
                    <span className={styles.text}>+21695017336</span>
                </div>

                <a href="mailto:fatmasliti289@gmail.com">
                    <div className={styles.iconWrapper}>
                        <div className={styles.iconContainer}>
                            <MdEmail className={styles.icon} />
                        </div>
                        <span className={styles.text}>fatmasliti289@gmail.com</span>
                    </div>
                </a>

                <div className={styles.iconWrapper}>
                    <a href="https://www.facebook.com/fatmasliti123" target='_blank'>
                        <div className={styles.iconContainerEnd}>
                            <FaFacebookF className={styles.icon} />
                        </div>
                    </a>
                    <div className={styles.iconContainerEnd}>
                        <IoBasketballOutline className={styles.icon} />
                    </div>
                    <a href="https://www.linkedin.com/in/fatma-sliti/" target='_blank'>
                        <div className={styles.iconContainerEnd}>
                            <FaLinkedin className={styles.icon} />
                        </div>
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Subscribe
