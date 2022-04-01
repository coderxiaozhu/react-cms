import { createSlice } from '@reduxjs/toolkit'

interface charItemState {
  code: Number;
  data: any[]
}

interface charState {
  pieObj: charItemState,
  mapObj: charItemState,
  lineObj: charItemState,
  roseObj: charItemState
}

const initialState: charState = {
  pieObj: {
    code: 0,
    data: []
  },
  mapObj: {
    code: 0,
    data: []
  },
  lineObj: {
    code: 0,
    data: []
  },
  roseObj: {
    code: 0,
    data: []
  }
}

export const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    getBingData: (state, action) => {
      state.pieObj = action.payload;
    },
    getMapData: (state, action) => {
      state.mapObj = action.payload;
    },
    getLineData: (state, action) => {
      state.lineObj = action.payload;
    },
    getRoseData: (state, action) => {
      state.roseObj = action.payload
    }
  }
})

export const { getBingData, getMapData, getLineData, getRoseData } = dashboardReducer.actions
