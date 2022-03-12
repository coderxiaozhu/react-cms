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
    NProgress.done();
    return response.data;
  },
  error => {
    message.error('网络请求错误');
    NProgress.done();
    return Promise.reject(error)
}
)

export default request;
