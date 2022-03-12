import { Map } from 'immutable';
import { ACTION_TYPE, LoginAction } from '../types/index'

const initalState = Map({
  userInfo: {}
})

function reducer(state = initalState, action: LoginAction) {
  switch(action.type) {
    case ACTION_TYPE.USER_INFO:
      return state.set('userInfo', action.payload)
    default:
      return state
  }
}

export default reducer
