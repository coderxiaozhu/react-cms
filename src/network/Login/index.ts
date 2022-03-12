import request from "../request"

export const getLogin = (name: string, password: string) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      name,
      password
    }
  })
}
