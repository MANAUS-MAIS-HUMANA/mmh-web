import React from 'react';

import Menu from '../menu';
import Header from '../header';
import {
  AuthenticatedContainer,
  UnauthenticatedContainer,
  MenuDiv,
  HeaderDiv,
  PageDiv,
} from './styles';

import { isAuthenticated } from "../../services/auth";

const layout = (props) => {

  return (
    isAuthenticated() ?
      <AuthenticatedContainer>
        <MenuDiv>
          <Menu />
        </MenuDiv>
        <PageDiv>
          {props.children}
        </PageDiv>
      </AuthenticatedContainer>
    :
      <UnauthenticatedContainer>
        <HeaderDiv>
          <Header />
        </HeaderDiv>
        <PageDiv>
          {props.children}
        </PageDiv>
      </UnauthenticatedContainer>
  )
}

export default layout;
