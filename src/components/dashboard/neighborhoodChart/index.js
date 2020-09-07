import React from 'react';

import { Container, Neighborhood, NeighList } from './styles'
import PieChart from '../../pie-chart';

const NeighborhoodChart = (props) => {

  const data = [
    {
      "id": "centro_oeste",
      "label": "Centro-Oeste",
      "formatted": props.donationsByZone.centro_oeste,
      "value": props.donationsByZone.centro_oeste,
      "color": '#7AFFB7',
    },
    {
      "id": "centro_sul",
      "label": "Centro-Sul",
      "formatted": props.donationsByZone.centro_sul,
      "value": props.donationsByZone.centro_sul,
      "color": '#8566AA',
    },
    {
      "id": "leste",
      "label": "Leste",
      "formatted": props.donationsByZone.leste,
      "value": props.donationsByZone.leste,
      "color": '#3857A3',
    },
    {
      "id": "norte",
      "label": "Norte",
      "formatted": props.donationsByZone.norte,
      "value": props.donationsByZone.norte,
      "color": '#0D2662',
    },
    {
      "id": "oeste",
      "label": "Oeste",
      "formatted": props.donationsByZone.oeste,
      "value": props.donationsByZone.oeste,
      "color": '#00FF00',
    },
    {
      "id": "sul",
      "label": "Sul",
      "formatted": props.donationsByZone.sul,
      "value": props.donationsByZone.sul,
      "color": '#FED983',
    },
  ].filter(obj => obj.value > 0)

  const colors = data.map(zone => zone.color);

  return (
    <Container>
      <div>
        <h4>Zonas beneficiadas (em %)</h4>
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
