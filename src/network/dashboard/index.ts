import request from "../request";

export const getCategoryBingData = () => {
  return request({
    url: "/goods/category/count"
  })
}
