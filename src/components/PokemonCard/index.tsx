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

const PokemonCard: React.FC<IPokemonCard> = ({name, attack, defense, type, img}) => {

    // const [screenX,setScreenX] = useState(0); // Нужно узнать стартовый X карточки
    // const [screenY,setScreenY] = useState(0); // Нужно узнать стартовый Y карточки

    // useEffect(()=>{
    //     const handleMouseMove = (event: MouseEvent) => {
    //         setScreenX(event.screenX);
    //         setScreenY(event.screenY);
    //     }
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove)
    // }, [screenX,screenY]);

    
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                {/* <Heading size='xs' className={s.titleName}>
                    Charmander
                </Heading> */}
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
                        {/* <span className={cn(s.label,{
                                 [s.label.bac]: link===path,
                                 })}> */}
                            {curType}</span>
                        </>
                    ))

                }
                </div>
            </div>
            <div className={s.pictureWrap}                 
                // style = {{
                //     transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`
                // }}
                >
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
