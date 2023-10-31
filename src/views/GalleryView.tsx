import React from 'react';
import {BreadGallery} from "../components/Gallery/Gallery";
import {NavBar} from "../components/NavBar/NavBar";
import {Logo} from "../components/Logo/Logo";
import {Footer} from "../components/Footer/Footer";

export const GalleryView = () => {
    return (
        <>
            <Logo/>
            <NavBar/>
            <BreadGallery/>
            <Footer/>
        </>
    )
}