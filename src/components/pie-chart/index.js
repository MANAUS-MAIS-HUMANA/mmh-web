import React from 'react'
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const PieChart = ({ data, colors, horizontalLength}) => {

  const margin = 25

  return (
    <ResponsivePie
        data={data}
        startAngle={0}
        endAngle={450}
        margin={{ top: margin, right: margin, bottom: margin, left: margin }}
        innerRadius={0.75}
        padAngle={0}
        cornerRadius={0}
        colors={ colors? colors : ['#7AFFB7', '#3857A3']}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={0}
        radialLabel={d => `${d.formatted}`}
        radialLabelsTextXOffset={10}
        radialLabelsTextColor="#3857A3"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={horizontalLength || 5}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={'#3857A3'}
        theme={{labels: {text: {fontSize: "1.2rem", fontWeight: 'bold'}}}}
        enableSlicesLabels={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[

        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[

        ]}
    />
)
}
export default PieChart
