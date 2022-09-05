import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';

const config = {
  api: {
    baseURL: environment.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

export const api: AxiosInstance = axios.create({ ...config.api });