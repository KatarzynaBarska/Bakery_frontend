import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import {BasesList} from "../components/Bases/BasesList";


export const OrderView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <BasesList/>
            <Footer/>
        </>
    )
};