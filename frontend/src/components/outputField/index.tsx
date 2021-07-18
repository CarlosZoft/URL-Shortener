import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "../button";
import '../../components/inputField/styles.scss'


function OutputField () {
  const handleSubmit =(e:any) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <form onSubmit={handleSubmit}>
       <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-sm">Nova URL</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
      </InputGroup>
      <Button type="submit">Copiar Link</Button>
    </form>
  )
}

export default OutputField;