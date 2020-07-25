import React from 'react';
import { Input } from '@rocketseat/unform'
import { Container } from './styles';

const FormInput = (props) => {
  return (
    <Container>
      <label>{props.label}<span>{props.required? ' *' : ''}</span></label>
      <Input 
      name={props.name} 
      placeholder={props.placeholder} 
      type={props.type}
      pattern={props.pattern} 
      onChange={props.onChange}
      />
    </Container>
  );
}

export default FormInput;