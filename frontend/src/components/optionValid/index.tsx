import './styles.scss';

interface IButtonGruoup {
  typeFields: string[];
}

function OptionValid ({typeFields}: IButtonGruoup){
  return (
   <select id="dropdown-basic-button">
     {
       typeFields.map((field, index) => {
         return (
          <option key={index}>{field}</option>
         )
       })
     }
   </select>

  )

}

export default OptionValid;