import React, { memo, useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card
} from 'antd'

import {
  getBingDataAction,
  getMapChartDataAction,
  getLineChartDataAction,
  getRoseChartDataAction
} from './createActions'
import { RootState } from '../../../store/index'
import { XZdashboard } from './style'
import Piecharts from '../../../components/dashboard-echarts/Piecharts'
import Mapcharts from '../../../components/dashboard-echarts/Mapcharts'
import Flowercharts from '../../../components/dashboard-echarts/Flowercharts'
import Linecharts from '../../../components/dashboard-echarts/Linecharts'
import Rosecharts from '../../../components/dashboard-echarts/Rosecharts'

interface lineChartProps {
  xLabel: string[];
  yValue: number[]
}

interface roseChartProps {
  xLabel: string[];
  data: number[]
}

const Dashboard = memo(() => {
  // state hooks
  // 处理后的面积图的数据
  const [lineChart, setLineChart] = useState<lineChartProps>();
  // 处理后的柱形图数据
  const [roseChart, setRoseChart] = useState<roseChartProps>();

  // redux hooks
  // 饼图数据
  const pieData = useSelector((state: RootState) => state.dashboardReducer.pieObj.data)
  // 地图数据
  const mapData = useSelector((state: RootState) => state.dashboardReducer.mapObj.data);
  // 面积图数据
  const lineData = useSelector((state: RootState) => state.dashboardReducer.lineObj.data);
  // 柱状图
  const roseData = useSelector((state: RootState) => state.dashboardReducer.roseObj.data);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    // 饼图和玫瑰图数据
    dispatch(getBingDataAction());
    // 地图数据
    dispatch(getMapChartDataAction());
    // 面积图数据
    dispatch(getLineChartDataAction());
    // 柱形图数据
    dispatch(getRoseChartDataAction());
  }, [dispatch])

  // handle function
  // 饼图和玫瑰图
  const changePieData = pieData.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })

  // 地图
  const changeMapData = mapData.map((item) => {
    return {
      name: item.address,
      value: item.count
    }
  })

  // 面积图
  const changeLineData = useCallback(() => {
    // x轴显示的名称
    let xLabel: string[] = [];
    // y轴显示的数据
    let yValue: number[] = [];
    for(const key of lineData) {
      xLabel.push(key.name);
      yValue.push(key.goodsCount)
    }
    return { xLabel, yValue }
  }, [lineData])

  // 柱形图
  const changeRoseData = useCallback(() => {
    let data: number[] = [];
    let xLabel: string[] = []
    for(const key of roseData) {
      xLabel.push(key.name);
      data.push(key.goodsFavor);
    }
    return { data, xLabel }
  }, [roseData])

  useEffect(() => {
    const lineRes = changeLineData();
    setLineChart(lineRes);
    const roseRes = changeRoseData();
    setRoseChart(roseRes)
  }, [changeLineData, changeRoseData])

  return (
    <XZdashboard>
      <div className='top'>
        <div className='left'>
          <Card title="分类商品数量(饼图)">
            <Piecharts pieData={changePieData} />
          </Card>
        </div>
        <div className='content'>
          <Card title="不同城市商品销量">
            <Mapcharts mapData={changeMapData} />
          </Card>
        </div>
        <div className='right'>
          <Card title="分类商品数量(玫瑰图)">
            <Flowercharts flowerData={changePieData} />
          </Card>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <Card title="分类商品的销量">
            <Linecharts lineData={ lineChart } />
          </Card>
        </div>
        <div className='bottom-right'>
          <Card title="分类商品的收藏">
            <Rosecharts roseData={ roseChart } />
          </Card>
        </div>
      </div>

    </XZdashboard>
  )
})

export default Dashboard
