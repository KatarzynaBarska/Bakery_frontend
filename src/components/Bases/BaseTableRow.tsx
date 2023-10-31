import React, {FormEvent, useState} from "react";
import { BaseEntity, SeedEntity } from "types";

import './BaseTableRow.css'
import {BaseSeedSelect} from "../BaseSeedSelect";


interface Props {
    base: BaseEntity;
    seedsList: SeedEntity[];
    onBaseChange?: () => void;
}
export const BaseTableRow = (props: Props) => {
    const [numberOfBread, setNumberOfBread] = useState(0);

    const sentForm = (event: FormEvent) => {
        event.preventDefault();
    }

    const deleteBase = async (e: MouseEvent) => {
        e.preventDefault();

        if(!window.confirm(`Are you sure you want to remove ${props.base.name}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/${props.base.idBase}`, {
            method: 'DELETE',
        });

        if ([400,500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`);
            return
        }
        //props.onBaseChange();
    };

    return (
<>
    <tr>
        <th>{props.base.name}</th>
        <td>
            <BaseSeedSelect
                seedsList={props.seedsList}
                selectedId={props.base.seedId}
                idBase={props.base.idBase as string}
            />
        </td>

        <td>{props.base.price} zł </td>
        <td>
            <form onSubmit={sentForm}>
                <input type="number"
                       value={numberOfBread}
                       onChange={event=>setNumberOfBread(Number(event.target.value))}/>
            </form>
        </td>
        <td>{props.base.price * props.base.count} zł</td>
        <td> <button type='submit'>Save</button></td>

    </tr>
    </>

)
}