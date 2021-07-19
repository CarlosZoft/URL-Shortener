import {IButtonGruop} from '../../interfaces';
import './styles.scss';


function OptionValid ({value, change, typeFields, title}: IButtonGruop){

  return (
    <>
    <label>{title}</label>
    <select id="dropdown-basic-button" value={value} onChange={change}>
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