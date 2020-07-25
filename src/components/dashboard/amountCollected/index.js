import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Values, ChartAndLegend, Chart, Legend} from './styles';
import PieChart from '../../pie-chart';
import blue_rect from '../../../assets/blue_rect.svg'
import green_rect from '../../../assets/green_rect.svg'
import houses_img from '../../../assets/houses_img.svg'

import { store } from '../../../store'

import { setAmount } from '../../../store/modules/dashboard/actions'

const AmountCollected = () => {

  const { cash, basic, benefits, data } = store.getState().dashboard
  const dispatch = useDispatch()
  dispatch(setAmount(data))

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const chart_data = [
    {
      "id": "amount",
      "label": 'Valor obtido',
      "formatted": `R$ ${(cash.current/1000).toFixed(0)} mil`,
      "value": cash.current,
    },
    {
      "id": "goal",
      "label": 'Faltam',
      "formatted": `R$ 800 mil`,
      "value": cash.goal - cash.current,
    },
  ] 
 
  return (
    <Container>
      <Values>
        <h1>Valor arrecadado</h1>
        <h2>{formatter.format(cash.current)}</h2>
        <h3>+{benefits.current}<span>&nbsp;pessoas beneficiadas</span></h3>
        <h4>+{basic.current}<span>&nbsp;cestas básicas doadas</span></h4>
      </Values>
      <ChartAndLegend>
        <Chart>
          <PieChart data={chart_data} />
        </Chart>
        <Legend>
          <div>
            <div>
              <img src={blue_rect} alt='Legenda' />
              <h4>Meta</h4>
            </div>
            <div>
              <img src={green_rect} alt='Legenda' />
              <h4>Valor obtido</h4>
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
