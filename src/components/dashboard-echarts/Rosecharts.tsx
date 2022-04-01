import React, { memo } from 'react';
import ReactEcharts from 'echarts-for-react';

interface RosechartsProps {
  roseData?: {
    data: number[],
    xLabel: string[]
  }
}

const Rosecharts: React.FC<RosechartsProps> = memo((props) => {
  console.log(props.roseData);
  let dataAxis = props.roseData?.xLabel;
  let data = props.roseData?.data;
  let option: any = {
    xAxis: {
      type: 'category',
      data: dataAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: data,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  return (
    <ReactEcharts option={ option }></ReactEcharts>
  )
})

export default Rosecharts
