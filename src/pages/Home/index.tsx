import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import s from "./Home.module.scss";
import {navigate} from 'hookrouter';

const HomePage = () => {
    return(
        <div className={s.root}>
            <Header/>
            {/* <Layout className={s.contentWrap}/> */}
                <div className={s.contentText}>
                    <h1>
                        <b>Find</b> all your favorite <b>Pokemons</b>
                    </h1>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button onClick={()=> navigate('/pokedex')}
                        fullWidth={false}
                        color='color??'
                        size='size??'
                    >
                        See Pokemons
                    </Button>
                </div>    
                <div className={s.contentParallax}>
                    <Parallax/>
                </div>
        </div>
    )
}

export default HomePage