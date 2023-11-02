import React, {useEffect, useState} from "react";
import {SeedEntity} from "types";
import {ButtonHome} from "../common/Buttons/ButtonHome";
import {NavLink} from "react-router-dom";
import {DialogThanks} from "../common/Dialog/DialogThanks";

import './Summary.css';
import {BtnPay} from "../common/Buttons/BtnPay";

interface Props {
    seeds: SeedEntity[];
}

export const Summary = (props: Props) => {
    const [totalSeedsCount, setTotalSeedsCount] = useState<number | null>(null);
    const [totalPrice, setTotalPrice] = useState<number | null>(null);
    const [isDialogActive,setIsDialogActive ] = useState(false);

    const alertInfo = () => {
        setIsDialogActive(true);
    }

    const alertCancel = () => {
        setIsDialogActive(false);
    }


    useEffect(() => {
        const newTotalSeedsCount = props.seeds.reduce((total, seed) => total + seed.count, 0);
        const newTotalPrice = props.seeds.reduce((total, seed) => total + seed.count * seed.price, 0);
        setTotalSeedsCount(newTotalSeedsCount);
        setTotalPrice(newTotalPrice);
    }, [props.seeds]);


    return (
        <>
            {isDialogActive && <DialogThanks
                onCancel={alertCancel}>
                Zamówienie zostało zmienione poprawnie!
                <NavLink to='/calender'>Wybierz datę zamówienia</NavLink>
            </DialogThanks>}
            <div className="Summary__container">
                <p>
                    Podsumowanie zamówienia: do zapłaty <strong>{totalPrice}</strong> zł.
                    <br/>
                    Zamówiono {totalSeedsCount} bochenki.
                </p>
                <hr/>
                <ButtonHome/>
            </div>
            <BtnPay action={alertInfo}/>
        </>
    )
}