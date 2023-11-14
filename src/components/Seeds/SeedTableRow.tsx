import React, {MouseEvent, useState} from "react";
import {SeedEntity} from 'types';
import {ConfirmDialog} from "../common/Dialog/ConfirmDialog";
import {apiUrl} from "../../config/api";

interface Props {
    oneSeed: SeedEntity;
    onSeedsChange: () => void;
}

export const SeedTableRow = (props: Props) => {
    const [count, setCount] = useState(props.oneSeed.count);
    const [isConfirmOpen, setConfirmOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value, 10);
        setCount(newCount);
    }

    const handleConfirmOpen = () => {
        setConfirmOpen(true);
    }

    const handleConfirmClose = () => {
        setConfirmOpen(false);
        setCount(0);
    }

    const updateSeed = async (e: MouseEvent) => {
        e.preventDefault();


        if (!isConfirmOpen) {
            handleConfirmOpen();
            return;
        }


        const data = await fetch(`${apiUrl}/${props.oneSeed.idSeed}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({newCount: count}),
        });

        if ([400, 500].includes(data.status)) {
            const error = await data.json();
            alert(`Error occurred: ${error.message}`);
            return;
        }

        props.onSeedsChange();


        handleConfirmClose();
    }

    return (
        <>
            <tr>
                <td>{props.oneSeed.name}</td>
                <td>{props.oneSeed.price.toFixed(2)} zł</td>
                <td><strong>{props.oneSeed.count}</strong> sztuki</td>
                <td>
                    <input
                        type="number"
                        min={0}
                        max={10}
                        value={count}
                        onChange={handleChange}
                    />
                </td>
                <td>
                    <a href="#" onClick={updateSeed}>Akceptuj</a>
                </td>
            </tr>

            {isConfirmOpen && (
                <ConfirmDialog title="Potwierdzenie">
                    Czy na pewno chcesz zmienić zamówienie?
                    <hr/>
                    <button onClick={handleConfirmClose}>Nie</button>
                    <button onClick={updateSeed}>Tak</button>
                </ConfirmDialog>
            )}
        </>
    )
}
