import { getLogin } from '../../../network/Login/index'
import { LoginState, ACTION_TYPE } from '../types/index'

const changeLogin  = (userInfo:LoginState)  => ({
  type: ACTION_TYPE.USER_INFO,
  userInfo
})


export const changeLoginAction = (userInfo: LoginState) => {
  return (dispatch:any) => {
    const { username, password } = userInfo;
    getLogin(username, password)
    .then(res => {
      dispatch(changeLogin(res.data))
    })
  }
}
