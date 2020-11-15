import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";

import s from "./Pokedex.module.scss";
import PokemonCard from '../../components/PokemonCard';
import LoadingPage from '../Loading';
import NotFoundPage from '../NotFoundPage';

import Pagination from 'react-bootstrap/Pagination'

const usePokemons = () => {
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getPokemons = async()=> {
            setIsLoading(true);
            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=1050');
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



// const PokedexPage = () => {
const PokedexPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);

    const {
        data,
        isLoading,
        isError
    } = usePokemons();

    console.log(data);
    if (isLoading) { return  <LoadingPage/>}
    if (isError) { return <NotFoundPage/>}


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPokemons = data.pokemons.slice(indexOfFirstPost, indexOfLastPost);
    

    return(
        <>
        <div>
            <Header/>
        </div>
        <div className={s.title}>
                {data.total} <b>Pokemons</b> for you to choose your favorite
        </div>
        <input type="search" aria-label="Encuentra tu pokémon..." className={s.search_field}></input>
        
        <Combobox/>

        
        <div className={s.pokemons_block}>
            {
                currentPokemons.map(({name,stats,types,img}) => (
                        // TODO Add key ?
                <div className={s.inline}>
                    <PokemonCard
                    name = {name}
                    attack = {stats.attack}
                    defense  = {stats.defense}
                    type = {types}
                    img={img}
                    key= {name}
                    />
                </div>  
                ))
            }
        </div>    


        <div className={s.pagination}>
            
            <label className={s.pagination_page}  onClick={()=> {  setCurrentPage(1); }}>
                First Page
            </label>
            
            <label className={s.pagination_page}  onClick={()=>{ if (currentPage > 1 ) setCurrentPage(currentPage - 1)}}>
               {currentPage - 1}
            </label>
            
            <label className={s.pagination_page}>
               {currentPage}
            </label> 

            <label className={s.pagination_page}  onClick={()=> { if (currentPage < Math.round(data.total / postPerPage) ) setCurrentPage(currentPage + 1)}}>
               {currentPage + 1}
            </label>
            
            <label className={s.pagination_page}  onClick={()=> {  setCurrentPage(Math.round(data.total / postPerPage)); }}>
                Last Page
            </label>
            
        </div>

        </>
    )
}

export default PokedexPage