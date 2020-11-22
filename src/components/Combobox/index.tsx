import React from 'react';
import Header from "../../components/Header";
import s from "./Combobox.module.scss";


interface ICombobox {
    id:number,
    value?:string;
    name?:string;
    colour?:string;
}

const ICombobox:ICombobox[] = [
    {
      id:1,
      value: 'HOME',
    },
    {
      id:2,
      value: 'Pokédex',
    },
    {
      id:3,
      value: 'Legendaries',
    },
    {
      id:4,
      value: 'Documentation',
    },
  ]

export const pokemonTypes:ICombobox[] = [
    {
        id:1,
        name: 'water',
        colour: '#00BFFF',
      },
    {
        id:2,
        name: 'fire',
        colour: '#B33327',
    },
    {
        id:3,
        name: 'grass',
        colour: '#64D368',
      },
    {
        id:4,
        name: 'poison',
        colour: '#8B008B',
    }, 
    {
        id:5,
        name: 'normal',
        colour: '#D2691E',
      },
    {
        id:6,
        name: 'flying',
        colour: '#FDFDFD',
    }, 
    {
        id:7,
        name: 'ground',
        colour: '#00FFFF',
   },
    {
        id:8,
        name: 'fairy',
        colour: '#8B0000',
    }, 
    {
        id:9,
        name: 'psychic',
        colour: '#FFC0CB',
      },
    {
        id:10,
        name: 'fighting',
        colour: '#00BFFF',
    },   
    {
        id:11,
        name: 'ice',
        colour: '#00BFFF',
      },
    {
        id:12,
        name: 'rock',
        colour: '#00BFFF',
    }, 
    {
        id:13,
        name: 'electric',
        colour: '#F5DB13',
      },
    {
        id:14,
        name: 'steel',
        colour: '#C0C0C0',
    }, 
]

// const Combobox = (handleChange:Function)  => {
const Combobox = ({handleChange})  => {

        let curBoxName = "Type";

        return(
            <>
                <div className={s.center}>
                    <form className={s.form}>
                        {/* <p><select name="combobox_Tipo" className={s.select} onChange={() => {handleChange ; ()=>{}} }> */}
                        <p><select name="combobox_Tipo" className={s.select} onChange={handleChange}>
                            <option selected className={s.option}>{curBoxName}</option>
                            {
                                pokemonTypes.map(({id , name}) => (
                                <option key={id} className={s.option}>{name}</option>
                                ))
                            }
                        </select></p>
                    </form>
                    {/* <form className={s.form}>
                        <p><select name="combobox_Ataque" className={s.select}>
                            <option selected className={s.option}>Attack</option>
                            {
                                ICombobox.map(({id , value}) => (
                                <option key={id} className={s.option}>{value}</option>
                                ))
                            }
                        </select></p>
                    </form>
                    <form className={s.form}>
                        <p><select name="combobox_Experiencia" className={s.select}>
                            <option selected className={s.option}>Experience</option>
                            {
                                ICombobox.map(({id , value}) => (
                                <option key={id} className={s.option}>{value}</option>
                                ))
                            }
                        </select></p>
                    </form> */}
                </div>
           </>
        )
}

export default Combobox