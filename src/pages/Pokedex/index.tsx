import React, { useEffect, useMemo, useState } from 'react';
import Header from "../../components/Header";
import Combobox from "../../components/Combobox";

import s from "./Pokedex.module.scss";
import PokemonCard from '../../components/PokemonCard';
import LoadingPage from '../Loading';
import NotFoundPage from '../NotFoundPage';

import getData from '../../hook/getData';
import { IPokemons } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
    name?: string;
    limit?: number,
}

const PokedexPage = () => {
    const totalAmountOfPokemons = 1050;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('');
    const [query, setQuery] = useState<IQuery>({limit:totalAmountOfPokemons}); //1050 - Общее кол-во покемонов

    const debouncedValue = useDebounce(searchValue, 500);

    const {
        data,
        isLoading,
        isError
    } = getData<IPokemons>('getPokemons', query, [debouncedValue,searchType]);

    console.log(data);
    if (isLoading) { return  <LoadingPage/>}
    if (isError) { return <NotFoundPage/>}

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(1);
        setSearchValue(e.target.value);
        setQuery((state:IQuery) => ({
            ...state, 
            name: e.target.value,
            // limit: totalAmountOfPokemons, 
        }))
        console.log(query)
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(1);
        console.log(query)
        setSearchType(e.target.value)
        setQuery((state:IQuery) => ({
            ...state, 
            types: e.target.value,
            // limit: totalAmountOfPokemons, 
        }))
    }
    
    console.log(query)


    // TODO :: Сделать ползунок 1-12 для кол-ва отображаемых покемонов

    // TODO :: Нужно понять, почему при удалении из строки не обновляется пагинация ??? 
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPokemons = data.pokemons.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <>
        <div>
            <Header/>
        </div>
        <div className={s.title}>
                {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </div>
        <input autoFocus type="search" aria-label="Encuentra tu pokémon..." className={s.search_field} value={searchValue} onChange={handleSearchChange}/>
        
        <Combobox handleChange={handleTypeChange} />

        
        <div className={s.pokemons_block}>
            {
                currentPokemons.map(({name,stats,types,img}) => (
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
            
            {
            (data.pokemons.length/12) > 1 &&
            <label className={s.pagination_page}  onClick={()=> {  setCurrentPage(1); }}>
                First Page
            </label>
            }

            {
                (data.pokemons.length/12) > 2 && 
                (currentPage > 1) &&
                <label className={s.pagination_page}  onClick={()=>{ if (currentPage > 1 ) setCurrentPage(currentPage - 1)}}>
                {currentPage - 1}
                </label>
            }

            <label className={s.pagination_page}>
               CurPage ::: {currentPage}
            </label> 

            {
            (data.pokemons.length/12) > 2 &&
            (currentPage < Math.round(data.pokemons.length / postPerPage)) &&
            <label className={s.pagination_page}  onClick={()=> { if (currentPage < Math.round(data.pokemons.length / postPerPage) ) setCurrentPage(currentPage + 1)}}>
               {currentPage + 1}
            </label>
            }

            {
            (data.pokemons.length/12) > 1 &&
            <label className={s.pagination_page}  onClick={()=> {  setCurrentPage(Math.round(data.pokemons.length / postPerPage)); }}>
                Last Page
            </label>
            }

        </div>

        </>
    )
}

export default PokedexPage