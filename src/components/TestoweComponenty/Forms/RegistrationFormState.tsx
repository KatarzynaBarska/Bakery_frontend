import React, {FormEvent, useState} from "react";

export const RegistrationFormState = () => {
    const [firstName,setFirstName] = useState<string>('');
    const [surName, setSurName] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    const sendForm = (event: FormEvent) => {
        event.preventDefault();

        const user = { //tutaj będzie obj., który wyślemy do backendu na podastawie tego co wpisze użytkownik w formularz(tego co jest w state).
            firstName,
            surName,
            age,
        };

        console.log(user);
    };

return (
    <>
       <p>Formularz rejestracyjny</p>
        <form onSubmit={sendForm}>
            <p>
                <label>
                    Imię: <br/>
                    <input type="text"
                           value={firstName}
                           onChange={event => setFirstName(event.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Nazwisko: <br/>
                    <input type="text"
                           value={surName}
                           onChange={event => setSurName(event.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                Wiek: <br/>
                <input type="number"
                       value={age}
                       onChange={event => setAge(Number(event.target.value))}/>
            </label>
            </p>
            <p><button type="submit">Wyślij</button></p>
        </form>
        
    </>
)
}