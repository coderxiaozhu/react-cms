import { getBingData, getMapData, getLineData, getRoseData } from './dashboardState'
import { getCategoryBingData, getMapChartData, getLineChartData, getRoseCharData } from '../../../network/dashboard/index'

export const getBingDataAction = () => {
  return (dispatch:any) => {
    getCategoryBingData()
    .then(res => {
      dispatch(getBingData(res))
    })
  }
}

export const getMapChartDataAction = () => {
  return (dispatch: any) => {
    getMapChartData()
    .then(res => {
      dispatch(getMapData(res));
    })
  }
}

export const getLineChartDataAction = () => {
  return (dispatch: any) => {
    getLineChartData()
    .then(res => {
      dispatch(getLineData(res))
    })
  }
}

export const getRoseChartDataAction = () => {
  return (dispatch: any) => {
    getRoseCharData()
    .then(res => {
      dispatch(getRoseData(res));
    })
  }
}
