import React from 'react';
import s from "./Button.module.scss";

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
    fullWidth?:boolean; //?
    color?:string; //?
    size?:string; //?
}


const Button:React.FC<ButtonProps> = ({children, onClick,fullWidth,color,size}) => {
    return(
        <button type='button'
        className={s.root}
        onClick={onClick}
        // fullWidth={fullWidth}
        // color={color}
        // size={size}
        >
            {children}
        </button>
    )
}

export default Button