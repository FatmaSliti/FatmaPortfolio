import React, { useState } from 'react';
import styles from '../Header/MainHeader.module.css';
import Button from '../UI/Button';
import Navigation from './Navigation';
import { MdKeyboardDoubleArrowRight, MdMenu, MdClose } from "react-icons/md";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.mainHeader}>
                <div className={styles.logoText}>
                    FatmaPortfolio
                </div>
                <nav>
                    <button className={styles.menuButton} onClick={toggleMenuHandler}>
                        {isMenuOpen ? <MdClose /> : <MdMenu />}
                    </button>
                    <Navigation isMenuOpen={isMenuOpen} toggleMenuHandler={toggleMenuHandler} />
                </nav>
                <Button className={styles.hireMeButton} label="Hire Me" icon={<MdKeyboardDoubleArrowRight style={{ color: 'white' }} />} />
            </div>
        </div>
    );
};

export default MainHeader;
