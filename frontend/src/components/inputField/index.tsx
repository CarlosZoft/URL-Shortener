import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from '../button';
import OptionValid from "../optionValid";
import {days, uses} from '../../shared'
import { createUrl } from '../../api'
import './styles.scss';

function InputField(){
  const [fullUrl, setFullUrl] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFullUrl(e.target.value);
    console.log(fullUrl);
  }
  const handleSubmit =(e:any) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg" id="inputGroup">
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <FormControl value={fullUrl} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br/>
        <OptionValid typeFields={days} title="Expirar em"/>
        <OptionValid typeFields={uses} title="Maximo de usos"/>
        <Button type="submit">
          Gerar Link
        </Button>
    </form>
  )
}
export default InputField;