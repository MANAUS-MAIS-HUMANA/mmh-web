import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ data, maxValue }) => {

  const mainColor = "#0D2662"
  const theme = {
    axis: {

      tickColor: mainColor,
      ticks: {
        line: {
          stroke: mainColor
        },
        text: {
          fill: mainColor
        }
      },
      legend: {
        text: {
          fill: mainColor

        }
      }
    },
    grid: {
      line: {
        stroke: mainColor
      }
    }
  };


  return (
    <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 50, right: 40, bottom: 50, left: 70 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: maxValue, stacked: true, reverse: false }} // Alterar os limites no futuro de acordo com o data
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Mês',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 5,
            legend: 'R$',
            legendOffset: -50,
            legendPosition: 'middle'
        }}
        colors={'#3857A3'}
        lineWidth={5}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={'#FED983'}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[

        ]}
    />
)
}
export default LineChart;
