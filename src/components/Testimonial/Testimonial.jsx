import styles from './Testimonial.module.css'
import Section from '../Section/Section'
import ClientCard from './Cards/ClientCard'

const Clients = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <ClientCard />
                </div>
                <Section sectionTag='Testimonial' title='Satisfied Clients Say' className={styles.section} >
                    <div className={styles.clientCardContainer}>
                        <ClientCard />

                    </div>
                </Section>
            </div>

        </div>

    )
}

export default Clients
