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
                    <br/>
                    Złóż zamówienie
                </NavLink>
                <img className="Link__img" src={imgLink} alt="ilustracja przedstawiająca świeży chleb"/>

            </div>
        </>
    )
};
