import React, {FormEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";




export const Checkbox = () => {
    const [agreementChecked, setAgreementChecked] = useState(false);

    const sendForm = (event: FormEvent) => {
        event.preventDefault();
        console.log(agreementChecked);
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <label>
                    <input
                        type="checkbox"
                        checked={agreementChecked}
                        onChange={event => setAgreementChecked(event.target.checked)}
                    /> Zgoda na ....
                </label>

                <p>
                    {
                        agreementChecked ? 'Udzielono zgodę na...' : 'Nie udzielono zgody na...'
                    }
                </p>
                {/*opcjonalnie: zgoda jest wymagana.*/}
                <p>

                    {
                        !agreementChecked && 'Zgoda jest wymagana.'
                    }
                </p>
                <button type="submit">Save</button>
            </form>
        </>
    )
}