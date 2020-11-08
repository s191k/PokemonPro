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
                <form>
                    <p><select name="combobox_Tipo">
                        <option selected>Tipo</option>
                        {
                            ICombobox.map(({id , value}) => (
                            <option key={id}>{value}</option>
                            ))
                        }
                    </select></p>
                </form>
                <form>
                    <p><select name="combobox_Ataque">
                        <option selected>Ataque</option>
                        {
                            ICombobox.map(({id , value}) => (
                            <option key={id}>{value}</option>
                            ))
                        }
                    </select></p>
                </form>
                <form>
                    <p><select name="combobox_Experiencia">
                        <option selected>Experiencia</option>
                        {
                            ICombobox.map(({id , value}) => (
                            <option key={id}>{value}</option>
                            ))
                        }
                    </select></p>
                </form>
           </>
        )
}

export default Combobox