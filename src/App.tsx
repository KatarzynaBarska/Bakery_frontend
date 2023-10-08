import React, {useEffect, useState} from 'react';
import { SeedEntity } from 'types';
import './App.css';
import {Header} from "./components/Header/Header";
import {SeedsTable} from "./components/SeedsTable";
import {SeedsListTest} from "./components/seedsListTest";
import {SeedTableRow} from "./components/SeedTableRow";
import {Route, Routes} from "react-router-dom";


function App() {
//     const [seedsData, setSeedsData] = useState([]); // Początkowo dane są puste tablicy
//
//     useEffect(() => {
//         // Wykonaj żądanie do serwera, aby pobrać dane nasionek
//         fetch('http://localhost:3001/') // Dostosuj URL do swojego backendu
//             .then((response) => response.json())
//             .then((data) => {
//                 setSeedsData(data); // Ustaw dane nasionek w stanie komponentu po pobraniu
//             })
//             .catch((error) => {
//                 console.error('Błąd pobierania danych nasionek:', error);
//             });
//     }, []); // Pusty [] oznacza, że ten efekt będzie wywołany tylko raz po montażu komponentu

    // const handleSeedsChange = (newSeeds: SeedEntity) => {
    //     // Tutaj możesz dodać logikę do obsługi zmian w danych nasionek
    //     console.log("Nowe dane nasionek:", newSeeds);
    // };

    return (
        <>
            <Header />
<Routes>
<Route path="/" element={<SeedsListTest/>}/>
</Routes>
        </>
    );
}

export default App;

