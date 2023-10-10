import React from "react";
import { BaseEntity } from "types";


interface Props {
    base: BaseEntity;
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
        //props.onBasesChange();
    };

    return (
        <tr>
            <td>
                {props.base.name}
            </td>
            <td>
                {props.base.price}
            </td>
            {/*<td>*/}
            {/*    <a href="/" onClick={deleteSeed}>usuń dodatek</a>*/}
            {/*</td>*/}
        </tr>
    )
}