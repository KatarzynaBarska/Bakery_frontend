import React from 'react';
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {HomeLink} from "../components/HomeLink/HomeLink";
import {Footer} from "../components/Footer/Footer";

import '../components/HomePage.css'

export const HomePageView = () => {
    return (
        <>

            <Logo/>
            <NavBar/>
            <div className="Container">
                <HomeLink/>
                <Footer/>
            </div>
        </>
    );
}