import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {HomeLink} from "../components/HomeLink/HomeLink";
import {Footer} from "../components/Footer/Footer";


export const HomeView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <HomeLink/>
            <Footer/>

        </>
    )
}