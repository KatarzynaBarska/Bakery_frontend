import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {OrderView} from "./views/OrderView";
import {SeedsView} from "./views/SeedsView";
import {SummaryView} from "./views/SummaryView";
import {SignupForm} from "./components/TestoweComponenty/Forms/test";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path='/order' element={<OrderView/>}/>
                <Route path="/seed" element={<SeedsView/>}/>
                <Route path="/summary" element={<SummaryView/>}/>
                <Route path='/rej' element={<SignupForm/>}/>
            </Routes>
            </>
    );
}

export default App;

