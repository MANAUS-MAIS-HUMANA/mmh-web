import React from 'react';
import { Select } from '@rocketseat/unform'
import { Container } from './styles';

const FormSelect = (props) => {
  return (
    <Container>
      <label>{props.label}<span>{props.required? ' *' : ''}</span></label>
      <Select 
      name={props.name}   
      onChange={props.onChange}
      options={props.options}
      >
        
      </Select>
    </Container>
  );
}

export default FormSelect;