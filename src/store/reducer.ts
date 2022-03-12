import { combineReducers } from "redux-immutable";
import { reducer as loginReduer } from "../pages/Login/store";

const reducer = combineReducers({
  loginReduer
})

export default reducer
