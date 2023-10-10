import React from 'react';
import {BaseEntity} from 'types';
import {BaseTableRow} from "./BaseTableRow";



interface Props {
    bases: BaseEntity[];
    onBaseChange?: () => void;
}

export const BasesTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>
                Nazwa bazy
            </th>
            <th>Cena bazy</th>
        </tr>
        </thead>
        <tbody>
        {
            props.bases.map(base => (

                <BaseTableRow
                    base={base}
                    key={base.idBase}
                    onBaseChange={props.onBaseChange}
                />
            ))
        }
        </tbody>
    </table>
)