import styles from '../Contact/Contact.module.css'
import Section from '../Section/Section'
import HeadPage from '../UI/HeadPage'
import { FaFacebookF } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.contactWrapper}>
            <div className={styles.contact}>
                <div>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoContainer}>
                            <h6>Phone</h6>
                            <span>+21695017336</span>
                        </div>
                        <div className={styles.infoContainer}>
                            <h6>Email</h6>
                            <span>fatmasliti289@gmail.com</span>
                        </div>
                        <div className={styles.infoContainer}>
                            <h6>Website</h6>
                            <span>www.example.com</span>
                        </div>
                        <div className={styles.infoContainer}>
                            <h6>Address</h6>
                            <span>Chouhadee Street Teboursouk Tunisia</span>
                        </div>
                    </div>
                    <div className={styles.follow}>
                        <h2>Follow Me</h2>
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
                </div>
                <div className={styles.rightSection}>
                    <img src="contact.jpeg" alt="" />
                    <Section sectionTag='Get In Touch' title='If you have any project or need help, contact me.' className={styles.section} >
                        <p>
                            I'm always open to collaborating on new projects or lending a hand with any challenges you might be facing. Feel free to reach out, and let's work together to create something great.
                        </p>
                    </Section>
                    <div>
                        <form action="" className={styles.form}>
                            <div>
                                <input placeholder='Name' type="text" name="" id="" />
                                <input placeholder='Email' type="text" name="" id="" />
                            </div>
                            <div>
                                <input placeholder='Phone' type="text" name="" id="" />
                                <input placeholder='Subject' type="text" name="" id="" />
                            </div>
                            <div>
                                <textarea placeholder='Comment' name="" id=""></textarea>
                            </div>
                            <button onClick={handleForm}>Submit message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
