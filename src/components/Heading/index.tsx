import React from 'react';
import s from "./Heading.module.scss";

const Heading = () => {

    interface IMENU {
        id:number,
        value:string,
        link:string,
      }
      
      const MENU:IMENU[] = [
        {
          id:1,
          value: 'HOME',
          link: '#',
        },
        {
          id:2,
          value: 'Pokédex',
          link: 'Pokedex',
        },
        {
          id:3,
          value: 'Legendaries',
          link: 'Legendaries',
        },
        {
          id:4,
          value: 'Documentation',
          link: 'Documentation',
        },
      ]

    return(
        <div className={s.menuWrap}>
        {
          MENU.map(({value,link, id}) => (
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))
        }
      </div>
    )
}

export default Heading