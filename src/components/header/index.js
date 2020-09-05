import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from "@material-ui/core/Button";

import { Container, HeaderLeft, HeaderRight } from './styles';

import mmh_logo from '../../assets/mmh_logo.svg'

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <img src={mmh_logo} alt='Manaus Mais Humana' />
      </HeaderLeft>
      <HeaderRight>
        <NavLink to={'/login'} key={'Entrar'}>
          <Button className="button" variant="contained" color="primary">
            Acessar a sua conta
          </Button>
        </NavLink>
      </HeaderRight>
    </Container>
  )
};

export default Header;
