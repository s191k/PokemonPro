import React, { useEffect, useState } from 'react';
// import Heading from "../Heading";

import s from './PokemonCard.module.scss';

interface IPokemonTypes {
    [key: string]: string;
  }

const pokemonTypes:IPokemonTypes = {
    'water':'#00BFFF',
    'fire':'#B33327',
    'grass':'#64D368',
    'poison':'#8B008B',
    'bug':'#D2691E',
    'normal':'#FDFDFD',
    'flying':'#00FFFF',
    'ground':'#8B0000',
    'fairy':'#FFC0CB',
    'psychic':'#00BFFF',
    'fighting':'#00BFFF',
    'ice':'#00BFFF',
    'rock':'#00BFFF',
    'electric':'#F5DB13',
    'steel':'#C0C0C0',
}

interface IPokemonCard {
    name:string,
    attack:number,
    defense:number,
    type:string[],
    img:string,
}

// TODO -- можно передавать просто весь объект одного покемона сюда)
// + нужно display: flex и flex-wrap: wrap задать
const PokemonCard: React.FC<IPokemonCard> = ({name, attack, defense, type, img}) => {
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <div className={s.titleName}>{name}</div>

                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                {
                    type.map((curType) => (
                        <>
                        <span className={s.label}
                              style={{
                                background: pokemonTypes[curType]
                              }}>
                            {curType}</span>
                        </>
                    ))

                }
                </div>
            </div>
            <div className={s.pictureWrap}                 
                style={{
                    background: pokemonTypes[type[0]],
                  }}
                >
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
