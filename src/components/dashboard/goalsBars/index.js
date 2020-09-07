import React from 'react';

import { Container, Bar } from './styles';

const GoalsBars = (props) => {

  const data = [
    {
      label: 'Ajudar mais de 40 mil famílias',
      status: props.benefitedPeople,
      goal: props.targetBenefitedPeople,
    },
    {
      label: 'Doar mais de 10 mil cestas',
      status: props.basicBasketsDonated,
      goal: props.targetBasicBaskets,
    },
    {
      label: 'Arrecadar 670 mil',
      status: props.collectedAmount,
      goal: props.targetCollectedAmount,
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
