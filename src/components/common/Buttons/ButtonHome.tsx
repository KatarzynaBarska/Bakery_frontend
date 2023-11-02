import React from 'react';
import {NavLink} from "react-router-dom";

import './ButtonHome.css';

export const ButtonHome = () => {
    return <button className='Button__home'>
        <NavLink to="/">Wróć do strony główniej</NavLink>
    </button>
}