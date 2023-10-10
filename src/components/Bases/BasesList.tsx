import React, {useEffect, useState} from "react";
import { BaseEntity } from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {BasesTable} from "./BasesTable";





export const BasesList = () => {
    const [basesList, setBasesList] = useState<BaseEntity[] | null>(null);

    const refreshBases = async () => {
        setBasesList(null);
        const res = await fetch('http://localhost:3001/base');
        const data = await res.json();
        setBasesList(data.basesList);
    };
    useEffect(() => {
            refreshBases();
        },
        []);

    if (basesList === null) {
        return <Spinner/>;
    }

    return <div>
        <h1> Wybierz bazę chleba</h1>
        <BasesTable
            bases={basesList}
        onBaseChange={refreshBases}
        />
    </div>
}