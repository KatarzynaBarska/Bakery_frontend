import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {SeedsList} from "../components/Seeds/SeedsList";
import {Footer} from "../components/Footer/Footer";

export const SeedsView = () => {
    return (
        <>
        <Logo/>
            <NavBar/>
            <SeedsList/>
            <Footer/>
        </>
    )
};