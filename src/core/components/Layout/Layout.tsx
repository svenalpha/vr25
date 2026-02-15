import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//import styles from './Layout.module.scss';
import styles from './Layout.module.css'

const Layout: React.FC<LayoutProps> = (props) => {

    return (
        <>
            <nav className={styles.navWrapper}>
                <ul className={styles.nav}>  
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact/:iddd"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"extra"}>Extra</NavLink>
                    </li>
                    <li>
                        <NavLink to={"plus"}>Plus</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Detail"}></NavLink>
                    </li>


                </ul>
            </nav>

            <Outlet />
        </>
    )
}

interface LayoutProps {
    [key: string]: any
}

export default Layout;