import React from 'react';

import chlebPszenny from '../../assets/chlebPszenny.jpg';
import chleby from '../../assets/chleby.jpg';
import chlebZiarno from '../../assets/chlebZiarno.jpg';
import drozdzowe from '../../assets/drozdzowe.jpg';
import siemie from '../../assets/siemie.jpg';
import pszenny from '../../assets/pszenny.jpg';
import rogaliki from '../../assets/rogaliki.jpg';
import tortOwoceLas from '../../assets/tortOwoceLas.jpg';
import tortTofi from '../../assets/tortTofi.jpg';
import kromka from '../../assets/kromka.jpg';
import zytni from '../../assets/zytni.jpg';
import makowiec from '../../assets/makowiec.jpg';

import './Gallery.css';
import {ButtonHome} from "../common/Buttons/ButtonHome";


export const BreadGallery = () => {
    return (
        <>
            <div className="Gallery__container">
                <h1>Galeria naszych wypieków</h1>
                <h2>Pieczywo pszenne</h2>
                <div className="Gallery">
                    <div className="Gallery_item">
                        <figure>
                            <img className="Img_gallery" src={chleby} alt="Chleb pszenny"/>
                            <figcaption>Chleb pszenny</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={chlebPszenny} alt="Pszenny z siemieniem"/>
                            <figcaption>Pszenny z siemieniem</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={chlebZiarno} alt="Pszenny z sezamem"/>
                            <figcaption>Pszenny z sezamem</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={kromka} alt="Chleb pszenny"/>
                            <figcaption>Pszenny z makiem</figcaption>
                        </figure>
                    </div>
                    <h2>Pieczywo żytnie</h2>
                    <div className="Gallery_item">
                        <figure>
                            <img className="Img_gallery" src={drozdzowe} alt="Chleb żytni"/>
                            <figcaption>Chleb żytni</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={siemie} alt="Żytni z ziarnem"/>
                            <figcaption>Żytni z ziarnem</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={pszenny} alt="Żytni z sezamem"/>
                            <figcaption>Żytni z sezamem</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={zytni} alt="Chleb żytni"/>
                            <figcaption>Chleb żytni</figcaption>
                        </figure>
                    </div>
                    <h2>Torty i inne słodkości</h2>
                    <div className="Gallery_item">
                        <figure>
                            <img className="Img_gallery" src={rogaliki} alt="Rogaliki"/>
                            <figcaption>Rogaliki</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={tortOwoceLas} alt="Tort tofi"/>
                            <figcaption>Tort tofi</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={tortTofi} alt="Tort owoce leśne"/>
                            <figcaption>Tort owoce leśne</figcaption>
                        </figure>

                        <figure>
                            <img className="Img_gallery" src={makowiec} alt="Tort owoce leśne"/>
                            <figcaption>Makowiec</figcaption>
                        </figure>
                    </div>

                </div>
                <ButtonHome/>
            </div>
        </>
    )
}