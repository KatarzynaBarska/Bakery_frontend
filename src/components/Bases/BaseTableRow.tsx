import React from "react";
import { BaseEntity, SeedEntity } from "types";
import {BaseSeedSelect} from "../BaseSeedSelect";
import LogoJPG from "../../assets/Logo.png";

import './BaseTableRow.css'


interface Props {
    base: BaseEntity;
    seedsList: SeedEntity[];
    onBaseChange?: () => void;
}
export const BaseTableRow = (props: Props) => {
    const deleteBase = async (e: MouseEvent) => {
        e.preventDefault();

        if(!window.confirm(`Are you sure you want to remove ${props.base.name}?`)) {
            return;
        }

        const res = await fetch(`http://localhost3001/${props.base.idBase}`, {
            method: 'DELETE',
        });

        if ([400,500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`);
            return
        }
        //props.onBaseChange);
    };

    return (
<>
    <tr>
    <td>
        <button>{props.base.name}</button>
    </td>

    <td>
        {props.base.price}

    </td>
</tr>

    </>

)
}