import  { AxiosRequestConfig } from 'axios';
import { api } from '..';

api.interceptors.request.use(
  async (conf: AxiosRequestConfig) => {
    conf.headers = {
      ...conf.headers,
    };
    return conf;
  },
  (err) => {
    return err.response;
  },
);