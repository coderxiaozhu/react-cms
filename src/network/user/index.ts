import request from "../request";
import { userListType } from './types'

export const getUserList = (data: userListType) => {
  return request({
    url: "/users/list",
    method: "POST",
    data
  })
}
