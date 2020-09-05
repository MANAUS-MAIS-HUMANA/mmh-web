import React from 'react';

import { Container, DateField } from './styles';

import { isAuthenticated } from "../../../services/auth";

const DashboardHeader = () => {

  return (
    <Container>
      { isAuthenticated() ? <h2>Dashboard</h2> : <h2>Manaus Mais Humana</h2>}
      <DateField>

      </DateField>
    </Container>
  )
}

export default DashboardHeader;
