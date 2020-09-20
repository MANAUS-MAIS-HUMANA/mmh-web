import React, { useState } from 'react';
import { Input } from '@rocketseat/unform'
import { Container } from './styles';

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState();
  const [isFirstTime, setFirstTime] = useState(true);

  if (isFirstTime && props.value) {
    setInputValue(props.value);
    setFirstTime(false);
  }

  const onValueChange = event => {
    if (props.onChange) {
      props.onChange(event);
    }

    setInputValue(event.target.value);
    setFirstTime(false);
  };

  return (
    <Container>
      <label>{props.label}<span>{props.required? ' *' : ''}</span></label>
      <Input
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      pattern={props.pattern}
      onChange={onValueChange}
      value={inputValue}
      />
    </Container>
  );
}

export default FormInput;
