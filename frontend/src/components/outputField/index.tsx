import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "../button";



function OutputField () {
  return (
    <>
       <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-sm">Nova URL</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
      </InputGroup>
      <Button text="Copiar Link"/>
    </>
  )
}

export default OutputField;