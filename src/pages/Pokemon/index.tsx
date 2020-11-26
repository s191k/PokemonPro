import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
import LoadingPage from '../Loading';
import s from "./Pokemon.module.scss";

export interface PokemonProps {
    id: string|number;
}

const Pokemon:React.FC<PokemonProps> =({id}) =>{

    const {data, isLoading} = useData<PokemonsRequest>('getPokemon',{id})
    if (isLoading) { return  <LoadingPage/>}

    return (
        <>
        <Header/>

       <div>
            {
                <div className={s.card}>
                    <PokemonCard
                    name = {data.name}
                    attack = {data.stats.attack}
                    defense  = {data.stats.defense}
                    type = {data.types}
                    img={data.img}
                    key= {data.name}
                    />
                </div>  
            }
        </div>  
        </>
    )
}

export default Pokemon;