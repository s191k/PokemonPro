import React from 'react';
import Header from "../../components/Header";
import s from "./Combobox.module.scss";

const Combobox = () => {
    interface ICombobox {
        id:number,
        value:string;
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
    

        return(
            <>
                <br/>
                <div className={s.center}>
                    <form className={s.form}>
                        <p><select name="combobox_Tipo" className={s.select}>
                            <option selected className={s.option}>Tipo</option>
                            {
                                ICombobox.map(({id , value}) => (
                                <option key={id} className={s.option}>{value}</option>
                                ))
                            }
                        </select></p>
                    </form>
                    <form className={s.form}>
                        <p><select name="combobox_Ataque" className={s.select}>
                            <option selected className={s.option}>Ataque</option>
                            {
                                ICombobox.map(({id , value}) => (
                                <option key={id} className={s.option}>{value}</option>
                                ))
                            }
                        </select></p>
                    </form>
                    <form className={s.form}>
                        <p><select name="combobox_Experiencia" className={s.select}>
                            <option selected className={s.option}>Experiencia</option>
                            {
                                ICombobox.map(({id , value}) => (
                                <option key={id} className={s.option}>{value}</option>
                                ))
                            }
                        </select></p>
                    </form>
                </div>
           </>
        )
}

export default Combobox