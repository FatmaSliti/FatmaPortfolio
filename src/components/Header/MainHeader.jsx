import styles from '../Header/MainHeader.module.css'
import Button from '../UI/Button'
import Navigation from './Navigation'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MainHeader = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.mainHeader}>
                <a href="k">
                    <img src="/logo.png" alt="images" />
                </a>
                <Navigation />
                {/* <div>
                    <a className={`${styles.a} `} href="#a">
                        Hire me
                        <i className='icofont-double-right'></i>
                    </a>
                </div> */}
                <Button label='Hire Me' icon={<MdKeyboardDoubleArrowRight style={{ color: 'white' }} />} />
            </div>
        </div>
    )
}

export default MainHeader
