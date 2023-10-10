import React, {useEffect, useState} from "react";

import {SeedEntity} from 'types';
import {Spinner} from "../common/Spinner/Spinner";
import {SeedsTable} from "./SeedsTable";

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
        <h1>Dodatki do chleba</h1>
        <SeedsTable seeds={seedsList} onSeedsChange={refreshSeeds}/>
    </div>

};