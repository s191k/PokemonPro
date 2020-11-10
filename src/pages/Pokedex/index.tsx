import React from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";
// import PokemonCardsMini from "../../components/PokemonCardsMini";

import s from "./Pokedex.module.scss";

import {pokemons} from "../../data/pokemons"
import PokemonCard from '../../components/PokemonCard';

const PokedexPage = () => {
    return(
        <>
        <div>
            <Header/>
        </div>
        <div className={s.title}>
            800 <b>Pokemons</b> for you to choose your favorite
        </div>
        <input type="search" aria-label="Encuentra tu pokémon..." className={s.search_field}></input>
        <Combobox/>
        <div className={s.pokemons_block}>
            {
                pokemons.map(({name,stats,types,img}) => (

                <div className={s.inline}>
                    <PokemonCard
                    name = {name}
                    attack = {stats.attack}
                    defense  = {stats.defense}
                    type = {types}
                    img={img}
                    />
                </div>  
                ))
            }
        </div>    


        </>
    )
}

export default PokedexPage