import React from "react";
import {SeedEntity} from 'types';
import {SeedTableRow} from "./SeedTableRow";
import {Summary} from "../Summary/Summary";

import './SeedsList.css';

interface Props {
    seeds: SeedEntity[];
    onSeedsChange: () => void;
}

export const SeedsTable = (props: Props) => {
    return (
        <>
            <table className="SeedsTable__container">
                <thead>
                <tr>
                    <th>nazwa</th>
                    <th>cena</th>
                    <th>ilość</th>
                    <th>wybierz ilość sztuk</th>
                    <th>Zmiany</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.seeds.map(seed => (
                        <SeedTableRow
                            oneSeed={seed}
                            key={seed.idSeed}
                            onSeedsChange={props.onSeedsChange}/>
                    ))
                }

                </tbody>
            </table>

            <Summary seeds={props.seeds}/>

        </>

    );
}
