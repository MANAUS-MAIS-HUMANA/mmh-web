import React, { useMemo } from 'react';

import { Container } from './styles';
import LineChart from '../../line-chart';

const ChartByMonth = (props) => {

  const byMonth = props.amountByMonth;

  const getMaxValue = (amountByMonth) => {
      if (amountByMonth && Array.isArray(amountByMonth)) {
          const onlyAmounts = amountByMonth.map(obj => obj.y);
          const maxAmount = onlyAmounts.reduce((acc, val) => Math.max(acc, val));
          return maxAmount + 1000;
      }

      return 210000;
  };

  const line_data = useMemo(() => {
    return [
      {
        "id": "mmh",
        "data": byMonth,
      },
  ];
  }
  , [byMonth])

  return (
    <Container>
      <div>
        <h4>Valor arrecadado por mês</h4>
      </div>
      <div>
        <LineChart data={line_data} maxValue={getMaxValue(byMonth)} />
      </div>
    </Container>
  );
}

export default ChartByMonth;
