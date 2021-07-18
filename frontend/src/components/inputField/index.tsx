import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from '../button';
import OptionValid from "../optionValid";
import './styles.scss';

function InputField(){
  return (
    <>
      <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br/>
      <label>Quantidade de dias</label>
      <OptionValid typeFields={['1','5','10','15']}/>
      <label>Quantidade de acessos</label>
      <OptionValid typeFields={['5, 10','15','500']}/>
      <Button text="Gerar Link"></Button>
      
    </>
  )
}
export default InputField;