import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import {Summary} from "../components/Summary/Summary";


export const SummaryView = () => {
    return(
    <>
    <Logo/>
        <NavBar/>
        <Summary />
        <Footer/>
    </>
    )
}