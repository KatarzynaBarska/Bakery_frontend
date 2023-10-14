import React from "react";
import {NavLink} from "react-router-dom";

import './Summary.css';

// interface Props {
// bases: BaseEntity[];
// seedsList: SeedEntity[];
// };
export const Summary = () => {
return (
    <div className="Summary_container">
        <p>
            Posumowanie zamówienia
        </p>
<hr/>
        <button><NavLink to="/order">Wróć do strony główniej</NavLink></button>
    </div>
)
}