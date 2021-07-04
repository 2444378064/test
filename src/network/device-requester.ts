import axios, { AxiosRequestConfig } from 'axios';

export function request(config: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: 'http://hb.mdbake.com/'
  });
  return instance(config);
}