// import React from 'react';
// import styles from '../Header/Navigation.module.css';
// import { Link } from 'react-router-dom';

// const Navigation = ({ isMenuOpen, toggleMenuHandler }) => {
//     return (
//         <ul className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
//             <li className={styles.li}>
//                 <Link className={styles.a} to="/" onClick={toggleMenuHandler}>Home</Link>
//             </li>

//             <li className={styles.li}>
//                 <a className={styles.a} href="#" onClick={toggleMenuHandler}>Service</a>
//                 <ul className={styles.submenu}>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Services</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Service Details</a></li>
//                 </ul>
//             </li>

//             <li className={styles.li}>
//                 <a className={styles.a} href="#" onClick={toggleMenuHandler}>Blog</a>
//                 <ul className={styles.submenu}>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Full Width</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Left Sidebar</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Right Sidebar</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog Details Full Width</a></li>
//                 </ul>
//             </li>

//             <li className={styles.li}>
//                 <a className={styles.a} href="#" onClick={toggleMenuHandler}>Pages</a>
//                 <ul className={styles.submenu}>
//                     <li ><a href="#" className={`${styles.a} ${styles.subNavItem}`}>About Us</a></li>
//                     <li ><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Project</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Project Details</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>FAQ</a></li>
//                     <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>404 Page</a></li>
//                 </ul>
//             </li>

//             <li className={styles.li}>
//                 <a className={styles.a} href="#" onClick={toggleMenuHandler}>Contact</a>
//             </li>
//         </ul>
//     );
// };

// export default Navigation;



import React, { useState } from 'react';
import styles from '../Header/Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = ({ isMenuOpen, toggleMenuHandler }) => {
    const [submenuOpen, setSubmenuOpen] = useState({
        services: false,
        blog: false,
        pages: false,
    });

    const toggleSubmenu = (submenu) => {
        setSubmenuOpen((prevState) => ({
            ...prevState,
            [submenu]: !prevState[submenu],
        }));
    };

    return (
        <ul className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <li className={styles.li}>
                <Link className={styles.a} to="/" onClick={toggleMenuHandler}>Home</Link>
            </li>

            {/* <li className={styles.li} onClick={() => toggleSubmenu('services')}> */}
            <li className={styles.li} >
                <a className={styles.a} href="#" >Service</a>
                <ul className={`${styles.submenu} ${submenuOpen.services ? styles.active : ''}`}>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Services</a></li>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Service Details</a></li>
                </ul>
            </li>

            {/* <li className={styles.li} onClick={() => toggleSubmenu('blog')}> */}
            <li className={styles.li} >
                <a className={styles.a} href="#" >Blog</a>
                <ul className={`${styles.submenu} ${submenuOpen.blog ? styles.active : ''}`}>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Full Width</a></li>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Left Sidebar</a></li>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Blog List Right Sidebar</a></li>
                </ul>
            </li>

            {/* <li className={styles.li} onClick={() => toggleSubmenu('pages')}> */}
            <li className={styles.li} >
                <a className={styles.a} href="#" >Pages</a>
                <ul className={`${styles.submenu} ${submenuOpen.pages ? styles.active : ''}`}>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>About Us</a></li>
                    <li><a href="#" className={`${styles.a} ${styles.subNavItem}`}>Project</a></li>
                </ul>
            </li>

            <li className={styles.li}>
                <a className={styles.a} href="#" onClick={toggleMenuHandler}>Contact</a>
            </li>
        </ul>
    );
};

export default Navigation;
