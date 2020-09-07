import React from 'react';

import { Container, Values, ChartAndLegend, Chart, Legend} from './styles';
import PieChart from '../../pie-chart';
import blue_rect from '../../../assets/blue_rect.svg'
import green_rect from '../../../assets/green_rect.svg'
import houses_img from '../../../assets/houses_img.svg'

const AmountCollected = (props) => {

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const chart_data = [
    {
      "id": "amount",
      "label": 'Total de cestas obtidas',
      "formatted": `${props.basicBasketsDonated}`,
      "value": props.basicBasketsDonated,
    },
    {
      "id": "goal",
      "label": 'Faltam',
      "formatted": `${props.targetBasicBaskets}`,
      "value": props.targetBasicBaskets - props.basicBasketsDonated,
    },
  ]

  return (
    <Container>
      <Values>
        <h1>Valor arrecadado</h1>
        <h2>{formatter.format(props.collectedAmount)}</h2>
        <h3>+{props.benefitedPeople}<span>&nbsp;pessoas beneficiadas</span></h3>
        <h3>+{props.basicBasketsDonated}<span>&nbsp;cestas básicas doadas</span></h3>
      </Values>
      <ChartAndLegend>
        <Chart>
          <PieChart data={chart_data} />
        </Chart>
        <Legend>
          <div>
            <div>
              <img src={blue_rect} alt='Legenda' />
              <h4>Meta de cestas</h4>
            </div>
            <div>
              <img src={green_rect} alt='Legenda' />
              <h4>Total de cestas obtidas</h4>
            </div>
          </div>
          <div>
            <img src={houses_img} alt='Casas' />
          </div>
        </Legend>
      </ChartAndLegend>

    </Container>
  )
}

export default AmountCollected;
