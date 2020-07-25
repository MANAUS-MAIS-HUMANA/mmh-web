import React from 'react';

import { Container, Neighborhood, NeighList } from './styles'
import PieChart from '../../pie-chart';

const NeighborhoodChart = () => {

  const colors = ["#7AFFB7", " #8566AA", "#3857A3", "#0D2662"]

  const data = [
    {
      "id": "Da Paz",
      "label": "Da Paz",
      "formatted": 599,
      "value": 599,
      "color": colors[0]
    },
    {
      "id": "Cidade Nova",
      "label": "Cidade Nova",
      "formatted": 201,
      "value": 201,
      "color": colors[1]
    },
    {
      "id": "Colônia Santo Antônio",
      "label": "Colônia Santo Antônio",
      "formatted": 588,
      "value": 588,
      "color": colors[2]
    },
    {
      "id": "Cidade de Deus",
      "label": "Cidade de Deus",
      "formatted": 157,
      "value": 157,
      "color": colors[3]
    },
  ]

  return (
    <Container>
      <div>
        <h4>Bairros mais beneficiados</h4>
        <span>Detalhes</span>
      </div>
      <NeighList>
        <div>
          <PieChart data={data} colors={colors} horizontalLength={10} />
        </div>
        <div>
          {
            data.map(neighb => (
              <Neighborhood key={neighb.label} color={neighb.color}>
                <div />
                <p>{neighb.label}</p>
              </Neighborhood>
            ))
          }
        </div>
      </NeighList>
    </Container>

  )
}

export default NeighborhoodChart;
