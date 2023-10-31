import React from "react";
import {NavLink} from "react-router-dom";
import imgLink from '../../assets/imgLink.jpg';


import './HomeLink.css'

export const HomeLink = () => {
    return (
        <>
            <div className="Link">

                <NavLink
                    to='/order'>Nie bądź buła, kupuj chleb !
                </NavLink>

                <NavLink to='/order'>
                    <img className="Link__img" src={imgLink} alt="ilustracja przedstawiająca świeży chleb"/>
                </NavLink>

                <NavLink to='/order'><h4>Złóż zamówienie</h4></NavLink>
            </div>
        </>
    )
};
