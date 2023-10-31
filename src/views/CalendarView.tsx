import React from 'react';
import {AppCalendar} from "../components/common/Calendar/Calendar";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";

export const CalendarView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
        <AppCalendar/>
            <Footer/>
        </>
    )
}