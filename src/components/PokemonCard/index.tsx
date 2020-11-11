import React, { useEffect, useState } from 'react';
// import Heading from "../Heading";

import s from './PokemonCard.module.scss';

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
                        <span className={s.label}>
                            {curType}</span>
                        </>
                    ))

                }
                </div>
            </div>
            <div className={s.pictureWrap}                 
                >
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
