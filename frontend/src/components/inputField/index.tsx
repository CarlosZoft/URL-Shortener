import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { validURL } from '../../validation/urlValidation';
import { Button } from '../button';
import OptionValid from "../optionValid";
import { days, uses } from '../../shared'
import { createUrl } from '../../api'
import {useHistory} from 'react-router-dom';
import './styles.scss';

function InputField(props: any){
  const [fullUrl, setFullUrl] = useState('');
  const [validDays, setValidDays] = useState(days[0].value);
  const [validAcess, setValidAcess] = useState(uses[0].value);
  let shortUrl = '';
  let history = useHistory();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value);
  
  const changeDays = (e:any) => setValidDays(e.target.value);
  
  const changeUses = (e:any) => setValidAcess(e.target.value);

 
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(validURL(fullUrl)){
      const { data } = await createUrl({
        fullUrl,
        validAcess: validAcess,
        validDays: validDays
      })
      shortUrl = data.shortUrl;
      history.push('/show/'+ shortUrl);
      return
    }
    alert("Informe uma URL válida!");
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg" id="inputGroup">
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <FormControl value={fullUrl} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br/>
        <OptionValid typeFields={days} title="Expirar em" change={changeDays} value = {validDays}/>
        <OptionValid typeFields={uses} title="Maximo de usos" change={changeUses} value = {validAcess}/>
        <Button type="submit" disabled={!fullUrl}>
            Gerar Link
        </Button>
    </form>
  )
}
export default InputField;