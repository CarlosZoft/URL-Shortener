import { useState } from 'react';
import {IButtonGruop} from '../../interfaces';
import './styles.scss';


function OptionValid ({typeFields, title}: IButtonGruop){
  const [options, setOption] = useState(typeFields[0]);

  const handleChange = (e:any) => {
    setOption(e.currentTarget.value);
    console.log(options, e.target.value)
  }

  return (
    <>
    <label>{title}</label>
    <select id="dropdown-basic-button" value={options.name} onChange={handleChange}>
     {
       typeFields.map((field, index) => {
         return (
          <option key={index} value={field.value}>{field.name}</option>
         )
       })
     }
    </select>
  </>
  )

}

export default OptionValid;