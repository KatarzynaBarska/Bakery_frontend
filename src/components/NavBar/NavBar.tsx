import React from 'react';
import { NavLink} from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
    return (
        <>
            <div className="Navbar">
                <label>
                    <NavLink to='/order'>Zamówienie</NavLink>
                </label>
                    <label>
                        <NavLink to='/log'>Logowanie</NavLink>
                    </label>
                    <label>
                        <NavLink to='/rej'>Rejestracja</NavLink>
                    </label>
                    <label>
                        <NavLink to='/gallery'>Galeria</NavLink>
                    </label>
                    <label>
                        <NavLink to='/calender'>Kalendarz</NavLink>
                    </label>
                {/*<label>*/}
                {/*    <NavLink to='/about'>O nas</NavLink>*/}
                {/*</label>*/}
                </div>
        </>
    )
};