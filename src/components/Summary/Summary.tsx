import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {SeedEntity} from "types";

import './Summary.css';

interface Props {
    seeds: SeedEntity[];
}

export const Summary = (props: Props) => {
    const [totalSeedsCount, setTotalSeedsCount] = useState<number | null>(null);
    const [totalPrice, setTotalPrice] = useState<number | null>(null);

    useEffect(() => {
        const newTotalSeedsCount = props.seeds.reduce((total, seed) => total + seed.count, 0);
        const newTotalPrice = props.seeds.reduce((total, seed) => total + seed.count * seed.price, 0);
        setTotalSeedsCount(newTotalSeedsCount);
        setTotalPrice(newTotalPrice);
    }, [props.seeds]);


    return (
        <>
            <div className="Summary__container">
                <p>
                    Podsumowanie zamówienia: do zapłaty <strong>{totalPrice}</strong> zł.
                </p>

                <hr/>

                <button><NavLink to="/">Wróć do strony główniej</NavLink></button>
            </div>

        </>
    )
}