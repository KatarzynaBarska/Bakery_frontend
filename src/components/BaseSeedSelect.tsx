import React, {FormEvent, useState} from "react";
import { SeedEntity } from "types";

interface Props {
    seedsList: SeedEntity[];
    selectedId: string;
    idBase: string;
}

export const BaseSeedSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId || '');
    console.log(selected)

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        await fetch(`http://localhost:3001/base/seed/${props.idBase}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                seedId: selected,
            })

        })
    };

    return (
        <form onSubmit={sendForm}>
            <select
                value={selected}
                onChange={e => setSelected(e.target.value)}>
                {props.seedsList.map(seed => (
                    <option value={seed.idSeed} key={seed.idSeed}>
                        {seed.name}
                    </option>
                ))}
            </select>

        </form>
    )
}