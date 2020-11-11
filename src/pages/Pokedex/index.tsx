import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";
// import PokemonCardsMini from "../../components/PokemonCardsMini";

import s from "./Pokedex.module.scss";

import {pokemons} from "../../data/pokemons"
import PokemonCard from '../../components/PokemonCard';
import LoadingPage from '../Loading';
import NotFoundPage from '../NotFoundPage';


const usePokemons = () => {
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async() => {
            setIsLoading(true);
            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=100');
                const result = await response.json();
                
                console.log(result)

                setData(result);

            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, []);

    return {
        data,
        isLoading,
        isError
    }
}

const PokedexPage = () => {
    const {
        data,
        isLoading,
        isError
    } = usePokemons();
    console.log(data);

    if (isLoading) { return  <LoadingPage/>}
    if (isError) { return <NotFoundPage/>}

    return(
        <>
        <div>
            <Header/>
        </div>
        <div className={s.title}>
                {data.totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </div>
        <input type="search" aria-label="Encuentra tu pokémon..." className={s.search_field}></input>
        <Combobox/>
        <div className={s.pokemons_block}>
            {
                    data.pokemons.map(({name,stats,types,img}) => (
                        // TODO Add key ?
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