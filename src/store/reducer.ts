// import { combineReducers } from "redux-immutable";
import { combineReducers } from "@reduxjs/toolkit";
// import { reducer as AnalysisReducer } from "../pages/Analysis/store";
// 商品统计的reducer
import { dashboardReducer } from '../pages/Analysis/dashboard/dashboardState'
// 用户管理的reducer
import { userReducer } from '../pages/System/user/userState'

const reducer = combineReducers({
  // AnalysisReducer
  dashboardReducer: dashboardReducer.reducer,
  userReducer: userReducer.reducer
})

export default reducer
