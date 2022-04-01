import React, { memo } from 'react';
import ReactEcharts from 'echarts-for-react';
import { DataType } from './types';

interface FlowerData {
  flowerData: DataType[]
}

const Flowercharts: React.FC<FlowerData> = memo((props) => {
  let option:any = {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 90],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.flowerData
      }
    ]
  }
  return (
    <ReactEcharts option={ option } />
  )
})

export default Flowercharts
