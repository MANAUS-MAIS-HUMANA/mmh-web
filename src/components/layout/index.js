import React from 'react';

import Menu from '../menu'
import { Container, MenuDiv, PageDiv } from './styles';


const layout = (props) => {

  return (
    <Container>
      <MenuDiv>
        <Menu />
      </MenuDiv>
      <PageDiv>
        {props.children}
      </PageDiv>
    </Container>
  )
}

export default layout;
