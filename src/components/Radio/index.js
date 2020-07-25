import React from 'react';
import { Container, Input } from './styles';
import check_icon from '../../assets/check_icon.png'

const FormRadio = (props) => {
  return (
    <Container>
      <label>{props.label}<span>{props.required ? ' *' : ''}</span></label>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        pattern={props.pattern}
        onChange={props.onChange}
        value={props.value}
      >
        <div onClick={() => props.onChange(true)}>
        {
            !props.value?
            <div></div>
            :
            <img src={check_icon} alt='Checked' />
          }
          <p>{props.options[0]}</p>
        </div>
        <div onClick={() => props.onChange(false)}>
          {
            props.value?
            <div></div>
            :
            <img src={check_icon} alt='Checked' />
          }
          <p>{props.options[1]}</p>
        </div>
      </Input>

    </Container>
  );
}

export default FormRadio;