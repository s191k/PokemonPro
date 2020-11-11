import React from 'react';
import s from "./NotFoundPage.module.scss";
import Team_Rocket_trio from './assets/Team_Rocket_trio.png';
import Button from "../../components/Button";
import {navigate} from 'hookrouter'
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
    return(
        <>
            <div className={s.red_background}>
                <div className={s.trio}>
                    <img src={Team_Rocket_trio} alt="Team_Rocket_trio" />
                </div>
                <div className={s.form_404}>
                    <div className={s.text_404}>
                        <h1>
                            404
                        </h1>
                    </div>
                </div>    
                <div className={s.text}>
                    <h1>
                        The rocket team has won this time.
                    </h1>
                </div>
                <Button onClick={()=> navigate(LinkEnum.HOME)} 
                        fullWidth={false}
                        color='color??'
                        size='size??'
                    >
                        Back to Home page
                    </Button>
            </div>
        </>
    )
}

export default NotFoundPage