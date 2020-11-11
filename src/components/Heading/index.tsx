import { A, usePath } from 'hookrouter';
import React from 'react';
import s from "./Heading.module.scss";
import { GENERAL_MENU } from "../../routes"
import cn from 'classNames';

const Heading = () => {

    const path = usePath();


    return(
        <div className={s.menuWrap}>
        
        {
          GENERAL_MENU.map(({title, link}) => (
            <A key={title} href={link} 
            className={cn(s.menuLink,{
              [s.activeLink]: link===path,
            })}>
              {title}
            </A>
          ))
        }

      </div>
    )
}

export default Heading