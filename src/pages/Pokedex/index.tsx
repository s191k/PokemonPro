import React from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";
import PokemonCardsMini from "../../components/PokemonCardsMini";

import s from "./Pokedex.module.scss";

import {pokemons} from "../../data/pokemons"
import PokemonCard from '../../components/PokemonCard';

const PokedexPage = () => {
    return(
        <>
        <div>
            <Header/>
        </div>
        <p>800 Pokemons for you to choose your favorite</p>
        <input type="search" aria-label="Encuentra tu pokémon..."></input>
        <Combobox/>
        {/* <PokemonCardsMini/> */}
        
        {/* <form>
                    <p><select name="combobox_Tipo">
                        <option selected>Tipo</option>
                        {
                            ICombobox.map(({id , value}) => (
                            <option key={id}>{value}</option>
                            ))
                        }
                    </select></p>
                </form> */}

        {
            pokemons.map(({name,stats,types,img}) => (

              <div>
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


        </>
    )
}

export default PokedexPage