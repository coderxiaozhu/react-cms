import { createSlice } from '@reduxjs/toolkit'
interface charState {
  code: Number;
  data: any[]
}

const initialState: charState = {
  code: 0,
  data: []
}

export const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    getBingData: (state, action) => {
      const { code, data } = action.payload;
      state.code = code;
      state.data = data
    }
  }
})

export const { getBingData } = dashboardReducer.actions
