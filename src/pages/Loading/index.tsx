import React from 'react';
import s from "./LoadingPage.module.scss";
import slowpoke from './assets/slowpoke.png';
import Button from "../../components/Button";
import {navigate} from 'hookrouter'
import { LinkEnum } from '../../routes';

const LoadingPage = () => {
    return(
        <>
            <div className={s.red_background}>
                <div className={s.img}>
                    <img src={slowpoke} alt="Team_Rocket_trio" />
                </div>
                <div className={s.form_loading }>
                    <div className={s.text_loading }>
                        <h1>
                            Loading
                        </h1>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default LoadingPage