import React from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";
import PokemonCardsMini from "../../components/PokemonCardsMini";

import s from "./Pokedex.module.scss";


const PokedexPage = () => {
    return(
        <>
        <div>
            <Header/>
        </div>
        <p>800 Pokemons for you to choose your favorite</p>
        <input type="search" aria-label="Encuentra tu pokémon..."></input>
        <Combobox/>
        <PokemonCardsMini/>
        </>
    )
}

export default PokedexPage