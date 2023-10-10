import React from "react";
import {SeedEntity} from 'types';
import {SeedTableRow} from "./SeedTableRow";

interface Props {
    seeds: SeedEntity[];
    onSeedsChange?: () => void;
}

export const SeedsTable = (props: Props) => (

    <table>
        <thead>
        <tr>
            <th>
                Nazwa dodatku
            </th>
            <th>
                Cena dodatku
            </th>
        </tr>
        </thead>
        <tbody>
        {
            props.seeds.map(seed => (

                <SeedTableRow
                seed={seed}
                key={seed.idSeed}
                onSeedsChange={props.onSeedsChange}
                />

            ))

        }
        </tbody>
    </table>

);
