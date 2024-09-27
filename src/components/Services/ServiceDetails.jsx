import Footer from '../Footer/Footer'
import MainHeader from '../Header/MainHeader'
import Section from '../Section/Section'
import styles from '../Services/ServiceDetails.module.css'
import Statistics from '../Statistics/Statistics'
import Subscribe from '../Subscribe/Subscribe'
import HeadPage from '../UI/HeadPage'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const ServiceDetails = () => {
    return (
        <>
            <HeadPage label='Service' title='Services Details' samllTitle='Service Details' />
            <div className={styles.container}>
                <section className={styles.serviceDetails}>
                    <div className={styles.categorySidebar}>
                        <h2>Category</h2>
                        <ul>
                            <a href="#frontend">
                                <li>
                                    Frontend
                                    <MdKeyboardDoubleArrowRight />
                                </li>
                            </a>
                            <a href="#backend" >
                                <li>
                                    Backend
                                    <MdKeyboardDoubleArrowRight />
                                </li>
                            </a>
                            <a href="#config">
                                <li>
                                    Serve Configuration
                                    <MdKeyboardDoubleArrowRight />
                                </li>
                            </a>
                            
                        </ul>
                    </div>
                    <div className={styles.rightServicesSide}>
                        <div className={styles.details} id='frontend'>
                            <div className={styles.image}>
                                <img src="/detail2.jpeg" alt="imagee" />
                            </div>
                            <Section sectionTag='Frontend Developement' title='Frontend development makes your website not just look good, but feel good to use.' className={styles.subSection}>
                                <p>Frontend development is where creativity meets technology. As a web developer, I focus on building visually appealing, responsive, and user-friendly interfaces that bring ideas to life. By combining clean code with attention to detail, I aim to deliver smooth, interactive experiences that engage users and reflect the unique vision behind every project. My work is not just about making a website look great—it’s about creating a seamless and enjoyable experience for everyone who visits.</p>
                            </Section>
                        </div>
                        <hr />

                        <div className={styles.details} id='backend'>
                            <div className={styles.image}>
                                <img src="/backend.jpeg" alt="imagee" />
                            </div>
                            <Section sectionTag='Backend Developement' title='Powering Your Website from Behind the Scenes.' className={styles.subSection}>
                                <p>Backend development is the engine that drives your website, ensuring it operates smoothly and efficiently. As a web developer, I focus on building robust, scalable, and secure server-side applications that support seamless functionality and data management. By combining clean, well-structured code with powerful tools, I create backend systems that enhance performance, provide security, and enable complex interactions. My goal is not just to build a working system, but to ensure that your website delivers a reliable and dynamic experience for users, no matter the demand.</p>
                            </Section>
                        </div>
                        <hr />


                        <div id='config'>
                            <div className={styles.image}>
                                <img src="/config.jpeg" alt="imagee" />
                            </div>
                            <Section sectionTag='Serve Configuration' title='Delivering Powerful Backend Support with Optimized Server Configuration' className={styles.subSection}>
                                <p>Serve configuration is the backbone of a website’s performance, ensuring that the server environment is fine-tuned to handle traffic, process requests efficiently, and deliver content swiftly. I focus on setting up and configuring servers to maximize speed, security, and scalability, creating a solid foundation for every web application. By optimizing server settings, managing resources, and ensuring seamless integration with backend and frontend systems, I aim to provide a smooth, uninterrupted user experience. My goal is to ensure your website runs efficiently under any conditions, ready to scale as your business grows.</p>
                            </Section>
                        </div>
                    </div>



                </section>
            </div>




        </>
    )
}

export default ServiceDetails
