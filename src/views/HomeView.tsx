import React from "react";
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {HomeLink} from "../components/HomeLink/HomeLink";


export const HomeView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <HomeLink/>

        </>
    )
}