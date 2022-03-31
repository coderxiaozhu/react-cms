// import { combineReducers } from "redux-immutable";
import { combineReducers } from "@reduxjs/toolkit";
// import { reducer as AnalysisReducer } from "../pages/Analysis/store";
import { dashboardReducer } from '../pages/Analysis/dashboard/dashboardState'

const reducer = combineReducers({
  // AnalysisReducer
  dashboardReducer: dashboardReducer.reducer
})

export default reducer
