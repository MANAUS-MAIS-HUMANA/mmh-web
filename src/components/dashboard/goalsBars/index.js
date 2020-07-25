import React from 'react';

import { Container, Bar } from './styles';
import { store } from '../../../store'

const GoalsBars = () => {

  const { cash, basic, benefits } = store.getState().dashboard

  const data = [
    {
      label: 'Ajudar mais de 500 famílias',
      status: benefits.current,
      goal: benefits.goal,
    },
    {
      label: 'Doar mais de 1500 cestas',
      status: basic.current,
      goal: basic.goal,
    },
    {
      label: 'Arrecadar 800 mil',
      status: (cash.current/1000).toFixed(0),
      goal: (cash.goal/1000).toFixed(0),
    },
  ]

  return (
    <Container>
      <h1>Nossas metas para 2020</h1>
      <div>
        {
          data.map(item => (
            <Bar key={data.indexOf(item)} width={(item.status/item.goal).toFixed(2)*100} >
              <div>
                <label>{item.label}</label>
                <h4>{`${item.status}/${item.goal}`}</h4>
              </div>
              <div>
                <div />
              </div>
            </Bar>
          ))
        }
      </div>
    </Container>
  )
}

export default GoalsBars;
