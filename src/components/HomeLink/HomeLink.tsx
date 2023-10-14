import React from "react";
import {NavLink} from "react-router-dom";
import imgLink from '../../assets/imgLink.jpg';


import './HomeLink.css'

export const HomeLink = () => {
    return (
        <>
            <div className="Link">
                <NavLink
                    to='/order'>Zapraszamy na zakupy!</NavLink>
                <img className="Link__img" src={imgLink} alt="ilustracja przedstawiająca świeży chleb"/>
            </div>



            </>
            )
            };
