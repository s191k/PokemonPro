import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import s from "./Home.module.scss";
import {navigate} from 'hookrouter';
import { LinkEnum } from '../../routes';

const HomePage = () => {
    return(
        <div className={s.root}>
            <Header/>
            {/* <Layout className={s.contentWrap}/> */}
                <div className={s.contentText}>
                    <div className={s.contentText_first}>
                        <h1>
                            <b>Find</b> all your favorite <b>Pokemons</b>
                        </h1>
                    </div>

                    <div  className={s.contentText_second}>
                        <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
                    </div>
                    <div className={s.button}>
                        <Button onClick={()=> navigate(LinkEnum.POKEDEX)}
                            fullWidth={false}
                            color='color??'
                            size='size??'
                        >
                            See Pokemons
                        </Button>
                    </div>
                </div>    


                <div className={s.contentParallax}>
                    <Parallax/>
                </div>
        </div>
    )
}

export default HomePage