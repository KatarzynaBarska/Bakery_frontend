import React, {useState} from 'react';
import Calendar from 'react-calendar';
import {ConfirmDialog} from "../Dialog/ConfirmDialog";
import {ButtonHome} from "../Buttons/ButtonHome";

import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

export const AppCalendar = () => {
    const [dataIsChoose, setDataIsChoose] = useState(false);

    const dataDialog = () => {
        setDataIsChoose(true);
    }

    return (
        <>
            {dataIsChoose && <ConfirmDialog title="DZIĘKUJEMY ZA ZŁOŻENIE ZAMÓWIENIA">
                Po dokonaniu wpłaty na nr konta xxx niezwłocznie przystąpimy do realizacji zamówienia.
                <br/>
                Zapraszamy ponownie!
                <ButtonHome/>
            </ConfirmDialog>}
            <div>
                <Calendar onClickDay={dataDialog}
                />
            </div>
        </>


    )
}