import request from "../request"

export const getAccountLogin = (name: string, password: string) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      name,
      password
    }
  })
}
