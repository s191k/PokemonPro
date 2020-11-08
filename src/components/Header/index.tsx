import React from 'react';
import s from './Header.module.scss';
import {ReactComponent as PokemonLogoSvg} from './assets/Logo.svg'
import Heading from '../Heading'

const Header = () => {
  return (
    <div className={s.root}>
        <div className={s.wrap}>
          <div className={s.pokemonLogo}>
            <PokemonLogoSvg/>
          </div>
           <Heading/>
        </div>
    </div>
  )
};

export default Header;
