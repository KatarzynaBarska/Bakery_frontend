import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {OrderView} from "./views/OrderView";
import {SingUpView} from "./views/SingUpView";
import {SingInView} from "./views/SingInView";
import {CalendarView} from "./views/CalendarView";
import {GalleryView} from "./views/GalleryView";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path='/order' element={<OrderView/>}/>
                <Route path='/rej' element={<SingUpView/>}/>
                <Route path='/log' element={<SingInView/>}/>
                <Route path='/calender' element={<CalendarView/>} />
                <Route path='/galery' element={<GalleryView/>}/>
            </Routes>
            </>
    );
}

export default App;

