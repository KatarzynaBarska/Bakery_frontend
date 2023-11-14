import React, {useEffect, useState} from "react";
import {SeedEntity} from 'types';
import {Spinner} from "../common/Spinner/Spinner";
import {SeedsTable} from "./SeedsTable";

import './SeedsList.css';
import {apiUrl} from "../../config/api";

export const SeedsList = () => {
    const [seedsList, setSeedsList] = useState<SeedEntity[] | null>(null);
    //Add new state
    const [numberOfSeed, setNumberOfSeed] = useState<SeedEntity[] | null>(null);


    const refreshSeeds = async () => {
        setSeedsList(null);

        const res = await fetch(apiUrl);
        const data = await res.json();
        setSeedsList(data.seedsList);
        setNumberOfSeed(data.seedsList); // add new line

    };

    useEffect(() => {
        refreshSeeds();
    }, [])

    if (seedsList === null) {
        return <Spinner/>
    }


    return (
        <>
            <SeedsTable seeds={seedsList} onSeedsChange={refreshSeeds}/>

        </>)
}
