import React from 'react';
import LogoJPG from '../../assets/Logo.png';

import './Logo.css';

export const Logo = () => {
    return (
        <>
            <div className="Header">
                <img src={LogoJPG} alt="logo piekarni"/>
                <h1>VIRTUALNA PIEKARNIA</h1>
            </div>
        </>

    )
}


