import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "../button";
import '../../components/inputField/styles.scss'
import { useRef, useState } from "react";


function OutputField (props) {
  const urlFull = props.params.endpoint;
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
            value = {(urlFull) ? "http://localhost:3030/" + urlFull : ""}
            ref={FormControlRef}
          />
      </InputGroup>
      <div>
        <Button onClick={handleCopy}>Copiar Link</Button><br/>
        {copySuccess}
      </div>
    </form>
  )
}

export default OutputField;