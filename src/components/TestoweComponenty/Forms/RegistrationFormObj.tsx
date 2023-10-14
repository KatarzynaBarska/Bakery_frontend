import React, {ChangeEvent, FormEvent, useState} from "react";

export const RegistrationFormObj = () => {
    const [user, setUser] = useState({
        firstName: '',
        surName: '',
        age: 0,
    });

    const sendForm = (event: FormEvent) => {
        event.preventDefault(); //nie muszę tutaj tworzyć obj, bo mam go dostępnego w state
        console.log(user);
    };

    const changed = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value,
        }))
        };

        return (
            <>
                <h2>Formularz rejestracyjny</h2>

                <form onSubmit={sendForm}>
                    <p>
                        <label>
                            Imię: <br/>
                            <input type="text"
                                   name="firstName"
                                   value={user.firstName}
                                   onChange={changed}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Nazwisko: <br/>
                            <input type="text"
                                   name="surName"
                                   value={user.surName}
                                   onChange={changed}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Wiek: <br/>
                            <input type="number"
                                   name="age"
                                   value={user.age}
                                   onChange={event => setUser(user => ({
                                       ...user,
                                       age: Number(event.target.value)
                                   }))}
                            />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Zapisz</button>
                    </p>
                </form>
            </>
        )

};