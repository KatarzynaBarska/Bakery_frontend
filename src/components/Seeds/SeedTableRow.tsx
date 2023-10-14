import React from "react";
import {SeedEntity} from 'types';
import {Link} from "react-router-dom";

interface Props {
    seed: SeedEntity;
    onSeedsChange: () => void;
}
export const SeedTableRow = (props: Props) => {
    const deleteSeed = async (e: MouseEvent) => {
        e.preventDefault();

        if(!window.confirm(`Are you sure you want to remove ${props.seed.name}?`)) {
            return;
        }

        const res = await fetch(`https://localhost3001/${props.seed.idSeed}`, {
            method: 'DELETE',
        });

       if ([400, 500].includes(res.status)) {
           const error = await res.json();
           alert(`Error occurred: ${error.message}`);
           return;
       }

//props.onSeedsChange();
    };

    return (
        <tr>
            <td>
                {props.seed.name}
            </td>
            <td>
                {props.seed.price}
            </td>
            {/*<td>*/}
            {/*    <Link to='/' onClick={deleteSeed}>usuń dodatek</a>*/}
            {/*</td>*/}
        </tr>
    );
};

































