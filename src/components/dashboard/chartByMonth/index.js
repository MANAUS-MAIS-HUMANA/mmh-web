import React, { useMemo } from 'react';

import { Container } from './styles';
import LineChart from '../../line-chart';

import { store } from '../../../store'

const ChartByMonth = () => {

  const { byMonth } = store.getState().dashboard

  const line_data = useMemo(() => 
    [
      {
        "id": "mmh",
        "data": byMonth,
      },
    ]
  , [byMonth]) 

  return (
    <Container>
      <div>
        <h4>Valor arrecadado por mês</h4>
        <span>Detalhes</span>
      </div>
      <div>
        <LineChart data={line_data} />
      </div>
    </Container>
  );
}

export default ChartByMonth;