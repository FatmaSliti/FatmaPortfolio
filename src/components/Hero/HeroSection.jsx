import styles from '../Hero/HeroSection.module.css'
import Button from '../UI/Button'
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { GoTriangleRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h3 className={styles.headTitle}>Hello! I'm</h3>
                    <h2 className={styles.title}>Fatma <span className={styles.shapeMark}>Sliti</span></h2>
                    <p className={styles.headerDescription}>Bringing ideas into reality through Web Developement using MongoDB, ExpressJS, ReactJS and NodeJS i.e MERN Developer in Tunisia.</p>
                    <Button className={styles.button} label='Get Resume' icon={<HiOutlineArrowDownTray color='white' />} linkUrl='/clientProjectInfo' />
                </div>
                <div className={styles.heroImageContainer}>
                    <img className={styles.headerImage} src="avatarGirl.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
