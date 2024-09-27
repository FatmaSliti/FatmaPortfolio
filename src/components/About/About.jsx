import styles from '../About/About.module.css'
import { useState } from 'react'

const About = () => {
    let [isEducationVisible, setIsEducationVisible] = useState(true)
    let [isExperienceVisible, setIsExperienceVisible] = useState(false)

    const onEducationClick = () => {
        setIsEducationVisible(true)
        setIsExperienceVisible(false)
    }

    const onExperienceClick = () => {
        setIsExperienceVisible(true)
        setIsEducationVisible(false)
    }

    return (
        <div className={styles.bigContainer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.image}>
                            <img src="fati.png" alt="" />
                        </div>
                        <div className={styles.about}>
                            <h1>I’m Fatma Sliti</h1>
                            <h2>Web Developer specializing in MERN stack.</h2>
                            <p>I'm Fatma Sliti, a Web Developer specializing in the MERN stack. I thrive on creating seamless user experiences through modern web technologies. My journey in development is driven by a passion for design and a commitment to building dynamic, responsive applications that solve real-world problems.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.experienceWrapper}>
                    <div className={styles.experienceContainer}>
                        {isEducationVisible ? <button onClick={onEducationClick} className={`${styles.btn} ${styles.btnFocus}`}>Education</button> : <button onClick={onEducationClick} className={styles.btn}>Education</button>}
                        {isExperienceVisible ? <button onClick={onExperienceClick} className={`${styles.btn} ${styles.btnFocus}`}>Experience</button> : <button onClick={onExperienceClick} className={styles.btn}>Experience</button>}

                        {/* <button onClick={onEducationClick} className={styles.btn}>Education</button> */}
                        {/* <button onClick={onExperienceClick} className={styles.btn}>Experience</button> */}
                    </div>
                    <div>
                        {isEducationVisible && <div className={styles.education}>
                            <div className={styles.subSection}>
                                <div className={styles.sidebar}>
                                    <span className={styles.year}>2020-2023</span>
                                </div>
                                <div className={styles.rightContent}>
                                    <h3>Bachelor's degree in computer science Software engineering</h3>
                                    <span>University of Sfax</span>
                                    <p>Focused on mastering software development principles, algorithms, and systems design, with hands-on experience in web development, databases, and machine learning. Developed a strong foundation in coding practices and problem-solving techniques through both theoretical coursework and practical projects.</p>
                                </div>
                            </div>

                            <div className={styles.subSection}>
                                <div className={styles.sidebar}>
                                    <span className={styles.year}>2020</span>
                                </div>
                                <div className={styles.rightContent}>
                                    <h3>High school diploma in Technical Sciences</h3>
                                    <span >IBN ABI DHIEF</span>
                                    <p>Gained a solid foundation in technical subjects, including mathematics, physics, and engineering basics, which sparked an interest in problem-solving and technology. Developed analytical skills and a passion for applying scientific principles to real-world challenges.</p>
                                </div>
                            </div>
                        </div>}

                        {isExperienceVisible && <div className={styles.education}>
                            <div className={styles.subSection}>
                                <div className={styles.sidebar}>
                                    <span className={styles.year}>2023-2024</span>
                                </div>
                                <div className={styles.rightContent}>
                                    <h3>React Frontend Developer</h3>
                                    <span>Asteroidea</span>
                                    <p>Focused on mastering software development principles, algorithms, and systems design, with hands-on experience in web development, databases, and machine learning. Developed a strong foundation in coding practices and problem-solving techniques through both theoretical coursework and practical projects.</p>
                                </div>
                            </div>

                            <div className={styles.subSection}>
                                <div className={styles.sidebar}>
                                    <span className={styles.year}>2023</span>
                                </div>
                                <div className={styles.rightContent}>
                                    <h3>End-Of-Studies internship</h3>
                                    <span >Tunisie Télécom</span>
                                    <p>Website Development for RLA Market Digitalization and Inventory Tracking using React JS Library.</p>
                                </div>
                            </div>

                            <div className={styles.subSection}>
                                <div className={styles.sidebar}>
                                    <span className={styles.year}>2022</span>
                                </div>
                                <div className={styles.rightContent}>
                                    <h3>SUMMER INTERNSHIP</h3>
                                    <span >Bee Coders</span>
                                    <p>Web Development using HTML / CSS / JS.</p>
                                </div>
                            </div>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
