import Footer from '../Footer/Footer'
import MainHeader from '../Header/MainHeader'
import styles from '../Info/ClientProjectInfo.module.css'
import Subscribe from '../Subscribe/Subscribe'
import ClientForm from './ClientForm'

const ClientProjectInfo = () => {
    return (
        <div className={styles.clientInfoContainer}>
            <div className={styles.infoContainer}>
                <MainHeader />
                <ClientForm />
                <Subscribe />
            </div>
            <Footer />
        </div>
    )
}

export default ClientProjectInfo
