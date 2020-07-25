import React from 'react';
import { Container, Input } from './styles';
import check_icon from '../../assets/check_icon.png'

const FormCheck = (props) => {
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
        {
          props.options.map(option => (
            <div key={props.options.indexOf(option)} onClick={() => props.onChange(option, props.value)}>
              {
                !props.value.includes(option) ?
                  <div></div>
                  :
                  <img src={check_icon} alt='Checked' />
              }
              <p>{option}</p>
            </div>

          ))
        }
      </Input>

    </Container>
  );
}

export default FormCheck;