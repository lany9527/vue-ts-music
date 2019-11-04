import * as axios from 'axios';
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { baseURL } from './constant';

const service = axios.default.create({
  baseURL,
  timeout: 3000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: any) => {
  Promise.reject(error);
});

service.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    Toast.fail('请求错误!');
  } else {
    return response.data;
  }
}, (error: any) => {
  return Promise.reject(error);
});

export default service;
