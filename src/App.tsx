import React from 'react';
import {SeedsList} from "./components/Seeds/SeedsList";
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {OrderView} from "./views/OrderView";
import {Footer} from "./components/Footer/Footer";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/seed" element={<SeedsList/>}/>
                <Route path='/order' element={<OrderView/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

