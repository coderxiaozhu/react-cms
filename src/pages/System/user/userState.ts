import { createSlice } from '@reduxjs/toolkit';

interface userItemState {
  code: number,
  data: {
    list: any[],
    totalCount: number
  }
};

interface userState {
  userListData: userItemState
}

const initialState: userState = {
  userListData: {
    code: 0,
    data: {
      list: [],
      totalCount: 0
    }
  }
}

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getUserListData: (state, action) => {
      state.userListData = action.payload
    }
  }
})


export const { getUserListData } = userReducer.actions;
