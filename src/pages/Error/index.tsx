import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import s from "./ErrorPage.module.scss";

import PikaDontKnowPng from './assets/PikaDontKnow.png';

// fullWidth:boolean; //?
// color:string; //?
// size:string; //?

const ErrorPage = () => {
    return(
        <div className={s.root}>
            <Header/>
            <div className={s.notFound}>
                <h1> 404 Not Found </h1>
            </div>    
            <div className={s.pikaDontKnow}>
                <img src={PikaDontKnowPng} alt="PikaDontKnowPng" />
            </div>
        </div>
    )
}

export default ErrorPage