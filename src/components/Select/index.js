import React, { useState } from 'react';
import { Select } from '@rocketseat/unform'
import { Container } from './styles';

const FormSelect = (props) => {
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
      <Select
      name={props.name}
      onChange={onValueChange}
      options={props.options}
      value={inputValue}
      >

      </Select>
    </Container>
  );
}

export default FormSelect;
