import React from 'react';
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import SignUp from "../components/Forms/SignUpFormMaterialUi";

export const SingUpView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <SignUp/>
            <Footer/>
        </>
    );
};