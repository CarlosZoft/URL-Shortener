import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import OptionValid from "../optionValid";

function InputField(){
  return (
    <>
      <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br/>
      <OptionValid typeFields={['1','5','10','15']} title="Quantidade de dias"/>
      <br/>
      <OptionValid typeFields={['ilimitado','10','15','500']} title="Quantidade de acessos"/>
      <br/>
      <Button variant="success" size="lg">Gerar</Button>{''}
    </>
  )
}
export default InputField;