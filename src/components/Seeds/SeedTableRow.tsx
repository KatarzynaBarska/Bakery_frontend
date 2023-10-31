import React, {MouseEvent, useState} from "react";
import {SeedEntity} from 'types';

interface Props {
    oneSeed: SeedEntity;
    onSeedsChange: () => void;
}


export const SeedTableRow = (props: Props) => {
    const [count, setCount] = useState(props.oneSeed.count);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value, 10);
        setCount(newCount);

    }

    const updateSeed = async (e: MouseEvent) => {
        e.preventDefault();

        if (!window.confirm('Are you sure you want to change number of seeds?')) {
            return;
        }

        const data = await fetch(`http://localhost:3001/${props.oneSeed.idSeed}`, {
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
    }

    return (
        <>
            <tr>
                <td>{props.oneSeed.name}</td>
                <td>{props.oneSeed.price.toFixed(2)} zł</td>
                <td>{props.oneSeed.count} sztuki</td>

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

        </>

    )
}






















