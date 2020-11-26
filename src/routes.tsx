import React, { PropsWithChildren } from 'react'
import PokemonCard from './components/PokemonCard';
import EmptyPage from './pages/Empty';
import HomePage from "./pages/Home";
import PokedexPage from "./pages/Pokedex";
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
    title:string;
    link:LinkEnum;
    component: (props: PropsWithChildren<any>) => JSX.Element;

}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
} 

export const GENERAL_MENU: IGeneralMenu[] = [
    {
      title: 'HOME',
      link: LinkEnum.HOME,
      component: () => <HomePage/>
    },
    {
      title: 'Pokédex',
      link: LinkEnum.POKEDEX,
      component: () => <PokedexPage/>
    },
    {
      title: 'Legendaries',
      link: LinkEnum.LEGENDARIES,
      component: () => <EmptyPage title="Legendaries"/>
    },
    {
      title: 'Documentation',
      link: LinkEnum.DOCUMENTATION,
      component: () => <EmptyPage title="Documentation"/> 
    },
];

export const SECOND_ROUTESL: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({id}: PokemonProps) => <Pokemon id={id}/> 
  }
]

interface IAccMenu {
      [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
};

const routes = [...GENERAL_MENU, ...SECOND_ROUTESL].reduce((acc:IAccMenu,item:IGeneralMenu)=>{
    acc[item.link] = item.component;
    return acc;
  }, {})

export default routes;