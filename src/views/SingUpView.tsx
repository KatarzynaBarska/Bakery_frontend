import React from 'react';
import {Logo} from "../components/Logo/Logo";
import {NavBar} from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import {SignUpForm} from "../components/Forms/SignUpForm";


export const SingUpView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <h1>Formularz rejestracyjny</h1>
            <SignUpForm/>
            <Footer/>
        </>
    );
};