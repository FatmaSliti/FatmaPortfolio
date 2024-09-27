import Footer from '../Footer/Footer'
import MainHeader from '../Header/MainHeader'
import styles from '../Info/ClientProjectInfo.module.css'
import Subscribe from '../Subscribe/Subscribe'
import ClientForm from './ClientForm'

const ClientProjectInfo = () => {
    return (
        <div className={styles.clientInfoContainer}>
            <div className={styles.infoContainer}>
                <section className={styles.heroSection} >
                    <div>
                        <h2>Project Information</h2>
                    </div>
                    <ul>
                        <li >Project</li>
                        <li>Project Information</li>
                    </ul>
                </section>
                <ClientForm />
            </div>
        </div>
    )
}

export default ClientProjectInfo
