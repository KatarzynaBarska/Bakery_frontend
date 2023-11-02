import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import {SeedsList} from "../components/Seeds/SeedsList";

export const OrderView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <SeedsList/>
            <Footer/>
        </>
    )
};