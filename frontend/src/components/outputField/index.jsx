import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "../button";
import '../../components/inputField/styles.scss'
import { useRef, useState } from "react";


function OutputField (props) {
  const [copySuccess, setCopySuccess] = useState('');
  const FormControlRef = useRef(null);

  const handleCopy = (e) => {
    FormControlRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  }
  return (
    <form>
       <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-sm">Nova URL</InputGroup.Text>
          <FormControl 
            aria-label="Large" 
            aria-describedby="inputGroup-sizing-sm" 
            value ={props.params.endpoint}
            ref={FormControlRef}
          />
      </InputGroup>
      <Button onClick={handleCopy}>Copiar Link</Button>
    </form>
  )
}

export default OutputField;