import React from "react";
import SignInSide from '../components/Forms/SignInFormMaterialUi';
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";

export const SingInView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <SignInSide/>
            <Footer/>
        </>
    )
}