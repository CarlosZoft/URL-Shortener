import {Dropdown, DropdownButton} from 'react-bootstrap'

interface IButtonGruoup {
  typeFields: string[];
  title : string;
}

function OptionValid ({typeFields, title}: IButtonGruoup){
  return (
   <DropdownButton id="dropdown-basic-button" title={title}>
     {
       typeFields.map((field) => {
         return (
          <Dropdown.Item eventKey={field}>{field}</Dropdown.Item>
         )
       })
     }
   </DropdownButton>

  )

}

export default OptionValid;