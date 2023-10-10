import React, {useEffect, useState} from "react";

import {SeedEntity} from 'types';
import {Spinner} from "../common/Spinner/Spinner";
import {SeedsTable} from "./SeedsTable";
import {NavLink} from "react-router-dom";

export const SeedsList = () => {
    const [seedsList, setSeedsList] = useState<SeedEntity[] | null>(null);

    const refreshSeeds = async () => {
        setSeedsList(null);
        const res = await fetch('http://localhost:3001');
        const data = await res.json();
        setSeedsList(data.seedsList);
    };

    useEffect(() => {
            refreshSeeds();
        },
        []);

    if (seedsList === null) {
        return <Spinner/>;
    }

    return <div>
        <h1>Wybierz dodatek do chleba</h1>
        <SeedsTable seeds={seedsList} onSeedsChange={refreshSeeds}/>
        <button><NavLink to='/summary'>Podsumowanie zamówienia</NavLink></button>
    </div>

};