import request from "../request";

export const getCategoryBingData = () => {
  return request({
    url: "/goods/category/count"
  })
}

export const getMapChartData = () => {
  return request({
    url: "/goods/address/sale"
  })
}

export const getLineChartData = () => {
  return request({
    url: "/goods/category/sale"
  })
}

export const getRoseCharData = () => {
  return request({
    url: "/goods/category/favor"
  })
}
