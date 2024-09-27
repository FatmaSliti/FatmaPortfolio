import styles from '../Hero/HeroSection.module.css'
import Button from '../UI/Button'
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { GoTriangleRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.heroImageContainer}>
                    {/* <img className={styles.headerImage} src="avatarGirl.svg" alt="" /> */}
                    <img className={styles.headerImage} src="fati.png" alt="" />
                </div>
                <div className={styles.heroContent}>
                    <h3 className={styles.headTitle}>Hello! I'm</h3>
                    <h2 className={styles.title}>Fatma <span className={styles.shapeMark}>Sliti</span></h2>
                    <p className={styles.headerDescription}>Turning ideas into reality through Web Developement using MongoDB, ExpressJS, ReactJS and NodeJS i.e MERN Developer in Tunisia.</p>
                    <Button className={styles.button} label='Enquire Now' icon={<HiOutlineArrowDownTray color='white' />} linkUrl='/clientProjectInfo' />
                </div>
                
            </div>
        </div>
    )
}

export default HeroSection
