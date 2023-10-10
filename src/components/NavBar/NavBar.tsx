import React from 'react';
import { NavLink} from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <div className="Navbar">
                    <label>
                        <NavLink to='/log'>Logowanie</NavLink>
                    </label>
                    <label>
                        <NavLink to='/rej'>Rejestracja</NavLink>
                    </label>
                    <label>
                        <NavLink to='/galery'>Galeria</NavLink>
                    </label>
                    <label>
                        <NavLink to='/calender'>Kalendarz</NavLink>
                    </label>
                </div>

    {/*<ul className="Nav_list">*/}
    {/*    <li>*/}
    {/*        <NavLink to="/log">Logowanie</NavLink>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*        <NavLink to="/rej">Rejestracja</NavLink>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*        <NavLink to="/about">O Nas</NavLink>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*        <NavLink to="/galery">Galeria</NavLink>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*        <NavLink to="/calender">Kalendarz</NavLink>*/}
    {/*    </li>*/}

    {/*</ul>*/}
        </>
    )
};