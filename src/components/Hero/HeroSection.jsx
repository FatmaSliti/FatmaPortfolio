import styles from '../Hero/HeroSection.module.css'
import Button from '../UI/Button'
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { GoTriangleRight } from "react-icons/go";

const HeroSection = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h3 className={styles.headTitle}>Hello! I'm</h3>
                    <h2 className={styles.title}>Fatma <span className={styles.shapeMark}>Sliti</span></h2>
                    <p className={styles.headerDescription}>Web Developer specializing in React and Node JS.</p>
                    <Button className={styles.button} label='Get Resume' icon={<HiOutlineArrowDownTray color='white' />} />
                    <div className={styles.videoButton}>
                        <div className={styles.icon}>
                            <GoTriangleRight size='40px' />
                        </div>
                        <span className={styles.videoText}>Watch Video</span>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <img className={styles.headerImage} src="portrait-hero.png" alt="" />
                    {/* <div className={styles['image-half-round-shape']}>

                    </div>
                    <div className={styles['social-link']}>
                        <a href="k">
                            <i className={styles['icofont-facebook']}></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
