import React from 'react';
import Header from '../../components/Header';

export interface PokemonProps {
    id: string|number;
}

const Pokemon:React.FC<PokemonProps> =({id}) =>{
    return (
        <>
        <Header/>
        <div>
            This is pokemon id == {id}
        </div>
        </>
    )
}

export default Pokemon;