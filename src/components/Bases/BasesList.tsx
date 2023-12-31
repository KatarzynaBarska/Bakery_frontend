import React, {useEffect, useState} from "react";
import {ListBasesRes} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {BasesTable} from "./BasesTable";
import {NavLink} from "react-router-dom";

import './BasesList.css';

export const BasesList = () => {
    const [data, setData] = useState<ListBasesRes | null>(null);


    const refreshBases = async ()  => {
        setData(null);
        const res = await fetch(`http://localhost:3001/base`);
        setData(await res.json());
    };

    useEffect(() => {
        (async () => {

            refreshBases();

        })();
    }, []);
    if (data === null) {
        return <Spinner/>;
    }

    return <div className='BasesList_container'>
        <h1> Wybierz bazę chleba</h1>
        <BasesTable
            bases={data.basesList}
            seedsList={data.seedsList}
        onBaseChange={refreshBases}
        />
        <hr/>
        <button type="submit"><NavLink to='/summary'>Podsumowanie zamówienia</NavLink></button>
    </div>
}