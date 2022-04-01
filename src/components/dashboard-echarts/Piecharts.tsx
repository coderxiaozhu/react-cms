import React, { memo } from 'react';
import ReactEcharts from 'echarts-for-react';

import { DataType } from './types';

interface PieData {
  pieData: DataType[];
}

const Piecharts: React.FC<PieData> = memo((props) => {
  let option:any = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  return (
    <ReactEcharts option={option} />
  )
})

export default Piecharts
