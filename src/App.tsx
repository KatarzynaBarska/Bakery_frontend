import React from 'react';
import {SeedsList} from "./components/Seeds/SeedsList";
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {OrderView} from "./views/OrderView";
import {SeedsView} from "./views/SeedsView";
import {SummaryView} from "./views/SummaryView";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path='/order' element={<OrderView/>}/>
                <Route path="/seed" element={<SeedsView/>}/>
                <Route path="/summary" element={<SummaryView/>}/>
            </Routes>

        </>
    );
}

export default App;

