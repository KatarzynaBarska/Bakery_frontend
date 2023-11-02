import React from 'react';
import {Route, Routes} from "react-router-dom";
import {OrderView} from "./views/OrderView";
import {SingUpView} from "./views/SingUpView";
import {SingInView} from "./views/SingInView";
import {CalendarView} from "./views/CalendarView";
import {GalleryView} from "./views/GalleryView";
import {HomePageView} from './views/HomePageView';
import {AboutView} from "./views/AboutView";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePageView/>}/>
                <Route path='/order' element={<OrderView/>}/>
                <Route path='/rej' element={<SingUpView/>}/>
                <Route path='/log' element={<SingInView/>}/>
                <Route path='/calender' element={<CalendarView/>} />
                <Route path='/gallery' element={<GalleryView/>}/>
                {/*<Route path='/about' element={<AboutView/>} />*/}
            </Routes>
            </>
    );
}

export default App;

