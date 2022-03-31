import { getBingData } from './dashboardState'
import { getCategoryBingData } from '../../../network/dashboard/index'

export const getBingDataAction = () => {
  return (dispatch:any) => {
    getCategoryBingData()
    .then(res => {
      dispatch(getBingData(res))
    })
  }
}
