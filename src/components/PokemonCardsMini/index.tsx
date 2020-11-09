import React from 'react';
import Header from "../../components/Header";
import s from "./PokemonCardsMini.module.scss";

const PokemonCardsMini = () => {
    interface PokemonCardsMini {
        id:number,
        name:string;
        attack:number,
        defense:number;
        goodAgainst:string[];
    }
    
    const PokemonCardsMini:PokemonCardsMini[] = [
        {
          id:1,
          name:"Pachirisu",
          attack:419,
          defense:49,
          goodAgainst:["Grass","Poison"]
        },
        {
          id:2,
          name:"Pyroar",
          attack:419,
          defense:49,
          goodAgainst:["Grass","Poison"]
        },
        {
          id:3,
          name:"Pikachu",
          attack:419,
          defense:49,
          goodAgainst:["Grass","Poison"]
        },
        {
          id:4,
          name:"Quilava",
          attack:419,
          defense:49,
          goodAgainst:["Grass","Poison"]
        },
      ]
    

        return(
            <>
            <div className={s.menuWrap}>
                {
                PokemonCardsMini.map(({id,name,attack, defense,goodAgainst}) => (
                    <div>
                        <p>id - {id}</p>
                        <p>name - {name}</p>
                        <p>attack - {attack}</p>
                        <p>defense - {defense}</p>
                        <p>goodAgainst - {goodAgainst}</p>
                    </div>
                    ))
                }
        </div>
           </>
        )
}

export default PokemonCardsMini