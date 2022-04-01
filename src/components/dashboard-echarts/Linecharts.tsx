import React, { memo } from 'react';
import Reactecharts from 'echarts-for-react';

export interface LineDataProps {
  lineData?: {
    xLabel: string[],
    yValue: number[]
  }
}

const Linecharts: React.FC<LineDataProps> = memo((props) => {
  let option:any = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    toolbox: {
        feature: {
          saveAsImage: {}
        }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.lineData?.xLabel
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.lineData?.yValue,
        name: "分别销量",
        emphasis: {
          focus: 'series'
        },
        type: 'line',
        areaStyle: {}
      }
    ]
  }
  return (
    <Reactecharts option={ option } />
  )
})

export default Linecharts
