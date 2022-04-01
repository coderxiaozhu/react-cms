import React, { memo } from 'react'
import ReactEcharts from 'echarts-for-react';

import { DataType } from './types';
import { convertData } from '../../utils/convert-data'
import chinaMap from '../../utils/chinaMap.json'
import * as echarts from 'echarts/core';

interface MapData {
  mapData: DataType[];
}

const Mapcharts: React.FC<MapData> = memo((props) => {
  echarts.registerMap("china", { geoJSON: chinaMap });
  let option: any = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        console.log(params);
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#000'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: {
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
  return (
    <ReactEcharts option={option} />
  )
})

export default Mapcharts
