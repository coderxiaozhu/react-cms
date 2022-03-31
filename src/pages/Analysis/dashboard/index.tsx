import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBingDataAction } from './createActions'
import { RootState } from '../../../store/index'

import { XZdashboard } from './style'

const Dashboard = memo(() => {
  // state hooks

  // redux hooks
  // 饼图数据
  const bingData = useSelector((state: RootState) => state.dashboardReducer.data, shallowEqual)
  console.log(bingData);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getBingDataAction())
  }, [dispatch])

  return (
    <XZdashboard>
      Dashboard11
    </XZdashboard>
  )
})

export default Dashboard
