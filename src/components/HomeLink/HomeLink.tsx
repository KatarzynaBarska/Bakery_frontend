import React from "react";
import {NavLink} from "react-router-dom";

import './HomeLink.css'

export const HomeLink = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'})

    return (
        <>
            <div className="Link">
                 <NavLink style={colorOfLink}
                               to='/order'>zapraszamy</NavLink>
            </div>

        </>
    )
}
