import { getUserListData } from './userState';
import { getUserList } from '../../../network/user/index';
import { userListType } from '../../../network/user/types'

// 用户列表的信息获取接口参数

// 获取用户列表
export const getUserListAction = (userDataObj: userListType) => {
  return (dispatch: any) => {
    getUserList(userDataObj)
    .then(res => {
      dispatch(getUserListData(res));
    })
  }
}
