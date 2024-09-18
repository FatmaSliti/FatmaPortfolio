// import styles from '../Header/Navigation.module.css'

// const Navigation = () => {
//     return (
//         <>
//             <ul className={`${styles.navigation} `}>
//                 <li >
//                     <a className={styles.a} href="#">Home</a>
//                 </li>
//                 <li className={styles.li}>
//                     <a className={styles.a} href="#">Service</a>
//                 </li>
//                 <li className={styles.li}>
//                     <a className={styles.a} href="#">Blog</a>
//                 </li>
//                 <li className={styles.li}>
//                     <a className={styles.a} href="#">Pages</a>
//                 </li>
//                 <li className={styles.li}>
//                     <a className={styles.a} href="#">Contact</a>
//                 </li>
//             </ul>
//         </>
//     )
// }

// export default Navigation

import React from 'react';
import styles from '../Header/Navigation.module.css';
const Navigation = ({ isMenuOpen, toggleMenuHandler }) => {
    return (
        <ul className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Home</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Service</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Blog</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Pages</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Contact</a>
            </li>
        </ul>
    );
};

export default Navigation;
