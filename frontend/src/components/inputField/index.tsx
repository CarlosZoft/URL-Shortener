import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from '../button';
import OptionValid from "../optionValid";
import {days, uses} from '../../shared'
import { createUrl } from '../../api'
import './styles.scss';

function InputField(){
  const [fullUrl, setFullUrl] = useState('');
  const [validDays, setValidDays] = useState(days[0]);
  const [validAcess, setValidAcess] = useState(uses[0]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFullUrl(e.target.value);
  }
  const changeDays = (e:any) => {
    setValidDays(e.target.value);
  }
  const changeUses = (e:any) => {
    setValidAcess(e.target.value);
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await createUrl({
      fullUrl,
      validAcess: validAcess.value,
      validDays: validDays.value
    })
    console.log(response);
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg" id="inputGroup">
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <FormControl value={fullUrl} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br/>
        <OptionValid typeFields={days} title="Expirar em" change={changeDays} value = {validDays.value}/>
        <OptionValid typeFields={uses} title="Maximo de usos" change={changeUses} value = {validAcess.value}/>
        <Button type="submit">
          Gerar Link
        </Button>
    </form>
  )
}
export default InputField;