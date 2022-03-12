import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'
import NProgress from 'nprogress'
import { get } from './storage';
import { message } from 'antd';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

request.interceptors.request.use(
  config => {
    NProgress.start();
    config.headers!.Authorization = get('token');
    return config
  },
  error => {
    NProgress.done();
    return Promise.reject(error);
  }
)

request.interceptors.response.use(
  response => {
    message.success("登录成功");
    NProgress.done();
    return response.data;
  },
  error => {
    if(error && error.response) {
      switch(error.response.status) {
          case 400:
            message.error('用户名不存在~');
              break;
          case 401:
            message.error('未授权访问');
              break;
          default:
            message.error('网络请求错误');
      }
    }
    NProgress.done();
    return Promise.reject(error)
}
)

export default request;
